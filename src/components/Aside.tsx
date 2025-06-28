import { Link } from 'react-router-dom';

const projectArr = [
    { url: '/', name: '首頁' },
    { url: '/go', name: '圍棋網站' },
    { url: '/japan-travel', name: '日本旅遊網站' },
    { url: '/portfolio', name: 'Protofilio Website' },
    { url: '/grade-calc', name: '成績計算網站' },
    { url: '/snake', name: '貪食蛇遊戲' },
    { url: '/bounce-ball', name: '彈跳球遊戲' },
    { url: '/image-site', name: '圖片網站' },
    { url: '/mern-project', name: 'MERN專案' },
];

function Aside() {
    return (
        <div className="flex flex-col max-w-[200px] min-w-[200px] w-full bg-gray-200 p-4 gap-2">
            {projectArr.map((p, i) => (
                <Link to={p.url} key={`key_${i}`}>
                    {p.name}
                </Link>
            ))}
        </div>
    );
}

export default Aside;
