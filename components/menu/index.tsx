import { NextComponentType } from "next";
import Link from "next/link";

import styles from '@/components/menu/style.module.scss';

const Menu: NextComponentType = () => {
    return (
        <div className={styles.content}>
            <ul className={styles.navList}>
                <li>
                    <Link href={'/'} className={styles.navLink}>Home</Link>
                </li>
                <li>
                    <Link href={'/projects'} className={styles.navLink}>Projects</Link>
                </li>
                <li>
                    <Link href={'/talks'} className={styles.navLink}>Talks</Link>
                </li>
                <li>
                    <Link href={'/about'} className={styles.navLink}>About</Link>
                </li>
                <li>
                    <Link href={'/contact'} className={styles.navLink}>Contacts</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;