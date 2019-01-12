// DOCUMENT CONSTANTS
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const heartsP1 = document.querySelectorAll('.lives__container--one .lives__heart');
const heartsP2 = document.querySelectorAll('.lives__container--two .lives__heart');
const scoreP1 = document.querySelector('.score__p1');
const scoreP2 = document.querySelector('.score__p2');

// GAME CONSTANTS
const startingLives = 3;
const startingScore = 0;
const gridSize = 15; // in px
const cols = canvas.width / gridSize;
const rows = canvas.height / gridSize;
const frameRate = 5 // in frames per second

// VARIABLES
let lastLoopTime = 0;

// GAME CHARACTERS
let p1, p2;
let food;

function drawHearts(playerHearts, livesLeft) {
    for (let i = 0; i < startingLives; i++) {
        if (i <= livesLeft -1 ) {
            playerHearts[i].classList.add('lives__heart--show');
        } else {
            playerHearts[i].classList.remove('lives__heart--show');
        }
    }
}

function updateScores() {
    scoreP1.textContent = p1.score;
    scoreP2.textContent = p2.score;
}

function gameInit() {
    p1 = new Player(startingLives,
                    startingScore,
                    "#0091ea",
                    0,
                    0,
                    "right");
    p2 = new Player(startingLives,
                    startingScore,
                    "#43a047",
                    canvas.width - gridSize,
                    canvas.clientHeight - gridSize,
                    "left");

    drawHearts(heartsP1, p1.lives);
    drawHearts(heartsP2, p2.lives);
    updateScores();
    p1.draw();
    p2.draw();
    loop(Date.now);
    food = new Food();
    food.draw();
}

function loop(currentTime) {
    if (currentTime - lastLoopTime > 1000 / frameRate) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        p1.update();
        p2.update();
        p1.draw();
        p2.draw();
        food.draw();
        lastLoopTime = currentTime;
    }
    requestAnimationFrame(loop);
}

gameInit();
