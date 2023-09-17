import Link from "next/link";
import Image from "next/image";

import styles from "@/app/styles/navbar.module.css"
import Nav from "@/app/components/Nav"

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/"/>
                <Image src="/logo.png" alt="mylogo" width={190} height={150}/>
            </div>
            <Nav/>
        </header>
    );
};

export default Header;