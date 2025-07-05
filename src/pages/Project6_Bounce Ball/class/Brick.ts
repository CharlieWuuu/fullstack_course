const random = (min: number, max: number) => min + Math.floor(Math.random() * (max - min));

export class Bricks {
    arr: Brick[];
    clearedBricks: number;
    constructor(arr: Brick[]) {
        this.arr = arr;
        this.clearedBricks = 0;
    }

    create(amount: number) {
        for (let i = 0; i < amount; i++) {
            this.arr.push(new Brick(random(0, 550), random(0, 400)));
        }
    }
}

export class Brick {
    x: number;
    y: number;
    width: number;
    height: number;
    visible: boolean;

    constructor(x: number, y: number, width = 50, height = 50) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.visible = true;
    }

    draw(ctx: CanvasRenderingContext2D | null) {
        if (!ctx) return;
        ctx.fillStyle = 'lightgreen';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    hit(ballX: number, ballY: number, radius: number): boolean {
        return ballX >= this.x - radius && ballX <= this.x + this.width + radius && ballY >= this.y - radius && ballY <= this.y + this.height + radius;
    }
}
