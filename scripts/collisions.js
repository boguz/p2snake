function detectCollisions(player, opponent) {
    
    // PLAYER AND FOOD
    if (player.snake.pos.x === food.pos.x && player.snake.pos.y === food.pos.y) {
        eatFood(player);
    }

    // PLAYER AND WALLS
    if(player.snake.pos.x > (canvas.width - gridSize) ||  player.snake.pos.x < 0 ||
       player.snake.pos.y > (canvas.height - gridSize) || player.snake.pos.y < 0) {
        gameOver(opponent);
    }

    // PLAYER AND OPPONENT
    if (opponent.snake.tail.length > 1) {
        for (let i = opponent.snake.tail.length - 1; i > 1; i--) {
            if (player.snake.tail[0].x === opponent.snake.tail[i].x &&
                player.snake.tail[0].y === opponent.snake.tail[i].y) {
                alert(player.name, "collided into", opponent.name);
                gameOver(opponent);
            }
        }
    }

}