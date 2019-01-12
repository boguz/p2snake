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
        console.log('%c TODO: Check food collision on creation! ', 'background: #222; color: yellow')
        return newPosition;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x, this.pos.y, gridSize, gridSize);
    }
}