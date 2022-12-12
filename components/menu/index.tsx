import { NextComponentType } from "next";
import Link from "next/link";

import styles from '@/components/menu/style.module.scss';
import useMenu from "@/contexts/useMenu";

const Menu: NextComponentType = () => {
    const { setIsOpen } = useMenu();
    return (
        <div className={styles.content}>
            <ul className={styles.navList}>
                <li>
                    <Link href={'/'} className={styles.navLink} onClick={() => setIsOpen(false)}>Home</Link>
                </li>
                <li>
                    <Link href={'/projects'} className={styles.navLink} onClick={() => setIsOpen(false)}>Projects</Link>
                </li>
                <li>
                    <Link href={'/talks'} className={styles.navLink} onClick={() => setIsOpen(false)}>Talks</Link>
                </li>
                <li>
                    <Link href={'/about'} className={styles.navLink} onClick={() => setIsOpen(false)}>About</Link>
                </li>
                <li>
                    <Link href={'/contact'} className={styles.navLink} onClick={() => setIsOpen(false)}>Contacts</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;