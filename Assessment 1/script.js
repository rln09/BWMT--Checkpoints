const cvData = {
  profile: `Motivated and detail-oriented final-year Bachelor of Commerce student majoring in Business Information Systems. Demonstrates strong analytical, technical, and problem-solving abilities with growing expertise in business programming, project management, business analytics, and information security. Adaptable and dependable, with the ability to work effectively both independently and within a team. Passionate about leveraging technology and data-driven insights to support business decision-making.`,

  education: [
    {
      title: "Bachelor of Commerce (Business Information Systems)",
      institution: "Curtin University, Mauritius",
      status: "Final Year Student",
      coursework: [
        "Business programming",
        "Project management",
        "Business analytics",
        "Information security",
        "Business applications"
      ],
      tools: ["Power BI", "SAP"]
    },
    {
      title: "A Level – St George’s College (2021)",
      details: "Business Studies, English Language, Accounting & Computer Science"
    },
    {
      title: "AS Level – St George’s College (2020)",
      details: "1 A, 1 B & 2 Ds in English Language, Business Studies, Accounting & Computer Science"
    },
    {
      title: "O Level – Dominican Convent High School (2016–2019)",
      details: "5 As, 2 Bs & 2 Cs (including Mathematics & English Language)"
    }
  ],

  experience: [
    {
      role: "Receptionist",
      company: "Sable Press",
      year: "2023",
      responsibilities: [
        "Delivered professional front-desk and customer service support",
        "Strengthened communication and interpersonal skills through daily client interactions",
        "Gained exposure to sales and marketing processes",
        "Performed administrative duties, enhancing organizational and office management skills"
      ]
    }
  ],

  skills: [
    "Business analysis & problem solving",
    "Communication & interpersonal skills",
    "Project coordination",
    "Data analysis & reporting",
    "Adaptability & time management",
    "Attention to detail",
    "Teamwork & collaboration",
    "Computer literacy (Power BI, SAP, Microsoft Office)"
  ],

  extracurricular: {
    sports: [
      "Swimming – Competitive swimmer (2012–2020); former member of Otters Swimming Club",
      "Hockey – U16 B Team (2018); 1st Team Girls’ Hockey (2021)"
    ],
    cultural: [
      "Gavel Society (2019)",
      "School Choir (2016–2021)",
      "Interact Society (2020–2021)",
      "International & Cultural Affairs Society (2021)"
    ]
  },

  service: [
    "St Giles Special School (2019): Assisted as a teacher aide, supporting students for up to 7 hours daily over a 2-week period",
    "Jairos Jiri Southerton (2020): Supported teaching staff for one week, contributing to student care and classroom activities"
  ],

  volunteer: [
    "The Helping Club – Member since 2020",
    "Dare To Dream Charity Organisation – Social Media & Marketing Co-Manager (2022)"
  ]
};


