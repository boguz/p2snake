class Food {
    constructor() {
        this.pos = this.randomPosition();
        this.colors = ["rgba(241, 169, 160, 1)",
                       "rgba(255, 148, 120, 1)",
                       "rgba(214, 69, 65, 1)",
                       "rgba(231, 76, 60, 1)",
                       "rgba(155, 89, 182, 1)",
                       "rgba(142, 68, 173, 1)",
                       "rgba(254, 241, 96, 1)",
                       "rgba(245, 229, 27, 1)",
                       "rgba(247, 202, 24, 1)",
                       "rgba(244, 208, 63, 1)",
                       "rgba(241, 90, 34, 1)",
                       "rgba(245, 171, 53, 1)",
                       "rgba(230, 126, 34, 1)"];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    randomPosition() {
        let newPosition = {
            x: Math.floor(cols * Math.random()) * gridSize,
            y: Math.floor(rows * Math.random()) * gridSize
        }

        // prevent food from being created "on top" of snake
        for (let i = p1.snake.tail.length; i > 0; i--) {
            if (newPosition.x == p1.snake.tail[i - 1].x && newPosition.y == p1.snake.tail[i - 1].y) {
                this.randomPosition();
            }
        }
        for (let i = p2.snake.tail.length; i > 0; i--) {
            if (newPosition.x == p2.snake.tail[i - 1].x && newPosition.y == p2.snake.tail[i - 1].y) {
                this.randomPosition();
            }
        }  
        return newPosition;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos.x + gridSize / 2, this.pos.y + gridSize / 2, gridSize / 2, 0, 2 * Math.PI, false);
        ctx.fill();
    }
}