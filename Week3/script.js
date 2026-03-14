// script.js - Complete JavaScript for Rock, Paper, Scissors Game

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded and ready!');

    // ========== PART 1: Click Counter ==========
    const countSpan = document.getElementById('count');
    const incrementBtn = document.getElementById('incrementBtn');
    let count = 0;

    incrementBtn.addEventListener('click', function() {
        count++;
        countSpan.textContent = count;
        console.log('Count is now:', count);
    });

    // ========== PART 2-6: Rock, Paper, Scissors Game ==========
    
    // Get references to elements
    const rockBtn = document.getElementById('rockBtn');
    const paperBtn = document.getElementById('paperBtn');
    const scissorsBtn = document.getElementById('scissorsBtn');
    const result = document.getElementById('result');
    const choicesDiv = document.querySelector('.choices');
    const playerScoreSpan = document.getElementById('playerScore');
    const computerScoreSpan = document.getElementById('computerScore');
    const resetScoresBtn = document.getElementById('resetScoresBtn');

    // Track scores
    let playerScore = 0;
    let computerScore = 0;

    // Flag to prevent multiple rapid clicks
    let canPlay = true;

    // Main game function
    function play(playerChoice) {
        // Check if game is enabled (prevents clicking during cooldown)
        if (!canPlay) {
            console.log('Wait a moment before playing again!');
            return;
        }

        // Disable buttons briefly (Challenge 3)
        canPlay = false;
        disableButtons(true);

        // Highlight the selected button (visual feedback)
        const buttons = document.querySelectorAll('.choice-btn');
        buttons.forEach(btn => btn.classList.remove('selected'));

        const selectedBtn = document.getElementById(playerChoice + 'Btn');
        if (selectedBtn) {
            selectedBtn.classList.add('selected');
        }

        // Computer makes a random choice
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        // Determine winner
        let outcome;
        if (playerChoice === computerChoice) {
            outcome = "It's a tie!";
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            outcome = 'You win!';
            playerScore++;
            playerScoreSpan.textContent = playerScore;
        } else {
            outcome = 'Computer wins!';
            computerScore++;
            computerScoreSpan.textContent = computerScore;
        }

        // Display result with animation (Challenge 4)
        result.textContent = `You: ${playerChoice} | Computer: ${computerChoice} | ${outcome}`;
        
        // Add animation class to result
        result.classList.add('result-animation');
        setTimeout(() => {
            result.classList.remove('result-animation');
        }, 500);

        // Log event details
        console.log('Game played:', { playerChoice, computerChoice, outcome });
        console.log('Scores - Player:', playerScore, 'Computer:', computerScore);

        // Re-enable buttons after cooldown (Challenge 3)
        setTimeout(() => {
            canPlay = true;
            disableButtons(false);
            
            // Remove highlight after cooldown
            buttons.forEach(btn => btn.classList.remove('selected'));
        }, 1000);
    }

    // Helper function to enable/disable buttons (Challenge 3)
    function disableButtons(disabled) {
        const buttons = document.querySelectorAll('.choice-btn');
        buttons.forEach(btn => {
            btn.disabled = disabled;
            btn.style.opacity = disabled ? '0.5' : '1';
            btn.style.cursor = disabled ? 'not-allowed' : 'pointer';
        });
    }

    // ========== PART 4: Event Delegation Approach ==========
    choicesDiv.addEventListener('click', function(event) {
        // Check if a button was clicked
        if (event.target.classList.contains('choice-btn')) {
            // Get the choice from the button text
            const choice = event.target.textContent.toLowerCase();
            play(choice);

            // Log event details
            console.log('Event target:', event.target);
            console.log('Event type:', event.type);
            console.log('Event details:', {
                targetId: event.target.id,
                targetText: event.target.textContent,
                targetClass: event.target.className
            });
        }
    });

    // ========== Individual button listeners (alternative approach) ==========
    // We're keeping both approaches for demonstration
    // These will work alongside the event delegation
    
    rockBtn.addEventListener('click', function(event) {
        // Prevent duplicate handling if needed
        if (event.target.classList.contains('choice-btn')) {
            console.log('Rock button clicked directly');
        }
    });

    paperBtn.addEventListener('click', function() {
        console.log('Paper button clicked directly');
    });

    scissorsBtn.addEventListener('click', function() {
        console.log('Scissors button clicked directly');
    });

    // ========== CHALLENGE 1: Reset Scores Button ==========
    if (resetScoresBtn) {
        resetScoresBtn.addEventListener('click', function() {
            playerScore = 0;
            computerScore = 0;
            playerScoreSpan.textContent = playerScore;
            computerScoreSpan.textContent = computerScore;
            result.textContent = 'Scores reset! Make your choice.';
            
            // Visual feedback for reset
            this.style.backgroundColor = '#dc3545';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 200);
            
            console.log('Scores reset to 0');
        });
    }

    // ========== CHALLENGE 2: Keyboard Controls ==========
    document.addEventListener('keydown', function(event) {
        // Check if we can play (not in cooldown)
        if (!canPlay) return;

        const key = event.key.toLowerCase();
        let choice = null;

        // Map keys to choices
        if (key === 'r') {
            choice = 'rock';
        } else if (key === 'p') {
            choice = 'paper';
        } else if (key === 's') {
            choice = 'scissors';
        }

        if (choice) {
            play(choice);
            
            // Visual feedback for keyboard press
            const btn = document.getElementById(choice + 'Btn');
            if (btn) {
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    btn.style.transform = '';
                }, 200);
            }
            
            console.log(`Keyboard pressed: ${key} -> ${choice}`);
        }
    });

    // ========== Initialize Game ==========
    console.log('Rock, Paper, Scissors game initialized!');
    console.log('Press R, P, or S keys to play!');
});

