import { useEffect, useState } from 'react';

function useHiScore(currentScore: number): [number, React.Dispatch<React.SetStateAction<number>>] {
    const [hiScore, setHiScore] = useState(() => {
        const saved = localStorage.getItem('snakeHiScore');
        return saved ? Number(saved) : 0;
    });

    useEffect(() => {
        if (currentScore > hiScore) {
            setHiScore(currentScore);
            localStorage.setItem('snakeHiScore', String(currentScore));
        }
    }, [currentScore, hiScore]);

    return [hiScore, setHiScore];
}

export default useHiScore;
