import Styles from './Go.module.css';
import { NavLink, Outlet } from 'react-router-dom';

function Go() {
    return (
        <>
            <header className={Styles.header}>
                <div className={Styles.top}>
                    <h1>圍棋資訊網</h1>
                    <h3>圍棋是一種策略棋類，使用格狀棋盤及黑白二色棋子進行對弈。起源於中國，中國古時有「弈」、「碁」、「手談」等多種稱謂，屬琴棋書畫四藝。</h3>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/go" end className={({ isActive }) => (isActive ? Styles.active : '')}>
                                網站首頁
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/go/korea" className={({ isActive }) => (isActive ? Styles.active : '')}>
                                韓國棋院
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/go/japan" className={({ isActive }) => (isActive ? Styles.active : '')}>
                                日本棋院
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/go/china" className={({ isActive }) => (isActive ? Styles.active : '')}>
                                中國棋院
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/go/taiwan" className={({ isActive }) => (isActive ? Styles.active : '')}>
                                海峰棋院
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default Go;
