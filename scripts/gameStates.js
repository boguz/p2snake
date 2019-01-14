"use strict";

function gameStateGameOver() {
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
}

function gameStatePaused() {
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
}

function gameStateStartScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = p1.color;
    ctx.font = 'normal bold 16px "Press Start 2P"'; 
    ctx.textAlign = 'center';
    ctx.fillText("P1: [up, right, down, left]", canvas.width / 2, 120); 
    ctx.fillStyle = p2.color;
    ctx.fillText("P2: [w, d, s, a]", canvas.width / 2, 160); 
    ctx.fillStyle = '#eeeeee';
    ctx.fillText("press SPACE to start", canvas.width / 2, 320);
    ctx.fillText("press P to pause the game", canvas.width / 2, 350); 
}

function gameStateRun() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    p1.update();
    p2.update();
    detectCollisions(p1, p2);
    detectCollisions(p2, p1);
    p1.draw();
    p2.draw();
    food.draw();
}