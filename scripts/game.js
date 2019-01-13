// DOCUMENT CONSTANTS
const canvas = document.querySelector('#canvas');
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
    food = new Food();
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
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        p1.update();
        p2.update();
        detectCollisions(p1, p2);
        detectCollisions(p2, p1);
        p1.draw();
        p2.draw();
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
        ctx.fillText("PAUSED", canvas.width / 2 + 10, canvas.height / 2 + 40); 
    } else if (gameState === 'gameOver') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#eee';
        ctx.font = 'normal bold 20px "Press Start 2P"'; 
        ctx.textAlign = 'center';
        ctx.fillText("Winner is", canvas.width / 2, 100); 
        ctx.fillStyle = gameWinner.color;
        ctx.font = 'normal bold 100px "Press Start 2P"';
        ctx.fillText(gameWinner.name, canvas.width / 2, 220);
        ctx.fillStyle = '#eee';
        ctx.font = 'normal bold 16px "Press Start 2P"';
        ctx.fillText('Press SPACE to play again...', canvas.width / 2, 320); 
    } else if (gameState === 'startScreen') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = p1.color;
        ctx.font = 'normal bold 16px "Press Start 2P"'; 
        ctx.textAlign = 'center';
        ctx.fillText("P1: [up, right, down, left]", canvas.width / 2, 120); 
        ctx.fillStyle = p2.color;
        ctx.fillText("P2: [w, d, s, a]", canvas.width / 2, 160); 
        ctx.fillStyle = '#eeeeee';
        ctx.fillText("press SPACE to start", canvas.width / 2, 320); 
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
