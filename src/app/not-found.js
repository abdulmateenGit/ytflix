import Link from 'next/link'

import styles from "@/app/styles/common.module.css";
import herosection from "@/app/components/Herosection";

export default function NotFound() {
    return (
        <section className={styles.container}>
            <div className={styles.error_page}>
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/">
                    <button>
                        Return Home
                    </button>
                </Link>
            </div>
        </section>
    )
}
