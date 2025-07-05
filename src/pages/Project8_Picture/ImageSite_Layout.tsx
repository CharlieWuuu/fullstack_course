import { Outlet, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Styles from './scss/style.module.scss';

const ImageSite_Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className={Styles.nav}>
                <div className={Styles.title}>React Demo 網頁</div>
                <ul className={Styles.ul}>
                    <li className={Styles.li}>
                        <Link to="/image-site">首頁</Link>
                    </li>
                    <li className={Styles.li}>
                        <Link to="/image-site/about">關於這個網站</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            <Footer />
        </div>
    );
};

export default ImageSite_Layout;
