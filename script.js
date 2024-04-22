const button = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');

let score = 0;

// Function to update the score and display it
function updateScore() {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
}

// Function to handle button click event
function handleClick() {
    updateScore();
    animateButton();
    playSound();
}

// Function to add animation effect
function animateButton() {
    button.classList.add('animate');
    setTimeout(() => {
        button.classList.remove('animate');
    }, 200);
}

// Function to play click sound
function playSound() {
    const audio = new Audio('sound/click_sound.mp3');
    audio.play();
}

// Event listener for button click
button.addEventListener('click', handleClick);
