class Player {
    constructor(lives, score, color, startX, startY, dir) {
        this.lives = lives;
        this.score = score;
        this.color = color;
        this.startX = startX;
        this.startY = startY;
        this.dir = dir
        this.snake = new Snake(this.startX, this.startY, this.color, this.dir);
    }

    decreaseLives() {
        this.lives--;
        return this.lives;
    }

    draw() {
        this.snake.draw();
    }

    update() {
        this.snake.update();
    }
}