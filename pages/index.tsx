import { useEffect, useRef } from "react";
import gsap from "gsap";

import BaselineFooter from "@/components/baselineFooter";
import Layout from "@/components/layout";
import Loader from "@/components/loader";
import Cubes from "@/components/home/cubes";
import { useLoader } from "@/contexts/useLoader";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";

import styles from "@/styles/Home.module.scss";


const HomePage = () => {

  const creativeTitle = useRef(null);
  const developerTitle = useRef(null);
  const description = useRef(null);

  const { isOpen } = useMenu();
  const { isLoading } = useLoader();

  useBodyScroll(isOpen);
  useBodyScrollLock(isOpen);

  const handleAnimate = () => {
    gsap.fromTo(creativeTitle.current, {opacity: 0, x:-20}, {delay:8, duration: 6, ease: 'power4.inOut', opacity: 100, x:0});
    gsap.fromTo(developerTitle.current, {opacity: 0, x:-20}, {delay:8, duration: 6, ease: 'power4.inOut', opacity: 100, x:0});
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    handleAnimate();
  }, []);

  return (
    <>
      {isLoading === false ? <Loader /> : null}
      <div className={styles.container}>
        <Layout
          title={"Cyriac du Chatenet - Portfolio"}
          description={"Cyriac du Chatenet's portfolio of fullstack developer and Ux - Ui designer"}
        >
          <div className={styles.position}>
          <Cubes />
          <main className={styles.main}>
            <div className={styles.content}>
              <div className={styles.titleContainer}>
                <p className={styles.title} ref={creativeTitle}>
                  Creative
                </p>
                <p className={styles.devTitle} ref={developerTitle}>
                  Developer
                </p>
              </div>
              <p className={styles.description} ref={description}>
                Ux - Ui designer X developer fullstack
              </p>
            </div>
            <BaselineFooter displayTalks={true} />
          </main>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default HomePage;
