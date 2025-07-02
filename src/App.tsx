// App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // 把 Aside 包在 Layout 裡
import Index from './pages';

import Go from './pages/Project1_Go/go'; // 圍棋頁面
import { default as Index_Go } from './pages/Project1_Go/Index'; // 圍棋首頁
import Korea from './pages/Project1_Go/korea';
import Japan from './pages/Project1_Go/japan';
import China from './pages/Project1_Go/china';
import Taiwan from './pages/Project1_Go/taiwan';

import BounceBall from './pages/Project6 Bounce Ball/bounce-ball';
import GradeCalc from './pages/Project4_GradeCalc/grade-calc';

import JapanTravel from './pages/Project2_JapanTravel/japan-travel';
import Mern from './pages/Project8 MERN/mern-project';
import Protofilio from './pages/Project3_Protofilo/portfolio';
import Snake from './pages/Project5 Snake/snake';

import ImageSite_Layout from './pages/Project7 Picture/ImageSite_Layout';
import ImageSite_Index from './pages/Project7 Picture/ImageSite_Index';
import ImageSite_About from './pages/Project7 Picture/ImageSite_About';
import ImageSite_Page404 from './pages/Project7 Picture/ImageSite_Page404';

export default function App() {
    return (
        // Routes 只能放 Route，其他元素要改放到 Route 的 element 裡
        <Routes>
            {/* 對應根路由 "/"，用 Layout 做外殼 */}
            <Route path="/" element={<Layout />}>
                {/* index -> 預設子頁；URL 為 "/" */}
                <Route index element={<Index />} />
                {/* 其他子頁；URL 為 "/go" */}
                <Route path="go" element={<Go />}>
                    <Route index element={<Index_Go />} />
                    <Route path="korea" element={<Korea />} />
                    <Route path="japan" element={<Japan />} />
                    <Route path="china" element={<China />} />
                    <Route path="taiwan" element={<Taiwan />} />
                </Route>
                <Route path="japan-travel" element={<JapanTravel />} />
                <Route path="portfolio" element={<Protofilio />} />
                <Route path="grade-calc" element={<GradeCalc />} />
                <Route path="snake" element={<Snake />} />
                <Route path="bounce-ball" element={<BounceBall />} />

                <Route path="image-site" element={<ImageSite_Layout />}>
                    <Route index element={<ImageSite_Index />} />
                    <Route path="image-site/about" element={<ImageSite_About />} />
                    <Route path="image-site/*" element={<ImageSite_Page404 />} />
                </Route>

                <Route path="mern-project" element={<Mern />} />
            </Route>
        </Routes>
    );
}
