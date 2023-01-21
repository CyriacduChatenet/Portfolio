import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import Layout from "@/components/layout";
import ContactFooter from "@/components/contactFooter";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";

import styles from "@/pages/talks/style.module.scss";

const TalksPage = () => {
  const ref = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const previewRef = useRef(null);
  const projectRef = useRef(null);

  const { isOpen } = useMenu();
  useBodyScroll(isOpen);
  useBodyScrollLock(isOpen);

  const handleAnimate = () => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 100, ease: "power4.in", duration: 1 }
    );
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0 },
      { opacity: 100, ease: "power4.in", duration: 1, delay: 1 }
    );
    gsap.fromTo(
      previewRef.current,
      { opacity: 0 },
      { opacity: 100, ease: "power4.in", duration: 1, delay: 1.5 }
    );
    gsap.fromTo(
      projectRef.current,
      { opacity: 0 },
      { opacity: 100, ease: "power4.in", duration: 1, delay: 2 }
    );
  };

  useEffect(() => {
    handleAnimate();
  }, []);

  return (
    <Layout
      title={"Cyriac du Chatenet - Portfolio"}
      description={
        "Cyriac du Chatenet's portfolio of fullstack developer and Ux - Ui designer"
      }
    >
      <div className={styles.container} data-scroll-container ref={ref}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title} ref={titleRef}>
            Talks
          </h1>
          <p className={styles.description} ref={descriptionRef}>
            My different talks in developer conference
          </p>
        </div>
        <div className={styles.content}>
          <img
            src="https://secure.meetupstatic.com/photos/event/9/4/a/d/600_502718061.jpeg"
            alt=""
            className={styles.talkPreview}
            ref={previewRef}
          />
          <ul className={styles.talksList}>
            <li className={styles.talkCard} ref={projectRef}>
              <Link href={`/talk/design-tokens`} className={styles.talkLink}>
                Tech Ctrl - How design token will change our life as designer /
                developper ?
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ContactFooter />
    </Layout>
  );
};

export default TalksPage;
