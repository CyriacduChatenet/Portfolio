import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

import Layout from "@/components/layout";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";

import styles from "@/pages/projects/style.module.scss";

const ProjectsPage = () => {
  const [projectsStateData, setProjectsStateData] = useState([]);
  const [previewImageSrc, setPreviewImageSrc] = useState("");

  const ref = useRef(null);
  const previewImgRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const listRef = useRef(null);

  const handleFetchProjectsData = async () => {
    const response = await fetch("/api/projects");
    const json = await response.json();
    const sortedJson = json.data.sort((p1: any, p2: any) => (p1.year < p2.year) ? 1 : (p1.year > p2.year) ? -1 : 0)
    setProjectsStateData(sortedJson);
  };

  const handleAnimatePreview = () => {
    gsap.fromTo(
      previewImgRef.current,
      { opacity: 0 },
      { opacity: 100, duration: 2, ease: "power4.in" }
    );
  };

  const handleUnanimatePreview = () => {
    gsap.fromTo(
      previewImgRef.current,
      { opacity: 100 },
      { opacity: 0, duration: 2, ease: "power4.out" }
    );
  };

  const handleAnimate = () => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 100, duration: 2, ease: "power4.in", delay: 1 }
    );
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0 },
      { opacity: 100, duration: 2.5, ease: "power4.in", delay: 1 }
    );
    gsap.fromTo(
      listRef.current,
      { opacity: 0 },
      { opacity: 100, duration: 3, ease: "power4.in", delay: 1 }
    );
  };

  useEffect(() => {
    handleAnimate();
    handleFetchProjectsData();
  }, []);

  const { isOpen } = useMenu();

  useBodyScroll(isOpen);
  useBodyScrollLock(isOpen);

  return (
    <div className={styles.header} data-scroll-container ref={ref}>
      <Layout
        title={"Cyriac du Chatenet - Portfolio"}
        description={
          "Cyriac du Chatenet's portfolio of fullstack developer and Ux - Ui designer"
        }
      >
        <div className={styles.container}>
          <div className={styles.titleContent}>
            <h1 className={styles.title} ref={titleRef}>
              Projects <span>{projectsStateData.length}</span>
            </h1>
            <p className={styles.description} ref={descriptionRef}>
              Some cool projects i’ve done in school or my work internship
            </p>
          </div>
          <div className={styles.content}>
            <img
              src={previewImageSrc}
              alt=""
              className={styles.projectPreview}
              ref={previewImgRef}
            />
            <ul className={styles.projectsList} ref={listRef}>
              {projectsStateData.map((project: any, index: number) => (
                <li key={project._id} className={styles.projectCard}>
                  <Link
                    href={`/project/${project.link_title}`}
                    className={styles.projectLink}
                    onMouseEnter={() => {
                      handleAnimatePreview();
                      setPreviewImageSrc(project.thumbnail);
                    }}
                    onMouseLeave={() => {
                      handleUnanimatePreview();
                      setTimeout(() => {
                        setPreviewImageSrc("");
                      }, 2000);
                    }}
                  >
                    <span>
                      <b>{project.title}</b>&nbsp; - &nbsp;{project.category}
                    </span>
                    <div className={styles.line}></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProjectsPage;
