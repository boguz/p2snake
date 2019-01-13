window.addEventListener('keydown', function(e) {
    // PLAYER ONE
    if (e.keyCode === 37 && p1.snake.dir !== "right") {
        p1.snake.dir = "left";
    } else if (e.keyCode === 38 && p1.snake.dir !== "down") {
        p1.snake.dir = "up";
    } else if (e.keyCode === 39 && p1.snake.dir !== "left") {
        p1.snake.dir = "right";
    } else if (e.keyCode === 40 && p1.snake.dir !== "up") {
        p1.snake.dir = "down";
    }

    // PLAYER TWO
    if (e.keyCode === 65 && p2.snake.dir !== "right") {
        p2.snake.dir = "left";
    } else if (e.keyCode === 87 && p2.snake.dir !== "down") {
        p2.snake.dir = "up";
    } else if (e.keyCode === 68 && p2.snake.dir !== "left") {
        p2.snake.dir = "right";
    } else if (e.keyCode === 83 && p2.snake.dir !== "up") {
        p2.snake.dir = "down";
    }

    // PAUSE BUTTON
    if (e.keyCode === 80) {
        togglePause();
    }

    // SPACE BUTTON
    if (e.keyCode === 32 && gameState === 'gameOver') {
        gameRestart();;
    }
});