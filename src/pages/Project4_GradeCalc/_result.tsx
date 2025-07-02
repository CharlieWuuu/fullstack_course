import Styles from './styles/style.module.scss';

type ResultProps = {
    gradeArr: any[];
};

const GPA_MAP = [
    { grade: 'A', value: 4.0 },
    { grade: 'A-', value: 3.7 },
    { grade: 'B+', value: 3.4 },
    { grade: 'B', value: 3.0 },
    { grade: 'B-', value: 2.7 },
    { grade: 'C+', value: 2.4 },
    { grade: 'C', value: 2.0 },
    { grade: 'C-', value: 1.7 },
    { grade: 'D+', value: 1.4 },
    { grade: 'D', value: 1.0 },
    { grade: 'D-', value: 0.7 },
    { grade: 'F', value: 0.0 },
];

function setGPA(gradeArr: any[]): number {
    let totalPoints = 0;
    let totalCredit = 0;

    for (const item of gradeArr) {
        if (item.grade === null || item.credit == null || isNaN(item.credit)) continue;
        const gpaEntry = GPA_MAP.find((g) => g.grade === item.grade);
        if (!gpaEntry) continue;
        totalPoints += gpaEntry.value * item.credit;
        totalCredit += item.credit;
    }

    return totalCredit === 0 ? 0 : parseFloat((totalPoints / totalCredit).toFixed(2));
}

function Result({ gradeArr }: ResultProps) {
    return (
        <div className={`${Styles.result}`}>
            <p className={Styles.gpa_text}>
                Your semester <br />
                GPA is
            </p>
            <h2 className={Styles.result_gpa}>{setGPA(gradeArr).toFixed(2)}</h2>
        </div>
    );
}

export default Result;
