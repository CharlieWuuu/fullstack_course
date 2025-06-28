import { useState, useEffect } from 'react';

import Styles from './styles/style.module.scss';
import Fuji from './images/富士山2.jpg';
import Logo from './images/網站Logo.svg';
import Hokkaido from './images/北海道雪景.jpg';
import Sushi from './images/日本壽司.jpg';
import Kyoto from './images/清水寺.jpg';
import FujiMountain from './images/富士山.jpg';
import FacebookIcon from './Icons/facebook.svg';
import InstagramIcon from './Icons/instagram.svg';
import TwitterIcon from './Icons/twitter.svg';
import YoutubeIcon from './Icons/youtube.svg';
import Sakura from './images/日本櫻花.jpg';
import KyotoCastle from './images/京都古城.jpg';
import OsakaStreet from './images/大阪街頭.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faRightToBracket, faBook } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
function JapanTravel() {
    const [HeroImage, setHeroImage] = useState(Sakura);

    useEffect(() => {
        setTimeout(() => {
            if (HeroImage === Sakura) {
                setHeroImage(KyotoCastle);
            } else if (HeroImage === KyotoCastle) {
                setHeroImage(OsakaStreet);
            } else {
                setHeroImage(Sakura);
            }
        }, 3000);
    }, [HeroImage]);

    return (
        <div>
            <img className={Styles.fixed_image} src={Fuji} alt="fixed-image" />

            <header>
                <section className={Styles.logo}>
                    <img src={Logo} alt="日本旅遊網Logo" />
                    <h1>2023日本旅遊推薦</h1>
                </section>
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faPlane} /> 日本旅遊
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faRightToBracket} /> 會員登入
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faBook} /> 預約行程
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faAddressBook} /> 聯絡我們
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className={Styles.background_img} style={{ backgroundImage: `url(${HeroImage})` }}>
                    <div className={Styles.filter}></div>
                    <h3>
                        休閒空間，特殊假期。
                        <br />
                        安排一趟日本旅遊行程，放鬆身心。
                    </h3>
                </section>

                <section className={Styles.info_circles}>
                    <h3>遊玩主題</h3>
                    <div className={Styles.circles}>
                        <div className={Styles.circle}>
                            <img src={Hokkaido} alt="北海道雪景" />
                            <p>北海道雪景，美不勝收</p>
                        </div>
                        <div className={Styles.circle}>
                            <img src={Sushi} alt="日本壽司" />
                            <p>日本道地壽司與美食</p>
                        </div>
                        <div className={Styles.circle}>
                            <img src={FujiMountain} alt="富士山" />
                            <p>富士山風景與溫泉</p>
                        </div>
                        <div className={Styles.circle}>
                            <img src={Kyoto} alt="清水寺" />
                            <p>京都清水寺，千年古都</p>
                        </div>
                    </div>
                </section>

                <section className={Styles.empty_container}>
                    <h3>今天就開始規劃行程，找到最適合的方案。</h3>
                </section>

                <section className={Styles.google_map}>
                    <h3>日本地理位置</h3>
                    <p>日本在地理上屬於東北亞，東鄰太平洋，西以日本海、朝鮮海峽、東海與歐亞大陸的西伯利亞、朝鮮半島、中國大陸鄰接，南以菲律賓海與台灣、馬里亞納群島鄰接，北以宗谷海峽、鄂霍次克海與庫頁島、千島群島鄰接。日本一年四季都是舒爽怡人的氣候，四季變化分明。 南部暖和，越往北部越寒冷。 特別是冬天吹西北季風，在日本海側會下很多雪。 另一方面、在太平洋側會持續是被稱為「冬晴」的乾燥晴天。</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5300755.760441594!2d137.10323600911116!3d35.18148688884259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2sus!4v1664253921541!5m2!1sen!2sus" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </main>

            <footer>
                <section className={Styles.logo}>
                    <img src={Logo} alt="logo" />
                    <h3>2023日本旅遊推薦</h3>
                </section>
                <section className={Styles.links}>
                    <a href="#">
                        <img src={FacebookIcon} alt="facebook" />
                    </a>
                    <a href="#">
                        <img src={InstagramIcon} alt="instagram" />
                    </a>
                    <a href="#">
                        <img src={TwitterIcon} alt="twitter" />
                    </a>
                    <a href="#">
                        <img src={YoutubeIcon} alt="youtube" />
                    </a>
                </section>
            </footer>
        </div>
    );
}

export default JapanTravel;
