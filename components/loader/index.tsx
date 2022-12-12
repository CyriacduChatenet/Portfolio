import { FC, memo, useEffect, useState } from "react";

import Navbar from "@/components/navbar";
import BaselineFooter from "@/components/baselineFooter";
import { useLoader } from "@/contexts/useLoader";

import styles from "@/components/loader/style.module.scss";


const Loader: FC = () => {
    const [message, setMessage] = useState('');

    const { counter, setCounter } = useLoader();

    const handleChangeDescription = () => {
        if(counter <= 30) {
            setMessage('Skills initialisation...');
        } else if(counter >= 31 && counter <= 80) {
            setMessage('1287839878 mo of creativity')
        } else {
            setMessage('');
        }
    };

    const handleLoading = () => {
        if(counter <= 100) {
            setInterval(() => {
                setCounter(prevCounter => prevCounter += 1);
            }, 500)
        } else {
            setCounter(100);
        }

        handleChangeDescription();
    };

    useEffect(() => {
        handleLoading();
    });

  return (
    <div className={styles.container}>
      <Navbar displayMenu={false} />
      <section className={styles.content}>
        <h1 className={styles.percentage}>{counter}%</h1>
        <p className={styles.description}>{message}</p>
      </section>
      <div className={styles.margin}>
        <BaselineFooter displayTalks={false} />
      </div>
    </div>
  );
};

export default memo(Loader);
