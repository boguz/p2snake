class Player {
    constructor(lives, score) {
        this.lives = lives;
        this.score = score;
    }

    decreaseLives() {
        this.lives--;
        console.log(this.lives);

        return this.lives;
    }
}