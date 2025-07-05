import styles from '../scss/style.module.scss';

type PictureProps = {
    data: {
        photographer?: string;
        src: {
            large: string;
        };
    };
};

function Picture({ data }: PictureProps) {
    return (
        <div className={styles.picture}>
            <p>{data?.photographer}</p>
            <div className={styles.imageContainer}>
                <img src={data?.src.large} alt="" />
            </div>
            <p>
                在此下載圖片：
                <a target="_blank" href={data?.src.large} rel="noopener noreferrer">
                    按一下
                </a>
            </p>
        </div>
    );
}

export default Picture;
