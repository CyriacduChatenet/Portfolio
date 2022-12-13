import { FC, useEffect, useRef } from "react";
import gsap from "gsap";

import useMenu from "@/contexts/useMenu";

import styles from '@/components/header/style.module.scss';


interface IProps {
    title: string;
    description: string;
};

const Header: FC<IProps> = ({ title, description}) => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    const { isOpen } = useMenu();

    const handleAnimate = () => {
        gsap.fromTo(titleRef.current, { opacity:0 }, { opacity:100, duration: 2.5, ease: "power4.in" });
        gsap.fromTo(descriptionRef.current, { opacity:0 }, { opacity:100, duration: 2.5, ease: "power4.in", delay:1 });
    };

    if(isOpen === false) {
        handleAnimate();
    }

    useEffect(() => {
        handleAnimate();
    }, [])

    return (
        <header className={styles.container}>
            <h1 className={styles.title} ref={titleRef}>{title}</h1>
            <p className={styles.titleDescription} ref={descriptionRef}>{description}</p>
        </header>
    );
};

export default Header;