import Styles from './Go.module.css';
import { useEffect } from 'react';
import Nihon from './images/Nihon_Ki-in_Headquarter_(2016-05-05)_5.jpg';
import { Chart } from 'react-google-charts';

const data = [
    ['棋賽', '獎金(日幣)'],
    ['棋聖', 45000000],
    ['十段', 7000000],
    ['本因坊', 28000000],
    ['碁聖', 8000000],
    ['名人', 30000000],
    ['王座', 14000000],
    ['天元', 13000000],
];

const options = {
    title: '日本七大棋戰獎金分布圓餅圖',
};

function PieChart() {
    return <Chart chartType="PieChart" data={data} options={options} width={'100%'} height={'400px'} />;
}

function Japan() {
    useEffect(() => {
        document.title = '圍棋資訊網 | 日本棋院';
    }, []);
    return (
        <main className={Styles.main}>
            <section>
                <div className={Styles.japan}>
                    <div className={Styles.image}>
                        <img src={Nihon} alt="日本棋院" />
                    </div>
                    <div className={Styles.info}>
                        <p>日本棋院（日語：一般公益法人日本棋院／いっぱんこうえきほうじんにほんきいん Ippankōekihōjin Nihon kiin），是日本最大的圍棋管理組織，並負責組織各種棋戰。總部位於東京都千代田區，另在名古屋和大阪設有中部和關西總本部。目前，日本棋院轄下棋士約300名。</p>
                        <p>日本棋院成立於1924年，由當時最大的兩個圍棋組織本因坊門和方圓社在大倉喜七郎的支持下合併而成。日本棋院成立後，先後同棋正社、吳清源和圍棋新社等組織或個人產生競爭。1950年，以橋本宇太郎為首的關西部分棋士脫離日本棋院，自創關西棋院。</p>
                        <p>旗下組織有：</p>
                        <ul>
                            <li>東京本院</li>
                            <li>關西總本部</li>
                            <li>中部總本部</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className={Styles.competition}>
                    <div className={Styles.text}>
                        <h3>日本棋院頭銜賽</h3>
                        <p>日本圍棋七大主要賽事，根據獎金排序是棋聖、名人、本因坊、王座、天元、碁聖和十段。在這當中獎金較高的三個賽事棋聖、名人、本因坊並稱“三大頭銜戰”。其中棋聖是最高頭銜。如果同時包攬這三個頭銜的話，就被稱為“大三冠”。 職業棋手爭冠的棋賽有很多，但是爭奪七個頭銜戰的“七大棋戰”和其他比賽有什麼區別呢？</p>
                        <p>七大棋戰的最大特點就是所有棋手都能參加，當然決定挑戰者的方式各不相同，名人戰和本因坊戰是在經過預選後進入循環圈。進入循環圈就能證明自己已經是一流棋手了。</p>
                        <p>頭銜賽的獎金如下：</p>

                        <ul>
                            <li>棋聖：4500萬日幣</li>
                            <li>十段：700萬日幣</li>
                            <li>本因坊：2800萬日幣</li>
                            <li>碁聖：800萬日幣</li>
                            <li>名人：3000萬日幣</li>
                            <li>王座：1400萬日幣</li>
                            <li>天元：1300萬日幣</li>
                        </ul>
                    </div>

                    <div id="piechart">
                        <PieChart />
                    </div>
                </div>
            </section>
        </main>
    );
}
export default Japan;
