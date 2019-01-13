class Snake {
    constructor(player, startX, startY, color, colorDark, dir) {
        this.player = player;
        this.pos = {
            x: startX,
            y: startY
        };
        this.vel = {
            x: 0,
            y: 0
        };
        this.color = color;
        this.colorDark = colorDark;
        this.dir = dir;
        this.tail = [this.pos];
    }

    draw() {
        ctx.fillStyle = this.color;
        for (let i = this.tail.length - 1; i >= 0; i--) {
            (i > 0) ? ctx.fillStyle = this.colorDark : ctx.fillStyle = this.color;
            ctx.fillRect(this.tail[i].x, this.tail[i].y, gridSize, gridSize);
        }
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

    updateTail() {
        this.tail.push({x: this.pos.x, y: this.pos.x});

        if (this.tail.length > 1) {
            for (let i = this.tail.length - 1; i >= 0; i--) {
                if (i > 0) {
                    this.tail[i].x = this.tail[i-1].x;
                    this.tail[i].y = this.tail[i-1].y;
                }
            }
        }
        
        this.tail = this.tail.slice(0, this.player.score + 2);
    }

    update() {
        this.updateDirection();
        this.updatePosition();
        this.updateTail();
    }
}