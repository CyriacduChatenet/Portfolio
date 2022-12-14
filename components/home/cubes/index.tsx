import { FC } from "react";

import styles from "@/components/home/cubes/style.module.scss";

const Cubes: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cubeContainer}>
        <div className={styles.cube} id={styles.cube1}></div>
        <div className={styles.cube} id={styles.cube2}></div>
        <div className={styles.cube} id={styles.cube3}></div>
      </div>
      <div className={styles.cubeContainer}>
        <div className={styles.cube} id={styles.cube4}></div>
        <div className={styles.cube} id={styles.cube6}></div>
      </div>
      <div className={styles.cubeContainer}>
        <div className={styles.cube} id={styles.cube5}></div>
      </div>
    </div>
  );
};

export default Cubes;