// 🔽 Render CV to HTML
function renderCV() {
  document.getElementById("profile").textContent = cvData.profile;

  // Education
  const edu = document.getElementById("education");
  cvData.education.forEach(e => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${e.title}</h3>
      ${e.institution ? `<p>${e.institution}</p>` : ""}
      ${e.status ? `<p><em>${e.status}</em></p>` : ""}
      ${e.details ? `<p>${e.details}</p>` : ""}
      ${e.coursework ? `<p><strong>Coursework:</strong> ${e.coursework.join(", ")}</p>` : ""}
      ${e.tools ? `<p><strong>Tools:</strong> ${e.tools.join(", ")}</p>` : ""}
    `;
    edu.appendChild(div);
  });

  // Experience
  const exp = document.getElementById("experience");
  cvData.experience.forEach(job => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${job.role} – ${job.company} (${job.year})</h3>
      <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join("")}</ul>
    `;
    exp.appendChild(div);
  });

  // Skills
  const skills = document.getElementById("skills");
  cvData.skills.forEach(s => {
    const li = document.createElement("li");
    li.textContent = s;
    skills.appendChild(li);
  });

  // Extracurricular
  const extra = document.getElementById("extracurricular");
  extra.innerHTML = `
    <h4>Sports</h4>
    <ul>${cvData.extracurricular.sports.map(s => `<li>${s}</li>`).join("")}</ul>
    <h4>Cultural Activities</h4>
    <ul>${cvData.extracurricular.cultural.map(c => `<li>${c}</li>`).join("")}</ul>
  `;

  // Service
  const service = document.getElementById("service");
  cvData.service.forEach(s => {
    const li = document.createElement("li");
    li.textContent = s;
    service.appendChild(li);
  });

  // Volunteer
  const volunteer = document.getElementById("volunteer");
  cvData.volunteer.forEach(v => {
    const li = document.createElement("li");
    li.textContent = v;
    volunteer.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", renderCV);
// Quality Manager Project Data
const qualityManagerData = {
    projectTitle: "Website Development",
    role: "Quality Manager",
    duration: "6 weeks (4 sprints of 1 week each)",
    
    overview: "A fully responsive portfolio website developed, demonstratin modern design principles, and interactive features. As Quality manager, I established a culture of quality within the team, ensuring all project deliverables met agreed quality standards through structured verification and validation processes.",
    
    sprints: [
        {
            number: 1,
            name: "HTML Structure & Semantic Markup",
            deliverables: "Basic page structure, navigation, content organization",
            completed: true
        },
        {
            number: 2,
            name: "CSS Styling & Responsive Design",
            deliverables: "Visual design, mobile/tablet/desktop responsiveness",
            completed: true
        },
        {
            number: 3,
            name: "JavaScript Interactivity",
            deliverables: "Dark mode toggle, interactive components, DOM manipulation",
            completed: true
        },
        {
            number: 4,
            name: "API Integration & Final Refinements",
            deliverables: "REST API integration (Flag Quiz Game), testing, deployment",
            completed: true
        }
    ],
    
    definitionOfDone: {
        acceptanceCriteria: [
            "Website must display correctly on Chrome, Firefox, and Edge",
            "All navigation links must function without errors",
            "Images must load within 3 seconds",
            "Dark mode preference must persist using localStorage"
        ],
        testScenarios: [
            "Verify responsive layout on 320px, 768px, 1024px, and 1920px viewports",
            "Test dark mode toggle across all pages",
            "Validate form inputs with empty and invalid entries",
            "Confirm API fetches handle network errors gracefully"
        ]
    },
    
    technologies: ["HTML5", "CSS3", "JavaScript (Vanilla)", "Git & GitHub", "Netlify", "Blackboard", "W3C Validators"],
    
    learningOutcomes: [
        "Established a culture of quality within a web development team",
        "Led Definition of Done activities to document acceptance criteria, constraints, and test scenarios for each story",
        "Evaluated story outcomes against quality standards to determine completion status",
        "Conducted and documented Sprint Retrospectives to improve future sprint outcomes",
        "Liaised effectively with Document Manager and Scrum Master roles",
        "Tracked and reported on Quality Manager KPIs (100% retrospective report completion)",
    ]
};

// Function to render the Quality Manager project section
function renderQualityManagerProject() {
    const container = document.getElementById('quality-manager-project');
    if (!container) {
        console.error('Quality manager project container not found. Add <div id="quality-manager-project"></div> to your HTML');
        return;
    }
    const html = `
        <div class="qm-project-container">
            <!-- Header Section -->
            <div class="qm-header">
                <h1 class="qm-title">${qualityManagerData.projectTitle}</h1>
                <div class="qm-badges">
                    <span class="qm-badge role">🎯 Role: ${qualityManagerData.role}</span>
                    <span class="qm-badge duration">📅 ${qualityManagerData.duration}</span>
                </div>
                <p class="qm-overview">${qualityManagerData.overview}</p>
            </div>

            <!-- Definition of Done -->
            <section class="qm-section">
                <h2>✅ Definition of Done (DoD)</h2>
                <div class="qm-dod-grid">
                    <div class="qm-dod-card">
                        <h3>Acceptance Criteria</h3>
                        <ul>
                            ${qualityManagerData.definitionOfDone.acceptanceCriteria.map(criteria => `<li>${criteria}</li>`).join('')}
                        </ul>
                    </div>
                
                    <div class="qm-dod-card">
                        <h3>Test Scenarios</h3>
                        <ul>
                            ${qualityManagerData.definitionOfDone.testScenarios.map(scenario => `<li>${scenario}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Technologies -->
            <section class="qm-section">
                <h2>🛠️ Technologies Used</h2>
                <div class="qm-tech-tags">
                    ${qualityManagerData.technologies.map(tech => `<span class="qm-tech-tag">${tech}</span>`).join('')}
                </div>
            </section>

            <!-- Learning Outcomes -->
            <section class="qm-section">
                <h2>🎓 Learning Outcomes (Quality Manager Role)</h2>
                <ul class="qm-learning-list">
                    ${qualityManagerData.learningOutcomes.map(outcome => `<li>${outcome}</li>`).join('')}
                </ul>
            </section>
        </div>
    `;

    container.innerHTML = html;
}

// Function to add CSS styles dynamically
function addQualityManagerStyles() {
    const styles = `
        <style>
            /* Quality Manager Project Styles */
            .qm-project-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 2rem;
                background: #f9f9f9;
                border-radius: 16px;
            }
            
            .qm-header {
                text-align: center;
                margin-bottom: 2rem;
                padding-bottom: 1rem;
                border-bottom: 3px solid #340462;
            }
            
            .qm-title {
                color: #340462;
                font-size: 1.8rem;
                margin-bottom: 1rem;
            }
            
            .qm-badges {
                display: flex;
                justify-content: center;
                gap: 1rem;
                flex-wrap: wrap;
                margin-bottom: 1rem;
            }
            
            .qm-badge {
                display: inline-block;
                padding: 0.5rem 1rem;
                border-radius: 20px;
                font-weight: bold;
            }
            
            .qm-badge.role {
                background: #340462;
                color: white;
            }
            
            .qm-badge.duration {
                background: #75257d;
                color: white;
            }
            
            .qm-overview {
                font-size: 1.1rem;
                line-height: 1.6;
                color: #333;
                margin-top: 1rem;
            }
            
            .qm-section {
                background: white;
                margin: 1.5rem 0;
                padding: 1.5rem;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            
            .qm-section h2 {
                color: #340462;
                border-left: 4px solid #75257d;
                padding-left: 1rem;
                margin-bottom: 1.5rem;
            }
            
            .qm-section h3 {
                color: #340462;
                margin-bottom: 0.5rem;
            }
            
            .qm-sprint-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
            }
            
            .qm-sprint-card {
                background: #f0eff0;
                padding: 1rem;
                border-radius: 8px;
                text-align: center;
            }
            
            .qm-sprint-number {
                background: #340462;
                color: white;
                display: inline-block;
                padding: 0.2rem 0.8rem;
                border-radius: 20px;
                font-size: 0.8rem;
                margin-bottom: 0.5rem;
            }
            
            .qm-status.completed {
                display: inline-block;
                background: #4caf50;
                color: white;
                padding: 0.2rem 0.6rem;
                border-radius: 12px;
                font-size: 0.7rem;
                margin-top: 0.5rem;
            }
            
            .qm-dod-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1rem;
            }
            
            .qm-dod-card {
                background: #f0eff0;
                padding: 1rem;
                border-radius: 8px;
            }
            
            .qm-dod-card ul, .qm-report-card ul {
                margin-left: 1.2rem;
                margin-top: 0.5rem;
            }
            
            .qm-dod-card li, .qm-report-card li {
                margin: 0.5rem 0;
            }
            
            .qm-retro-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 1rem;
            }
            
            .qm-retro-card {
                background: #f0eff0;
                padding: 1rem;
                border-radius: 8px;
            }
            
            .qm-retro-item {
                margin: 0.5rem 0;
                padding: 0.5rem;
                border-radius: 4px;
            }
            
            .qm-retro-item.start {
                background: #e8f5e9;
            }
            
            .qm-retro-item.stop {
                background: #ffebee;
            }
            
            .qm-retro-item.continue {
                background: #e3f2fd;
            }
            
            .qm-retro-footer {
                display: flex;
                justify-content: space-between;
                margin-top: 0.5rem;
                font-size: 0.8rem;
                color: #666;
            }
            
            .status-filed {
                color: #4caf50;
            }
            
            .qm-kpi-card {
                background: #340462;
                color: white;
                padding: 1.5rem;
                border-radius: 12px;
            }
            
            .qm-kpi-goal, .qm-kpi-subgoal {
                margin-bottom: 0.5rem;
            }
            
            .qm-kpi-metrics {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 0.5rem;
                margin: 1rem 0;
            }
            
            .qm-kpi-item {
                background: rgba(255,255,255,0.2);
                padding: 0.3rem 0.6rem;
                border-radius: 4px;
            }
            
            .qm-kpi-item.target {
                background: #4caf50;
            }
            
            .qm-kpi-item.actual {
                background: #ff9800;
            }
            
            .qm-kpi-rationale {
                margin-top: 0.5rem;
                font-style: italic;
                background: rgba(255,255,255,0.1);
                padding: 0.5rem;
                border-radius: 4px;
            }
            
            .qm-reports-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1rem;
            }
            
            .qm-report-card {
                background: #f0eff0;
                padding: 1rem;
                border-radius: 8px;
            }
            
            .qm-tech-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
            }
            
            .qm-tech-tag {
                background: #340462;
                color: white;
                padding: 0.3rem 0.8rem;
                border-radius: 20px;
                font-size: 0.9rem;
            }
            
            .qm-metrics-table {
                width: 100%;
                border-collapse: collapse;
            }
            
            .qm-metrics-table th,
            .qm-metrics-table td {
                padding: 0.75rem;
                text-align: left;
                border-bottom: 1px solid #ddd;
            }
            
            .qm-metrics-table th {
                background: #340462;
                color: white;
            }
            
            .qm-metrics-table td.success {
                color: #4caf50;
                font-weight: bold;
            }
            
            .qm-learning-list {
                list-style: none;
                padding: 0;
            }
            
            .qm-learning-list li {
                padding: 0.5rem 0;
                padding-left: 1.5rem;
                position: relative;
            }
            
            .qm-learning-list li:before {
                content: "✓";
                color: #4caf50;
                font-weight: bold;
                position: absolute;
                left: 0;
            }
            
            @media (max-width: 768px) {
                .qm-project-container {
                    padding: 1rem;
                }
                .qm-dod-grid, .qm-retro-grid, .qm-sprint-grid {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
    }
// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    addQualityManagerStyles();
    renderQualityManagerProject();
});
// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    addQualityManagerStyles();
    renderQualityManagerProject();
});
document.addEventListener("DOMContentLoaded", renderCV);S
//
document.addEventListener("DOMContentLoaded", renderCV);

