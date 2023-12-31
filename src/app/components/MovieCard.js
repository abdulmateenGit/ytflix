import styles from '@/app/styles/common.module.css'
import Image from "next/image";
import Link from "next/link";

const MovieCard = (curElem) => {

    const {imdbid, type, title, synopsis} = curElem;

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={curElem.imageurl[0]} alt={title} height={200} width={280}/>
                </div>
                <div className={styles.card_data}>
                    <h2>{title.substring(0, 18)}</h2>
                    <p>
                        {`${synopsis.substring(0, 66)} ...`}
                    </p>

                    <Link href={`/movie/${imdbid}`}>
                        <button>
                            Read More
                        </button>
                    </Link>
                </div>
            </div>

        </>
    );
};

export default MovieCard;