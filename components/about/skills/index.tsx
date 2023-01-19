import { FC, useEffect, useRef } from "react";
import gsap from "gsap";

import styles from "@/components/about/skills/style.module.scss";

const Skills: FC = () => {
  const skillsTitleRef = useRef(null);

  const handleAnimate = () => {
    gsap.fromTo(skillsTitleRef, { opacity: 0}, { opacity: 100, ease:'power4.in', duration:1, delay:1 })
  };

  useEffect(() => {
    handleAnimate();
  }, [])
  return (
    <div className={styles.container}>
      <h2 className={styles.skillsTitle} ref={skillsTitleRef}>Skills</h2>
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
