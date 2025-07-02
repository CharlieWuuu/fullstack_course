import Styles from './styles/style.module.scss'; // 換成你的檔名
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const classTypeObj = {
    ACCT: 'Accounting',
    ASL: 'American Sign Language',
    ANTH: 'Anthropology',
    ART: 'Art',
    BIOL: 'Biological Science',
    BUSM: 'Business Mgt',
    CRDEV: 'Career Development',
    CHEM: 'Chemistry',
    CHIN: 'Chinese',
    COMM: 'Communication Studies',
    CIS: 'Computer & Information Sciences',
    CS: 'Computer Science',
    CRMJ: 'Criminal Justice',
    ECON: 'Economics',
    EDU: 'Education',
    ELED: 'Elementary Education',
    EMGT: 'Emergency Management',
    ENGL: 'English',
    EIL: "English as Int'l Language",
    ENTR: 'Entrepreneurship',
    EXS: 'Exercise Sport Science',
    FILM: 'Film',
    FIN: 'Finance',
    FORS: 'Forensic Science',
    FREN: 'French',
    GEOG: 'Geography',
    HAWN: 'Hawaiian',
    HWST: 'Hawaiian Studies',
    HLTH: 'Health',
    HIST: 'History',
    HEC: 'Home Economics',
    HTM: 'Hospitality Tourism Mgt',
    HUM: 'Humanities',
    IS: 'Information System',
    IT: 'Information Technology',
    ICS: 'International Cultural Studies',
    IPB: 'Intercultural Peacebuilding',
    JPN: 'Japanese',
    LING: 'Linguistics',
    AMOR: 'Maori',
    MATH: 'Mathematics',
    MUSC: 'Music',
    OCEN: 'Oceanography',
    PAIS: 'Pacific Island Studies',
    PHSC: 'Physical Science',
    POSC: 'Political Science',
    PSYC: 'Psychology',
    PMGT: 'Public Management',
    REL: 'Religion',
    SCI: 'Science',
    SAMN: 'Samoan',
    SCED: 'Secondary Education',
    SOCW: 'Social Work',
    SPAN: 'Spanish',
    SPED: 'Special Education',
    STDEV: 'Student Development',
    TESOL: 'TESOL',
    THEA: 'Theatre',
    TONG: 'Tongan',
    WLNG: 'World Language',
};

const gradeList = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];

type GraderProps = {
    id?: number;
    index?: number;
    classTypeValue?: string | null;
    classNumberValue?: string | null;
    classCreditValue?: number | null;
    gradeValue?: string | null;
    setGradeArr: React.Dispatch<React.SetStateAction<any[]>>;
};

function deleteGradeArrItem(setGradeArr: any, index: number) {
    setGradeArr((prev: any) => {
        if (prev.length <= 1) return prev;
        const newArr = [...prev];
        newArr.splice(index, 1);
        return newArr;
    });
}

function Grader({ id = Math.random(), index = 0, classTypeValue = null, classNumberValue = null, classCreditValue = null, gradeValue = null, setGradeArr }: GraderProps) {
    const [classType, setClassType] = useState(classTypeValue);
    const [classNumber, setClassNumber] = useState(classNumberValue);
    const [credit, setCredit] = useState(classCreditValue);
    const [grade, setGrade] = useState(gradeValue);
    const [gradeColor, setGradeColor] = useState('white');

    const formRef = useRef(null);

    useEffect(() => {
        setGradeArr((prev) => {
            const newArr = [...prev];
            newArr[index] = {
                id,
                index,
                classType,
                classNumber,
                credit,
                grade,
            };
            return newArr;
        });
        setGradeColor(() => {
            if (grade === 'A' || grade === 'A-') {
                return 'lightcyan';
            } else if (grade === 'B' || grade === 'B-' || grade === 'B+') {
                return 'LemonChiffon';
            } else if (grade === 'C' || grade === 'C-' || grade === 'C+') {
                return 'Moccasin';
            } else if (grade === 'D' || grade === 'D-' || grade === 'D+') {
                return 'MistyRose';
            } else if (grade === 'F') {
                return 'lightgray';
            } else {
                return 'white';
            }
        });
    }, [classType, classNumber, credit, grade]);

    const hasAnimatedRef = useRef(false);
    useEffect(() => {
        if (!hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            const ctx = gsap.context(() => {
                const tl = gsap.timeline();
                tl.fromTo(formRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'power1.out' });
            }, formRef);

            return () => ctx.revert();
        }
    }, []);

    return (
        <form ref={formRef}>
            <div className={Styles.grader}>
                <input type="text" placeholder="class category" className={`${Styles.class_type}`} list="opt" onChange={(e) => setClassType(e.target.value)} />
                <datalist id="opt">
                    {Object.entries(classTypeObj).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </datalist>
                <input type="text" placeholder="class number" className={`${Styles.class_number}`} onChange={(e) => setClassNumber(e.target.value)} />
                <input type="number" placeholder="credits" min="0" max="6" className={`${Styles.class_credit}`} onChange={(e) => setCredit(e.target.value === '' ? null : Number(e.target.value))} />
                <select name="select" className="select" onChange={(e) => setGrade(e.target.value)} style={{ backgroundColor: gradeColor }} defaultValue="-">
                    <option value="-" style={{ display: 'none' }}>
                        -
                    </option>
                    {gradeList.map((grade, index) => (
                        <option key={index} value={grade}>
                            {grade}
                        </option>
                    ))}
                </select>
                <button className={Styles.trash_button} onClick={() => deleteGradeArrItem(setGradeArr, index)} type="button">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </form>
    );
}

export default Grader;
