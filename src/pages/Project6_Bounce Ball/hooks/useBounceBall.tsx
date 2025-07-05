// hooks/useBounceBall.ts
import { useEffect, useRef } from 'react';
import { Bricks } from '../class/Brick';
import { Circle } from '../class/Circle';
import { Ground } from '../class/Ground';
import { Canvas } from '../class/Canvas';
import drawGame from '../utils/drawGame';

interface Props {
    game: boolean;
    setGame: React.Dispatch<React.SetStateAction<boolean>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
}

function useBounceBall({ game, setGame, setScore }: Props): { canvasRef: React.RefObject<HTMLCanvasElement | null> } {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (!game) return;

        // ---- 初始化物件：畫布、球、地板、磚塊 ----
        const canvas = new Canvas(canvasRef.current);
        const circle = new Circle();
        const ground = new Ground();
        const bricks = new Bricks([]);

        bricks.create(10);

        // ---- 滑鼠移動：控制地板 ----
        canvas.canvasRef?.addEventListener('mousemove', (e) => {
            ground.x = ground.move(canvas.canvasRef, e);
        });

        // ---- 遊戲主迴圈 ----
        const loop = setInterval(() => {
            drawGame(canvas, circle, ground, bricks, loop, setGame, setScore);
        }, 25);

        // ---- 清理 ----
        return () => {
            clearInterval(loop);
            canvas.canvasRef?.removeEventListener('mousemove', (e) => {
                ground.x = ground.move(canvas.canvasRef, e);
            });
            setGame(false); //這一行註解以後就不會顯示了
        };
    }, [game]);

    // 只回傳 ref
    return { canvasRef };
}

export default useBounceBall;
