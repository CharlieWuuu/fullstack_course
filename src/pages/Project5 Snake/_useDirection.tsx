import { useEffect, useState } from 'react';

type keyProps = { initialDirection: string };

function useDirection({ initialDirection }: keyProps): [string, React.Dispatch<React.SetStateAction<string>>] {
    const [direction, setDirection] = useState<string>(initialDirection);
    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowUp' && direction !== 'Down') setDirection('Up');
            if (e.key === 'ArrowDown' && direction !== 'Up') setDirection('Down');
            if (e.key === 'ArrowLeft' && direction !== 'Right') setDirection('Left');
            if (e.key === 'ArrowRight' && direction !== 'Left') setDirection('Right');
        };

        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    }, [direction]);

    return [direction, setDirection];
}

export default useDirection;
