export class Canvas {
    canvasRef: HTMLCanvasElement | null = null;
    width: number = 0;
    height: number = 0;
    ctx: CanvasRenderingContext2D | null = null;

    constructor(canvasRef: HTMLCanvasElement | null) {
        if (!canvasRef) return;
        const canvas = canvasRef;
        const { width: canvasWidth, height: canvasHeight } = canvas;

        this.canvasRef = canvasRef;
        this.width = canvasWidth;
        this.height = canvasHeight;
        this.ctx = canvas.getContext('2d');
    }
}
