import Styles from '../scss/style.module.scss';
type SearchProps = {
    search: () => void;
    setInput: (value: string) => void;
};

const Search = ({ search, setInput }: SearchProps) => {
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    return (
        <div className={Styles.search}>
            <input className={Styles.input} onChange={inputHandler} type="text" />
            <button onClick={search} className="rounded-0">
                Search
            </button>
        </div>
    );
};

export default Search;
