class Player {
    constructor(name, lives, score, color, colorDark, startX, startY, dir, opponent) {
        this.name = name;
        this.lives = lives;
        this.score = score;
        this.color = color;
        this.colorDark = colorDark,
        this.startX = startX;
        this.startY = startY;
        this.dir = dir;
        this.opponent = opponent;
        this.snake = new Snake(this, this.startX, this.startY, this.color, this.colorDark, this.dir);
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