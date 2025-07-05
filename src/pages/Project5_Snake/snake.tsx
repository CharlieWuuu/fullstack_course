import { useRef, useState, useEffect, useCallback } from 'react';
import useKeydown from './_useDirection';
import useHiScore from './_useHiScore';

// --- 基本參數 ----------------------------
const CANVAS_SIZE = 400; // 畫布尺寸 (正方形)
const UNIT = 40; // 每格 40px
const ROWS = CANVAS_SIZE / UNIT; // 16
const COLS = CANVAS_SIZE / UNIT; // 16
const SPEED = 100; // 蛇移動速度

// 初始蛇身位置（向右）
const INITIAL_SNAKE = [
    { x: UNIT * 2, y: 0 },
    { x: UNIT * 1, y: 0 },
    { x: UNIT * 0, y: 0 },
    { x: UNIT * -1, y: 0 },
];

// 隨機產生果實（不能與蛇重疊）
function generateFruit(snake: { x: number; y: number }[]): { x: number; y: number } {
    let x = Math.floor(Math.random() * COLS) * UNIT;
    let y = Math.floor(Math.random() * ROWS) * UNIT;
    let overlapping = false;

    for (const s of snake) {
        if (s.x === x && s.y === y) {
            overlapping = true;
            break;
        }
    }

    return overlapping ? generateFruit(snake) : { x, y };
}

// --- React 元件 ---------------------------
export default function SnakeGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [fruit, setFruit] = useState(() => generateFruit(INITIAL_SNAKE));
    const [score, setScore] = useState(0);
    const [hiScore] = useHiScore(score);
    const [gameOver, setGameOver] = useState(false);
    const [direction, setDirection] = useKeydown({ initialDirection: 'Right' });

    // 遊戲主迴圈
    useEffect(() => {
        if (gameOver) return; // 結束狀態不再運行

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx) return;

        const timer = setInterval(() => {
            // 1. 計算新的蛇頭位置
            const head = { ...snake[0] };
            if (direction === 'Up') head.y -= UNIT;
            if (direction === 'Down') head.y += UNIT;
            if (direction === 'Left') head.x -= UNIT;
            if (direction === 'Right') head.x += UNIT;

            // 2. 牆壁穿越 (wrap)
            if (head.x >= CANVAS_SIZE) head.x = 0;
            if (head.x < 0) head.x = CANVAS_SIZE - UNIT;
            if (head.y >= CANVAS_SIZE) head.y = 0;
            if (head.y < 0) head.y = CANVAS_SIZE - UNIT;

            // 3. 撞到自己 → 遊戲結束
            for (let i = 1; i < snake.length; i++) {
                if (snake[i].x === head.x && snake[i].y === head.y) {
                    setGameOver(true);
                    return;
                }
            }

            // 4. 吃果實判斷
            const ateFruit = head.x === fruit.x && head.y === fruit.y;
            const newSnake = [head, ...snake];
            if (!ateFruit) {
                newSnake.pop(); // 沒吃到就移除尾巴，保持蛇長度
            } else {
                setScore((s) => s + 1);
                const nextFruit = generateFruit(newSnake);
                setFruit(nextFruit);
            }
            setSnake(newSnake);

            // 5. 畫面重繪
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

            // 畫果實
            ctx.fillStyle = 'yellow';
            ctx.fillRect(fruit.x, fruit.y, UNIT, UNIT);
            // ctx.fillStyle = 'black';
            // ctx.font = '16px Arial';
            // ctx.textAlign = 'center';
            // ctx.textBaseline = 'middle';
            // ctx.fillText('果', fruit.x + UNIT / 2, fruit.y + UNIT / 2 + 2);

            // 畫蛇
            newSnake.forEach((segment, idx) => {
                ctx.fillStyle = idx === 0 ? 'lightgreen' : 'lightblue';
                ctx.strokeStyle = 'black';
                ctx.fillRect(segment.x, segment.y, UNIT, UNIT);
                ctx.strokeRect(segment.x, segment.y, UNIT, UNIT);
                // ctx.fillStyle = 'black';
                // ctx.font = '16px Arial';
                // ctx.textAlign = 'center';
                // ctx.textBaseline = 'middle';
                // ctx.fillText(String(idx), segment.x + UNIT / 2, segment.y + UNIT / 2 + 2);
            });
        }, SPEED);

        return () => clearInterval(timer);
    }, [snake, fruit, direction, gameOver]);

    // 重新開始遊戲
    const resetGame = () => {
        setSnake(INITIAL_SNAKE);
        setDirection('Right');
        const newFruit = generateFruit(INITIAL_SNAKE);
        setFruit(newFruit);
        setScore(0);
        setGameOver(false);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 py-6 text-black">
            <canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE} className="bg-black rounded shadow-lg" />
            <div className="text-xl font-semibold text-black">分數：{score}</div>
            <div className="text-lg text-black">最高分：{hiScore}</div>
            {gameOver && <div className="text-red-400 font-bold">遊戲結束！按下重新開始再來一次～</div>}
            <button onClick={resetGame} className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-xl text-black shadow">
                重新開始
            </button>
        </div>
    );
}
