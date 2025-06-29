import Styles from './styles/style.module.scss';
import { Link } from 'react-router-dom';
import profileImg from './pictures/avatar.png';
import LifePhoto from './pictures/lifePhoto.png';
import cssIcon from './ICONS/icons8-css3.svg';
import htmlIcon from './ICONS/icons8-html-5.svg';
import jsIcon from './ICONS/icons8-javascript.svg';
import reactIcon from './ICONS/icons8-react-native.svg';

function Protofilio() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="#">關於 Charlie</a>
                    </li>
                    <li>
                        <a href="./contact.html">聯絡方式</a>
                    </li>
                    <li>
                        <Link to="/go">圍棋網站</Link>
                    </li>
                    <li>
                        <Link to="/japan-travel">日本旅遊網站</Link>
                    </li>
                </ul>
            </nav>

            <main>
                <div id="background-wrap">
                    <div className={`${Styles.bubble} ${Styles.x1}`}></div>
                    <div className={`${Styles.bubble} ${Styles.x2}`}></div>
                    <div className={`${Styles.bubble} ${Styles.x3}`}></div>
                    <div className={`${Styles.bubble} ${Styles.x4}`}></div>
                    <div className={`${Styles.bubble} ${Styles.x5}`}></div>
                    <div className={`${Styles.bubble} ${Styles.x6}`}></div>
                    <div className={`${Styles.bubble} ${Styles.x7}`}></div>
                    <div className={`${Styles.bubble} ${Styles.x8}`}></div>
                    <div className={`${Styles.bubble} ${Styles.x9}`}></div>
                    <div className={`${Styles.bubble} ${Styles.x10}`}></div>
                </div>

                <section className={Styles.main_area}>
                    <div className={Styles.info}>
                        <h1>嗨，我是 Charlie!</h1>
                        <h2>我是一位來自臺灣的網頁全端工程師。專長在網頁全端開發、介面設計、地理資訊等。</h2>
                    </div>
                    <div className={Styles.img_area}>
                        <img src={profileImg} alt="個人照片" />
                    </div>
                </section>
                <section className={Styles.about_me}>
                    <section className={Styles.description}>
                        <h2>關於我的一些事情</h2>
                        <p>我在BYUH完成電腦科學的學位，主要興趣在網頁開發、機器學習與人機互動。我在到美國之前，完全沒有寫過程式的經驗。在眾多不同的主修當中，我選擇電腦科學(台灣的資訊工程系)來當作主修，因為我從小就對電腦有濃厚的興趣。</p>
                        <p>我的主要技能是JavaScript, React, Machine Learning, Deep Learning, Java以及Android系統開發。</p>

                        <div className={Styles.progressBarArea}>
                            <p>JavaScript, Web Development</p>
                            <div className={Styles.progress}>
                                <div className={`${Styles.progressBar} ${Styles.progressBarStriped} ${Styles.progressBarAnimated}`} role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: '100%' }}></div>
                            </div>
                            <p>React</p>
                            <div className={Styles.progress}>
                                <div className={`${Styles.progressBar} ${Styles.progressBarStriped} ${Styles.progressBarAnimated} ${Styles.bgInfo}`} role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}></div>
                            </div>
                            <p>Machine Learning</p>
                            <div className={Styles.progress}>
                                <div className={`${Styles.progressBar} ${Styles.progressBarStriped} ${Styles.progressBarAnimated} ${Styles.bgWarning}`} role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: '100%' }}></div>
                            </div>
                            <p>Deep Learning</p>
                            <div className={Styles.progress}>
                                <div className={`${Styles.progressBar} ${Styles.progressBarStriped} ${Styles.progressBarAnimated} ${Styles.bgSuccess}`} role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{ width: '95%' }}></div>
                            </div>
                            <p>Java, Android</p>
                            <div className={Styles.progress}>
                                <div className={`${Styles.progressBar} ${Styles.progressBarStriped} ${Styles.progressBarAnimated} ${Styles.bgDanger}`} role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{ width: '95%' }}></div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className={Styles.resume}>
                    <section className={Styles.table}>
                        <table>
                            <tbody>
                                <tr style={{ borderTop: '2px solid gray' }}>
                                    <td style={{ width: '20%' }}>自我簡介</td>
                                    <td style={{ width: '80%' }}>畢業於美國楊百翰大學夏威夷分校電腦科學系。興趣是網頁前端設計、圖形介面以及機器學習。 我也在網路上做密碼學、線性代數、全端開發、Python、Java與資料結構的課程。</td>
                                </tr>
                                <tr>
                                    <td>學歷</td>
                                    <td>美國楊百翰大學夏威夷分校 電腦科學系學士</td>
                                </tr>
                                <tr>
                                    <td>經歷</td>
                                    <td>
                                        <ol>
                                            <li>PCC Lead</li>
                                            <li>Graphical Interface Research Assistant</li>
                                            <li>ML Engineer</li>
                                            <li>Udemy Instructor</li>
                                        </ol>
                                    </td>
                                </tr>
                                <tr>
                                    <td>語言</td>
                                    <td>
                                        <ul>
                                            <li>中文:精通</li>
                                            <li>英文:精通</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>專長</td>
                                    <td>
                                        <img src={htmlIcon} alt="HTML5" />
                                        <img src={cssIcon} alt="CSS3" />
                                        <img src={jsIcon} alt="JavaScript" />
                                        <img src={reactIcon} alt="React" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>開發經驗</td>
                                    <td>我曾經開發過兩個網頁前端專案，分別是日本旅遊推薦以及圍棋資訊網。我負責從構想、用Figma畫出網頁架構、設計使用者介面UI/UX設計、用HTML做出基本網頁架構、CSS將網頁前端美化以及提升使用外觀。</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section className={Styles.picture}>
                        <img src={LifePhoto} alt="個人照片" />
                        <div className={Styles.greenRect}></div>
                        <div className={Styles.greenRect2}></div>
                        <div className={Styles.greenRect3}></div>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default Protofilio;
