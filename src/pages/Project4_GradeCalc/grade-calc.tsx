import Styles from './styles/style.module.scss';
import AnimationWrapper from './_animation_wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Grader from './_grader';
import { useEffect, useState } from 'react';
import Result from './_result';
import SortButton from './_sort_button';

const navList = [
    { name: 'Home', href: '#' },
    { name: 'Grade Analysis', href: '#' },
    { name: 'Terms of Service', href: '#' },
];

function addGradeArrItem(setGradeArr: any) {
    setGradeArr((prev: any) => [
        ...prev,
        {
            id: Math.random(),
            index: prev.length,
            classType: null,
            className: null,
            credit: null,
            grade: null,
        },
    ]);
}

function GradeCalc() {
    const [gradeArr, setGradeArr] = useState([
        {
            id: Math.random(),
            index: 0,
            classType: null,
            className: null,
            credit: null,
            grade: null,
        },
    ]);

    useEffect(() => {
        console.log(gradeArr);
    }, [gradeArr]);

    return (
        <div className={Styles.grade_calc}>
            {/* 開場動畫 */}
            <AnimationWrapper />

            <header>
                <nav>
                    <ul className={Styles.ul}>
                        {navList.map((item, index) => (
                            <li key={Date.now() + index}>
                                <a href={item.href}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <main>
                <section className={Styles.main_part}>
                    <h1>Grade Input Form</h1>

                    <SortButton gradeArr={gradeArr} setGradeArr={setGradeArr} />

                    <div className={Styles.all_inputs}>
                        {gradeArr.map((item) => (
                            <Grader key={`grader-${item.id}`} id={item.id} index={item.index} classTypeValue={item.classType} classNumberValue={item.className} classCreditValue={item.credit} gradeValue={item.grade} setGradeArr={setGradeArr} />
                        ))}
                    </div>

                    <button type="button" className={`${Styles.plus_btn}`} onClick={() => addGradeArrItem(setGradeArr)}>
                        <FontAwesomeIcon icon={faPlusSquare} className={Styles.plus_btn} />
                    </button>

                    <Result gradeArr={gradeArr} />
                </section>
            </main>
        </div>
    );
}

export default GradeCalc;
