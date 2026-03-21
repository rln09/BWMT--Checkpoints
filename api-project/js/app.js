// ================================
// Configuration
// ================================
const API_BASE = 'https://jsonplaceholder.typicode.com';
const POSTS_LIMIT = 10;

// ================================
// DOM Elements
// ================================
const elements = {
    loadBtn: document.getElementById('loadBtn'),
    clearBtn: document.getElementById('clearBtn'),
    status: document.getElementById('status'),
    container: document.getElementById('posts-container')
};

// ================================
// API Functions
// ================================
async function fetchPosts(limit = POSTS_LIMIT) {
    const response = await fetch(`${API_BASE}/posts?_limit=${limit}`);

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
}

// ================================
// Display Functions
// ================================
function showStatus(message, type = '') {
    elements.status.textContent = message;
    elements.status.className = type;
}

function displayPosts(posts) {
    const html = posts.map(post => `
        <article class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <div class="meta">Post #${post.id}</div>
        </article>
    `).join('');

    elements.container.innerHTML = html;
}

function clearPosts() {
    elements.container.innerHTML = '';
    showStatus('');
}

// ================================
// Event Handlers
// ================================
async function handleLoadPosts() {
    elements.loadBtn.disabled = true;
    showStatus('Loading posts...', 'loading');

    try {
        const posts = await fetchPosts();
        displayPosts(posts);
        showStatus(`Loaded ${posts.length} posts`, 'success');
    } catch (error) {
        showStatus(`Error: ${error.message}`, 'error');
        console.error('Failed to load posts:', error);
    } finally {
        elements.loadBtn.disabled = false;
    }
}

// ================================
// Initialisation
// ================================
function init() {
    elements.loadBtn.addEventListener('click', handleLoadPosts);
    elements.clearBtn.addEventListener('click', clearPosts);
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
// Add to API Functions
async function fetchPost(id) {
    const response = await fetch(`${API_BASE}/posts/${id}`);

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
}

// Add to Display Functions
function displaySinglePost(post) {
    elements.container.innerHTML = `
        <article class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <div class="meta">Post #${post.id} by User #${post.userId}</div>
        </article>
    `;
}
async function safeFetch(url) {
    let response;

    // Try to make the request
    try {
        response = await fetch(url);
    } catch (networkError) {
        throw new Error('Network error: Unable to connect. Please check your internet connection.');
    }

    // Check HTTP status
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('The requested resource was not found.');
        }
        if (response.status === 500) {
            throw new Error('Server error. Please try again later.');
        }
        throw new Error(`HTTP error: ${response.status}`);
    }

    // Try to parse JSON
    try {
        return await response.json();
    } catch (parseError) {
        throw new Error('Error parsing response data.');
    }
}
function validatePost(post) {
    if (!post || typeof post !== 'object') {
        return false;
    }
    if (!post.id || !post.title || !post.body) {
        return false;
    }
    return true;
}

function validatePosts(posts) {
    if (!Array.isArray(posts)) {
        throw new Error('Expected an array of posts');
    }

    const validPosts = posts.filter(validatePost);

    if (validPosts.length === 0) {
        throw new Error('No valid posts found');
    }

    return validPosts;
}
function showError(error, retryFn = null) {
    const errorHtml = `
        <div class="error-message">
            <h3>Something went wrong</h3>
            <p>${error.message}</p>
            ${retryFn ? '<button class="retry-btn">Try Again</button>' : ''}
        </div>
    `;

    elements.container.innerHTML = errorHtml;
    elements.status.textContent = '';

    if (retryFn) {
        document.querySelector('.retry-btn').addEventListener('click', retryFn);
    }
}
async function handleLoadPosts() {
    elements.loadBtn.disabled = true;
    showStatus('Loading posts...', 'loading');
    elements.container.innerHTML = '';

    try {
        // Fetch with error handling
        const data = await safeFetch(`${API_BASE}/posts?_limit=${POSTS_LIMIT}`);

        // Validate data
        const posts = validatePosts(data);

        // Display
        displayPosts(posts);
        showStatus(`Loaded ${posts.length} posts`, 'success');

    } catch (error) {
        console.error('Load failed:', error);
        showError(error, handleLoadPosts);
    } finally {
        elements.loadBtn.disabled = false;
    }
}
async function fetchWithTimeout(url, timeout = 10000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new Error('Request timed out. Please try again.');
        }
        throw error;
    }
}
async function fetchWithRetry(url, maxRetries = 3) {
    let lastError;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`Attempt ${attempt}/${maxRetries}`);
            return await safeFetch(url);
        } catch (error) {
            lastError = error;
            console.warn(`Attempt ${attempt} failed:`, error.message);

            // Don't retry 404s
            if (error.message.includes('not found')) {
                throw error;
            }

            // Wait before retrying (exponential backoff)
            if (attempt < maxRetries) {
                await new Promise(resolve =>
                    setTimeout(resolve, 1000 * attempt)
                );
            }
        }
    }

    throw lastError;
}