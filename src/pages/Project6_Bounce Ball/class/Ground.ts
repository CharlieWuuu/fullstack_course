export class Ground {
    x: number;
    y: number;
    w: number; // width
    h: number; // height
    constructor(x = 100, y = 500, w = 200, h = 5) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    move(canvas: HTMLCanvasElement | null, e: MouseEvent) {
        if (!canvas) return e.clientX;
        const { left } = canvas.getBoundingClientRect();
        return e.clientX - left - this.w / 2;
    }
}