/**
 * Simple API Fetcher
 * Functional API integration for ISYS3004 Portfolio
 * Checkpoint 1.4: API Integration
 */

// ====================
// DOM Elements
// ====================
const resultsDiv = document.getElementById('results');
const statusDiv = document.getElementById('status');
const searchInput = document.getElementById('country-search');
const searchBtn = document.getElementById('search-country');

// ====================
// Helper Functions
// ====================

// Show status message
function showStatus(message, type = 'loading') {
    statusDiv.textContent = message;
    statusDiv.className = `status ${type}`;
}

// Clear status
function clearStatus() {
    statusDiv.textContent = '';
    statusDiv.className = 'status';
}

// Show error
function showError(message) {
    statusDiv.textContent = `❌ ${message}`;
    statusDiv.className = 'status error';
    setTimeout(() => {
        if (statusDiv.textContent.includes(message)) {
            clearStatus();
        }
    }, 3000);
}

// Show loading
function showLoading() {
    resultsDiv.innerHTML = '<div class="loading-spinner"></div><p class="loading-text">Fetching data from API...</p>';
}

// Clear results
function clearResults() {
    resultsDiv.innerHTML = '';
}

// ====================
// API Fetch Functions
// ====================

// Fetch Posts (JSONPlaceholder)
async function fetchPosts() {
    showLoading();
    clearStatus();
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const posts = await response.json();
        
        let html = '<h3>📝 Latest Posts</h3><div class="card-grid">';
        posts.forEach(post => {
            html += `
                <div class="card">
                    <h4>${escapeHtml(post.title)}</h4>
                    <p>${escapeHtml(post.body.substring(0, 100))}...</p>
                    <small>Post ID: ${post.id} | User: ${post.userId}</small>
                </div>
            `;
        });
        html += '</div>';
        
        resultsDiv.innerHTML = html;
        showStatus(`✅ Loaded ${posts.length} posts successfully!`, 'success');
        
    } catch (error) {
        console.error('Posts error:', error);
        showError('Failed to load posts. Check your connection.');
        resultsDiv.innerHTML = '<p class="error-placeholder">⚠️ Could not load posts. Please try again.</p>';
    }
}

