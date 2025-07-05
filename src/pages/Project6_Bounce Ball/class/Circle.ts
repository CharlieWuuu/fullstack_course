export class Circle {
    x: number;
    y: number;
    r: number; // radius
    xSpeed: number;
    ySpeed: number;

    constructor(x = 160, y = 60, r = 20, xSpeed = 20, ySpeed = 20) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }
}
