import { FC } from "react";
import Link from "next/link";

import styles from "@/components/bottomPageControl/style.module.scss";


interface IProps {
  link: string;
  label: string;
}

const BottomPageControl: FC<IProps> = ({ link, label }) => {
  return (
    <div className={styles.container}>
        <Link href={link} className={styles.contactLink}>
          {label}
        </Link>
    </div>
  );
};

export default BottomPageControl;