// Fetch Users (JSONPlaceholder)
async function fetchUsers() {
    showLoading();
    clearStatus();
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const users = await response.json();
        
        let html = '<h3>👥 Users Directory</h3><div class="card-grid">';
        users.forEach(user => {
            html += `
                <div class="card">
                    <h4>${escapeHtml(user.name)}</h4>
                    <p><strong>Email:</strong> ${escapeHtml(user.email)}</p>
                    <p><strong>Phone:</strong> ${escapeHtml(user.phone)}</p>
                    <p><strong>Company:</strong> ${escapeHtml(user.company.name)}</p>
                    <p><strong>Website:</strong> ${escapeHtml(user.website)}</p>
                </div>
            `;
        });
        html += '</div>';
        
        resultsDiv.innerHTML = html;
        showStatus(`✅ Loaded ${users.length} users successfully!`, 'success');
        
    } catch (error) {
        console.error('Users error:', error);
        showError('Failed to load users.');
        resultsDiv.innerHTML = '<p class="error-placeholder">⚠️ Could not load users. Please try again.</p>';
    }
}

// Fetch Countries (REST Countries)
async function fetchCountries() {
    showLoading();
    clearStatus();
    
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        let countries = await response.json();
        // Get top 12 by population
        countries = countries.sort((a, b) => b.population - a.population).slice(0, 12);
        
        let html = '<h3>🌍 Most Populous Countries</h3><div class="card-grid">';
        countries.forEach(country => {
            const flag = country.flags?.svg || country.flags?.png;
            const population = country.population?.toLocaleString() || 'N/A';
            const capital = country.capital?.[0] || 'N/A';
            
            html += `
                <div class="card country-card">
                    ${flag ? `<img src="${flag}" alt="Flag of ${country.name.common}" class="country-flag">` : ''}
                    <h4>${escapeHtml(country.name.common)}</h4>
                    <p><strong>Capital:</strong> ${capital}</p>
                    <p><strong>Population:</strong> ${population}</p>
                    <p><strong>Region:</strong> ${country.region || 'N/A'}</p>
                </div>
            `;
        });
        html += '</div>';
        
        resultsDiv.innerHTML = html;
        showStatus(`✅ Loaded ${countries.length} countries!`, 'success');
        
    } catch (error) {
        console.error('Countries error:', error);
        showError('Failed to load countries.');
        resultsDiv.innerHTML = '<p class="error-placeholder">⚠️ Could not load countries. Please try again.</p>';
    }
}

