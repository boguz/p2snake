class Snake {
    constructor(startX, startY, color) {
        this.pos =  { x: startX,
                      y: startY},
        this.color = color;
    }

    draw() {
        console.log("draw");
        console.log(ctx);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x, this.pos.y, gridSize, gridSize);
    }

}