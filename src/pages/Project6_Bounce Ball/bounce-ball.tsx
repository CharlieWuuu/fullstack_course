import useBounceBall from './hooks/useBounceBall';
import { useState } from 'react';

const BounceBall = () => {
    const [game, setGame] = useState(false);
    const [score, setScore] = useState(0);
    const { canvasRef } = useBounceBall({ game, setGame, setScore });

    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-2">
            <canvas ref={canvasRef} className="bg-black" width={600} height={600} />
            <p>
                分數：{score}｜{game ? '挑戰中！' : '挑戰結束'}
            </p>
            <button
                onClick={() => {
                    setScore(0);
                    setGame(false); // 先設 false，清掉之前的
                    setTimeout(() => setGame(true), 100); // 稍等一下再啟動
                }}>
                重新開始
            </button>
        </div>
    );
};

export default BounceBall;