// Search Country by Name
async function searchCountry() {
    const query = searchInput.value.trim();
    if (!query) {
        showError('Please enter a country name to search.');
        return;
    }
    
    showLoading();
    clearStatus();
    
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(query)}`);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`No country found with the name "${query}"`);
            }
            throw new Error(`HTTP ${response.status}`);
        }
        
        const countries = await response.json();
        
        let html = `<h3>🔍 Search Results for "${escapeHtml(query)}"</h3><div class="card-grid">`;
        countries.forEach(country => {
            const flag = country.flags?.svg || country.flags?.png;
            const population = country.population?.toLocaleString() || 'N/A';
            const capital = country.capital?.[0] || 'N/A';
            const currency = country.currencies ? Object.values(country.currencies)[0].name : 'N/A';
            
            html += `
                <div class="card country-card">
                    ${flag ? `<img src="${flag}" alt="Flag of ${country.name.common}" class="country-flag">` : ''}
                    <h4>${escapeHtml(country.name.common)}</h4>
                    <p><strong>Official Name:</strong> ${escapeHtml(country.name.official || 'N/A')}</p>
                    <p><strong>Capital:</strong> ${capital}</p>
                    <p><strong>Population:</strong> ${population}</p>
                    <p><strong>Region:</strong> ${country.region || 'N/A'}</p>
                    <p><strong>Currency:</strong> ${currency}</p>
                </div>
            `;
        });
        html += '</div>';
        
        resultsDiv.innerHTML = html;
        showStatus(`✅ Found ${countries.length} country/countries matching "${query}"`, 'success');
        
    } catch (error) {
        console.error('Search error:', error);
        showError(error.message);
        resultsDiv.innerHTML = `<p class="error-placeholder">⚠️ ${error.message}. Please check spelling and try again.</p>`;
    }
}

// Fetch Random Dog Image
async function fetchRandomDog() {
    showLoading();
    clearStatus();
    
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const data = await response.json();
        
        resultsDiv.innerHTML = `
            <h3>🐕 Random Dog</h3>
            <div class="animal-container">
                <img src="${data.message}" alt="Random dog" class="animal-image">
                <button onclick="fetchRandomDog()" class="refresh-btn">🎲 Get Another Dog</button>
            </div>
        `;
        showStatus('✅ Random dog loaded!', 'success');
        
    } catch (error) {
        console.error('Dog error:', error);
        showError('Failed to load dog image.');
        resultsDiv.innerHTML = '<p class="error-placeholder">⚠️ Could not load dog image. Please try again.</p>';
    }
}

// Fetch Random Cat Image
async function fetchRandomCat() {
    showLoading();
    clearStatus();
    
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const data = await response.json();
        
        resultsDiv.innerHTML = `
            <h3>🐱 Random Cat</h3>
            <div class="animal-container">
                <img src="${data[0].url}" alt="Random cat" class="animal-image">
                <button onclick="fetchRandomCat()" class="refresh-btn">🎲 Get Another Cat</button>
            </div>
        `;
        showStatus('✅ Random cat loaded!', 'success');
        
    } catch (error) {
        console.error('Cat error:', error);
        showError('Failed to load cat image.');
        resultsDiv.innerHTML = '<p class="error-placeholder">⚠️ Could not load cat image. Please try again.</p>';
    }
}

// Fetch Random Fact
async function fetchRandomFact() {
    showLoading();
    clearStatus();
    
    try {
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const data = await response.json();
        
        resultsDiv.innerHTML = `
            <h3>💡 Random Fact</h3>
            <div class="fact-container">
                <p class="fact-text">"${escapeHtml(data.text)}"</p>
                <button onclick="fetchRandomFact()" class="refresh-btn">🎲 Get Another Fact</button>
            </div>
        `;
        showStatus('✅ Random fact loaded!', 'success');
        
    } catch (error) {
        console.error('Fact error:', error);
        showError('Failed to load fact.');
        resultsDiv.innerHTML = '<p class="error-placeholder">⚠️ Could not load fact. Please try again.</p>';
    }
}

// Escape HTML to prevent XSS
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// ====================
// Event Listeners
// ====================

// Button click handlers
document.querySelectorAll('.api-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const api = btn.dataset.api;
        switch(api) {
            case 'posts': fetchPosts(); break;
            case 'users': fetchUsers(); break;
            case 'countries': fetchCountries(); break;
            case 'dog': fetchRandomDog(); break;
            case 'cat': fetchRandomCat(); break;
            case 'fact': fetchRandomFact(); break;
            default: console.log('Unknown API:', api);
        }
    });
});

// Search button
searchBtn.addEventListener('click', searchCountry);

// Enter key in search input
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchCountry();
    }
});

// Make functions global for inline buttons
window.fetchRandomDog = fetchRandomDog;
window.fetchRandomCat = fetchRandomCat;
window.fetchRandomFact = fetchRandomFact;

// ====================
// Initial Load
// ====================
// Load posts when page opens
fetchPosts();

