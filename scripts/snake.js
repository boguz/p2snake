class Snake {
    constructor(startX, startY, color, dir) {
        this.pos = {
            x: startX,
            y: startY
        },
        this.vel = {
            x: 0,
            y: 0
        }
        this.color = color;
        this.dir = dir;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x, this.pos.y, gridSize, gridSize);
    }

    updateDirection() {
        if (this.dir === "right") {
            this.vel.x = 1;
            this.vel.y = 0;
        } else if (this.dir === "left") {
            this.vel.x = -1;
            this.vel.y = 0;
        } else if (this.dir === "up") {
            this.vel.x = 0;
            this.vel.y = -1;
        } else if (this.dir === "down") {
            this.vel.x = 0;
            this.vel.y = 1;
        }
    }

    updatePosition() {
        this.pos.x += this.vel.x * gridSize;
        this.pos.y += this.vel.y * gridSize;
    }

    update() {
        this.updateDirection();
        this.updatePosition();
    }

}