import { NavLink, Link } from 'react-router-dom';

const projectArr = [
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
        <div className="flex flex-col max-w-[200px] min-w-[200px] w-full bg-gray-200 p-4 gap-8 z-10">
            <Link to="/" className="font-bold text-xl text-gray-900">
                全端課程成果集
            </Link>
            <div className="flex flex-col gap-2">
                <p className="font-bold">作業</p>
                {projectArr.map((p, i) => (
                    <NavLink to={p.url} key={`key_${i}`} className={({ isActive }) => `pl-2  hover:text-blue-600 transition-colors ${isActive ? 'font-bold text-blue-600' : 'text-gray-900'}`}>
                        {p.name}
                    </NavLink>
                ))}
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-bold">程式</p>
            </div>
        </div>
    );
}

export default Aside;
