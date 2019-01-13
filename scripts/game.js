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
const p1Color = "#0091ea";
const p2Color = "#43a047";
const p1ColorDark = "#076faf";
const p2ColorDark = "#37773a";

// GAME STATES
let gameState = 'run';   // run, paused
let pauseMoment;

// VARIABLES
let lastLoopTime = 0;

// GAME CHARACTERS
let p1, p2;
let food;

function createNewFood() {
    return new Food();
}

function drawHearts(playerHearts, livesLeft) {
    for (let i = 0; i < startingLives; i++) {
        if (i <= livesLeft -1 ) {
            playerHearts[i].classList.add('lives__heart--show');
        } else {
            playerHearts[i].classList.remove('lives__heart--show');
        }
    }
}

function eatFood(player) {
    player.score++;
    food = createNewFood();
    updateScores();
}

function gameInit() {
    p1 = new Player("p1",
                    startingLives,
                    startingScore,
                    p1Color,
                    p1ColorDark,
                    0,
                    0,
                    "right",
                    p2);
    p2 = new Player("p2",
                    startingLives,
                    startingScore,
                    p2Color,
                    p2ColorDark,
                    canvas.width - gridSize,
                    canvas.clientHeight - gridSize,
                    "left",
                    p1);

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
    if (gameState === 'run' && currentTime - lastLoopTime > 1000 / frameRate) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        p1.update();
        p2.update();
        p1.draw();
        p2.draw();
        detectCollisions(p1, p2);
        detectCollisions(p2, p1);
        food.draw();
        lastLoopTime = currentTime;
    } else if (gameState === 'paused') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let pauseInterval = Math.floor((Date.now() - pauseMoment) / 500);
        if(pauseInterval % 2 == 0) {
            ctx.fillStyle = '#eee';
        } else {
            ctx.fillStyle = '#333';
        }
        ctx.font = 'normal bold 80px "Press Start 2P"'; 
        ctx.textAlign = 'center';
        ctx.fillText("PAUSED", canvas.width / 2 + 10, canvas.height / 2 + 50); 

    }

    requestAnimationFrame(loop);
}

function togglePause() {
    pauseMoment = Date.now();
    if (gameState === 'run') {
        gameState = 'paused';
    } else if (gameState === 'paused') {
        gameState = 'run';
    }
}

function updateScores() {
    scoreP1.textContent = p1.score;
    scoreP2.textContent = p2.score;
}

gameInit();
