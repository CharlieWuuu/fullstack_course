import Styles from './styles/style.module.scss';

type SortButtonProps = {
    gradeArr: any[];
    setGradeArr: React.Dispatch<React.SetStateAction<any[]>>;
};

const gradeList = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];

function sortGradeArr(gradeArr: any[], order: 'ascending' | 'descending') {
    // 複製 gradeArr，避免直接修改原陣列，並根據 grade 在 gradeList 的順序排序
    const sorted = [...gradeArr].sort((a, b) => {
        // 如果 a 或 b 的 grade 為 null，則不改變其順序
        if (a.grade === null || b.grade === null) return 0;
        // 取得 a.grade 在 gradeList 中的索引
        const indexA = gradeList.indexOf(a.grade);
        // 取得 b.grade 在 gradeList 中的索引
        const indexB = gradeList.indexOf(b.grade);
        // 根據排序方式決定回傳值，ascending 則小的排前面，descending 則大的排前面
        return order === 'ascending' ? indexA - indexB : indexB - indexA; // 回傳 number
    });

    // 重新編號 index 屬性，但不改變原本 item 的 id
    return sorted.map((item, newIndex) => ({
        ...item, // 保留原本 item 的所有屬性
        index: newIndex, // 設定新的 index 屬性
    }));
}

function SortButton({ gradeArr, setGradeArr }: SortButtonProps) {
    return (
        <div className={Styles.buttons}>
            <button className={`${Styles.btn} ${Styles.sort_descending}`} onClick={() => setGradeArr(sortGradeArr(gradeArr, 'descending'))}>
                降序
            </button>
            <button className={`${Styles.btn} ${Styles.sort_ascending}`} onClick={() => setGradeArr(sortGradeArr(gradeArr, 'ascending'))}>
                升序
            </button>
        </div>
    );
}
export default SortButton;
