import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import Layout from "@/components/layout";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";
import BottomBanner from "@/components/bottomBanner";

import styles from "@/pages/project/style.module.scss";

const ProjectPage = () => {
  const [data, setData] = useState<any>({});
  const { isOpen } = useMenu();

  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);

  useBodyScroll(isOpen);
  useBodyScrollLock(isOpen);

  const handleFetchData = async () => {
    const response = await fetch(`/api/${window.location.pathname}`);
    const json = await response.json();
    setData(json.data);
  };

  const handleAnimate = () => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 100, duration: 3, ease: "power4.in", delay: 1 }
    );
    gsap.fromTo(
      carouselRef.current,
      { opacity: 0 },
      { opacity: 100, duration: 3, ease: "power4.in", delay: 1.5 }
    );
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0 },
      { opacity: 100, duration: 3, ease: "power4.in", delay: 2 }
    );
    gsap.fromTo(
      missionRef.current,
      { opacity: 0 },
      { opacity: 100, duration: 3, ease: "power4.in", delay: 2.5 }
    );
    gsap.fromTo(
      teamRef.current,
      { opacity: 0 },
      { opacity: 100, duration: 3, ease: "power4.in", delay: 3 }
    );
  };

  useEffect(() => {
    handleFetchData();
    handleAnimate();
  }, []);

  return (
    <div className={styles.header}>
      <Layout
        title={"Cyriac du Chatenet - Portfolio"}
        description={
          "Cyriac du Chatenet's portfolio of fullstack developer and Ux - Ui designer"
        }
      >
        <div className={styles.container}>
          <div className={styles.contentTitle}>
            <h1 className={styles.title} ref={titleRef}>
              {data.title}
            </h1>
          </div>
          <div className={styles.carouselContainer} ref={carouselRef}>
            <img src={data.thumbnail} alt="" className={styles.image} />
          </div>
          <section className={styles.content}>
            <div className={styles.block} ref={aboutRef}>
              <h2 className={styles.subtitle}>About</h2>
              <p>Year: {data.year}</p>
              <p className={styles.content}>{data.about}</p>
            </div>
            <div className={styles.block} ref={missionRef}>
              <h2 className={styles.subtitle}>Mission</h2>
              <ul className={styles.missions}>
                {data.missions?.map((mission: any) => (
                  <li key={mission._id}>{mission.name} : {mission.description}</li>
                ))}
              </ul>
            </div>
            <div className={styles.block} ref={teamRef}>
              <h2 className={styles.subtitle}>Team</h2>
              <ul className={styles.users}>
                {data.team?.map((user: any) => (
                  <a
                    key={user._id}
                    href={user.website}
                    className={styles.userLink}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <li className={styles.user}>
                      <img
                        src={user.profile_picture}
                        alt=""
                        className={styles.profile_picture}
                      />
                      <span>{user.name}</span>
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          </section>
          <section className={styles.images}>
            {data.images?.map((image: any, index: number) => (
              <img
                key={image._id}
                src={image.source}
                alt={""}
                className={styles.img}
              />
            ))}
          </section>
          <BottomBanner label={"Other projects"} />
        </div>
      </Layout>
    </div>
  );
};

export default ProjectPage;
