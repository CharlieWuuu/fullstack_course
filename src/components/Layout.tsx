// components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Aside from './Aside';
import { useEffect } from 'react';

function Layout() {
    useEffect(() => {
        document.title = '全端課程作業集';
    }, []);

    return (
        /* flex：左側 Aside + 右側內容 */
        <div className="flex min-h-screen min-w-screen">
            {/* 固定側邊欄 —— 你原本的 Aside */}
            <Aside />

            {/* 右側會隨路由切換的內容：Outlet 代表子 Route 的 element */}
            <main className="flex-1 min-h-screen ">
                <Outlet />
            </main>
        </div>
    );
}
export default Layout;
