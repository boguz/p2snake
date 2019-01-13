class Player {
    constructor(name, score, color, colorDark, startX, startY, dir, opponent) {
        this.name = name;
        this.score = score;
        this.color = color;
        this.colorDark = colorDark,
        this.startX = startX;
        this.startY = startY;
        this.startDir = dir;
        this.dir = dir;
        this.opponent = opponent;
        this.snake = new Snake(this, this.startX, this.startY, this.color, this.colorDark, this.startDir);
    }

    draw() {
        this.snake.draw(this.startX, this.startY, this.startDir);
    }

    resetSnake() {
        this.snake.reset();
    }

    update() {
        this.snake.update();
    }
}