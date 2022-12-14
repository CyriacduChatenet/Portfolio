import { NextComponentType } from "next";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import styles from '@/components/menu/style.module.scss';
import useMenu from "@/contexts/useMenu";

const Menu: NextComponentType = () => {
    const { setIsOpen } = useMenu();

    const homeMenuEntry = useRef(null);
    const projectsMenuEntry = useRef(null);
    const talksMenuEntry = useRef(null);
    const aboutMenuEntry = useRef(null);

    const handleAnimate = () => {
        gsap.fromTo(homeMenuEntry.current, {opacity:0, y:-10}, { opacity:100, y:10, duration: 2.5, ease: "power4.in" });
        gsap.fromTo(projectsMenuEntry.current, {opacity:0, y:-10}, { opacity:100, y:10, duration: 2.5, ease: "power4.in", delay: 0.5 });
        gsap.fromTo(talksMenuEntry.current, {opacity:0, y:-10}, { opacity:100, y:10, duration: 2.5, ease: "power4.in", delay: 1  });
        gsap.fromTo(aboutMenuEntry.current, {opacity:0, y:-10}, { opacity:100, y:10, duration: 2.5, ease: "power4.in", delay: 1.5  });
    };

    useEffect(() => {
        handleAnimate();
    },[])

    return (
        <div className={styles.content}>
            <ul className={styles.navList}>
                <li>
                    <Link href={'/'} className={styles.navLink} onClick={() => setIsOpen(false)} ref={homeMenuEntry}>Home</Link>
                </li>
                <li>
                    <Link href={'/projects'} className={styles.navLink} onClick={() => setIsOpen(false)} ref={projectsMenuEntry}>Projects (7)</Link>
                </li>
                <li>
                    <Link href={'/talks'} className={styles.navLink} onClick={() => setIsOpen(false)} ref={talksMenuEntry}>Talks</Link>
                </li>
                <li>
                    <Link href={'/about'} className={styles.navLink} onClick={() => setIsOpen(false)} ref={aboutMenuEntry}>About</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;