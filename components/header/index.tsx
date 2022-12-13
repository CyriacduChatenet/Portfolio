import { FC } from "react";

import styles from '@/components/header/style.module.scss';


interface IProps {
    title: string;
    description: string;
};

const Header: FC<IProps> = ({ title, description}) => {
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.titleDescription}>{description}</p>
        </header>
    );
};

export default Header;