"use strict";

// DOCUMENT CONSTANTS
const canvas = document.querySelector('#canvasEl');
const ctx = canvas.getContext('2d');
const scoreP1 = document.querySelector('.score__p1');
const scoreP2 = document.querySelector('.score__p2');

// GAME CONSTANTS
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
let gameState = 'startScreen';   // run, paused, gameOver, startScreen
let pauseMoment;

// VARIABLES
let lastLoopTime = 0;
let gameWinner;
let prevP1x, prevP1y, prevP2x, prevP2y;

// GAME CHARACTERS
let p1, p2;
let food;

function createNewFood() {
    return new Food();
}

function eatFood(player) {
    player.score++;
    food = createNewFood();
    updateScores();
}

function gameInit() {
    p1 = new Player("p1",
                    startingScore,
                    p1Color,
                    p1ColorDark,
                    0,
                    0,
                    "right",
                    p2);
    p2 = new Player("p2",
                    startingScore,
                    p2Color,
                    p2ColorDark,
                    canvas.width - gridSize,
                    canvas.clientHeight - gridSize,
                    "left",
                    p1);
    updateScores();
    p1.draw();
    p2.draw();
    loop(Date.now);
    food = createNewFood();
    food.draw();
}

function gameOver(winner) {
    gameState = 'gameOver';
    gameWinner = winner;
}

function gameRestart() {
    gameInit();
    gameState = 'run';  
}

function loop(currentTime) {
    if (gameState === 'run' && currentTime - lastLoopTime > 1000 / frameRate) {
        gameStateRun();
        lastLoopTime = currentTime;
    } else if (gameState === 'paused') {
        gameStatePaused();
    } else if (gameState === 'gameOver') {
        gameStateGameOver();
    } else if (gameState === 'startScreen') {
        gameStateStartScreen();
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

// INITIALLIZE GAME
gameInit();
