import { FC, useEffect, useRef } from "react";
import gsap from "gsap";

import styles from "@/components/home/cubes/style.module.scss";

const Cubes: FC = () => {
  const cubeContainerRef = useRef(null);
  const cube1Ref = useRef(null);
  const cube2Ref = useRef(null);
  const cube3Ref = useRef(null);
  const cube4Ref = useRef(null);
  const cube5Ref = useRef(null);
  const cube6Ref = useRef(null);

  const handleAnimate = () => {
    gsap.fromTo(cubeContainerRef.current, {rotation: 0}, { rotation: 360, duration: 4, delay: 4});
    gsap.fromTo(cubeContainerRef.current, {opacity: 0}, { opacity: 100, ease: 'power4.in', duration: 4, delay: 2});

    if(window.innerWidth <= 1023) {
      gsap.fromTo(cubeContainerRef.current, {width: '20%'}, { width: '100%', duration: 5, delay:2});
    }
    
    gsap.fromTo(cube1Ref.current, {rotation: 0}, { rotation: -360, duration: 1, delay: 2});
    gsap.fromTo(cube2Ref.current, {rotation: 0}, { rotation: -360, duration: 1, delay: 2});
    gsap.fromTo(cube3Ref.current, {rotation: 0}, { rotation: -360, duration: 1, delay: 2});
    gsap.fromTo(cube4Ref.current, {rotation: 0}, { rotation: -360, duration: 1, delay: 2});
    gsap.fromTo(cube5Ref.current, {rotation: 0}, { rotation: -360, duration: 1, delay: 2});
    gsap.fromTo(cube6Ref.current, {rotation: 0}, { rotation: -360, duration: 1, delay: 2});
  };

  useEffect(() => {
    handleAnimate();
  }, [])
  return (
    <div className={styles.container} ref={cubeContainerRef} >
      <div className={styles.cubeContainer}>
        <div className={styles.cube} id={styles.cube1} ref={cube1Ref}></div>
        <div className={styles.cube} id={styles.cube2} ref={cube2Ref}></div>
        <div className={styles.cube} id={styles.cube3} ref={cube3Ref}></div>
      </div>
      <div className={styles.cubeContainer}>
        <div className={styles.cube} id={styles.cube4} ref={cube4Ref}></div>
        <div className={styles.cube} id={styles.cube6} ref={cube6Ref}></div>
      </div>
      <div className={styles.cubeContainer}>
        <div className={styles.cube} id={styles.cube5} ref={cube5Ref}></div>
      </div>
    </div>
  );
};

export default Cubes;
