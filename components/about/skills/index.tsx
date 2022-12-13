import { FC } from "react";

import styles from "@/components/about/skills/style.module.scss";

const Skills: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.skillsTitle}>Skills</h2>
      <section className={styles.skillsList}>
        <div className={styles.block}>
          <p>React & React Native</p>
          <p>Angular</p>
          <p>TypeScript</p>
          <p>NestJS</p>
        </div>
        <div className={styles.block}>
          <p>Ux - Ui design</p>
          <p>Illustrations</p>
          <p>Photography</p>
          <p>Video montage </p>
        </div>
        <div className={styles.block}>
          <p>Web marketing</p>
          <p>Marketing</p>
          <p>SEO</p>
        </div>
      </section>
    </div>
  );
};

export default Skills;
