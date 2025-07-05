// hooks/useBounceBall.ts
import { Bricks } from '../class/Brick';
import { Circle } from '../class/Circle';
import { Ground } from '../class/Ground';
import { Canvas } from '../class/Canvas';

// ---- 遊戲主迴圈 ----
export default function drawGame(canvas: Canvas, circle: Circle, ground: Ground, bricks: Bricks, loop: number, setGame: React.Dispatch<React.SetStateAction<boolean>>, setScore: React.Dispatch<React.SetStateAction<number>>) {
    // 1. 磚塊碰撞
    bricks.arr.forEach((b) => {
        if (b.visible && b.hit(circle.x, circle.y, circle.r)) {
            b.visible = false;
            bricks.clearedBricks++;
            setScore(bricks.clearedBricks);

            // 簡化：只判斷垂直或水平方向反彈
            if (circle.y < b.y || circle.y > b.y + b.height) circle.ySpeed *= -1;
            else circle.xSpeed *= -1;

            if (bricks.clearedBricks === bricks.arr.length) {
                clearInterval(loop);
                setGame(false);
            }
        }
    });

    // 2. 地板碰撞
    const onGround = circle.x >= ground.x - circle.r && circle.x <= ground.x + 200 + circle.r && circle.y >= ground.y - circle.r && circle.y <= ground.y + circle.r;

    if (onGround) {
        // circle.y += circle.ySpeed > 0 ? -50 : 50;
        circle.ySpeed *= -1;
    }

    // 3. 邊界碰撞
    if (circle.x <= circle.r || circle.x >= canvas.width - circle.r) circle.xSpeed *= -1;
    if (circle.y <= circle.r || circle.y >= canvas.height - circle.r) circle.ySpeed *= -1;

    // 4. 更新座標
    circle.x += circle.xSpeed;
    circle.y += circle.ySpeed;

    // 5. 清畫面
    if (canvas.ctx === null) return;
    canvas.ctx.fillStyle = 'black';
    canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 6. 畫磚塊
    bricks.arr.forEach((b) => b.visible && b.draw(canvas.ctx));

    // 7. 畫地板
    canvas.ctx.fillStyle = 'orange';
    canvas.ctx.fillRect(ground.x, ground.y, ground.w, ground.h);

    // 8. 畫球
    canvas.ctx.beginPath();
    canvas.ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
    canvas.ctx.fillStyle = 'yellow';
    canvas.ctx.fill();
    canvas.ctx.stroke();
}
