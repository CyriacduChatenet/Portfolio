import { FC } from "react";
import Link from "next/link";

import styles from '@/components/bottomBanner/style.module.scss';


interface IProps {
    label: string;
}


const BottomBanner: FC<IProps> = ({label}) => {
    return (
        <section className={styles.container}>
            <Link href={'/projects'} className={styles.title}>{label}</Link>
        </section>
    );
};

export default BottomBanner;