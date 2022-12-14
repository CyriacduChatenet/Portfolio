import { FC, useEffect, useState } from "react";

import styles from '@/components/loader/navbar/style.module.scss';

const LoaderNavbar: FC = () => {
    const [dateNow, setDateNow] = useState('');

    const handleFormatDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        const day = date.getDate();
    
        if(month < 12) {
          month = 1
        };
        setDateNow(`${day}/${month}/${year}`)
      }

      useEffect(() => {
        handleFormatDate();
      }, []);

    return (
        <div className={styles.navbar}>
          <p className={styles.update}>Last update : {dateNow}</p>
          <div className={styles.loader}></div>
        </div>
    );
};

export default LoaderNavbar