// Flatland interactivity
const square = document.getElementById('square');
const words = document.getElementById('words');

function changeColor(color) {
    // Remove any existing color classes
    square.classList.remove('green', 'red', 'blue');
    // Add the new color class
    square.classList.add(color);
}

square.addEventListener('mouseover', function() {
    changeColor('green');
    words.textContent = 'The square is now green!';
});

square.addEventListener('mouseout', function() {
    square.classList.remove('green', 'red', 'blue');
    words.textContent = 'Hover over the square!';
});

square.addEventListener('click', function() {
    changeColor('red');
    words.textContent = 'You clicked the square!';
});
// Buzzword generator
const generateBtn = document.getElementById('generateBtn');
const buzzwordEl = document.getElementById('buzzword');

const adjectives = ['Agile', 'Cloud-Native', 'AI-Powered', 'Blockchain', 'Synergistic'];
const nouns = ['Solution', 'Platform', 'Ecosystem', 'Framework', 'Paradigm'];
const verbs = ['Disrupting', 'Transforming', 'Revolutionizing', 'Optimizing', 'Scaling'];

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateBuzzword() {
    const buzzword = `${randomElement(verbs)} the ${randomElement(adjectives)} ${randomElement(nouns)}`;
    buzzwordEl.textContent = buzzword;
    buzzwordEl.style.fontWeight = 'bold';
}

generateBtn.addEventListener('click', generateBuzzword);
// History tracking
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistory');

function addToHistory(text) {
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = text;

    // Add a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.style.marginLeft = '1rem';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    historyList.appendChild(li);
}

// Update generateBuzzword to save history
function generateBuzzword() {
    const buzzword = `${randomElement(verbs)} the ${randomElement(adjectives)} ${randomElement(nouns)}`;
    buzzwordEl.textContent = buzzword;
    addToHistory(buzzword);
}

// Clear all history
clearHistoryBtn.addEventListener('click', function() {
    historyList.innerHTML = '';
});
// Working with data attributes
const card = document.querySelector('.card');
const showDataBtn = card.querySelector('.show-data');

showDataBtn.addEventListener('click', function() {
    const category = card.dataset.category;
    const id = card.dataset.id;
    alert(`Category: ${category}, ID: ${id}`);
});
const toggleBtn = document.getElementById('toggleBtn');
const toggleContent = document.getElementById('toggleContent');

toggleBtn.addEventListener('click', function() {
    toggleContent.classList.toggle('hidden');

    // Update button text
    if (toggleContent.classList.contains('hidden')) {
        toggleBtn.textContent = 'Show Content';
    } else {
        toggleBtn.textContent = 'Hide Content';
    }
});