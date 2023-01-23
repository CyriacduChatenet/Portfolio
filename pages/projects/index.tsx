import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

import Layout from "@/components/layout";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";
import { Data } from "@/types/data";

import styles from "@/pages/projects/style.module.scss";

const ProjectsPage = () => {
  const [projectsStateData, setProjectsStateData] = useState<Data>({});
  const [previewImageSrc, setPreviewImageSrc] = useState("");

  const ref = useRef(null);
  const previewImgRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const listRef = useRef(null);
  const lineRef = useRef(null);

  const handleFetchProjectsData = async () => {
    const response = await fetch("/api/projects");
    const json = await response.json();
    setProjectsStateData(json);
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

  const handleLineAnimate = () => {
    gsap.fromTo(lineRef.current, {width: 0}, {width: '80%', duration: 1, ease: 'power4.in'});
  };

  const handleLineUnanimate = () => {
    gsap.fromTo(lineRef.current, {width: '80%'}, {width: 0, duration: 1, ease: 'power4.in'});
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
              Projects <span>{projectsStateData.data?.length}</span>
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
              {projectsStateData.data?.map((project: any) => (
                <li key={project._id} className={styles.projectCard}>
                  <Link
                    href={`/project/${project.link_title}`}
                    className={styles.projectLink}
                    onMouseEnter={() => {
                      handleAnimatePreview();
                      setPreviewImageSrc(project.thumbnail);
                      handleLineAnimate();
                    }}
                    onMouseLeave={() => {
                      handleUnanimatePreview();
                      setTimeout(() => {
                        setPreviewImageSrc("");
                      }, 2000);
                      handleLineUnanimate();
                    }}
                  >
                    <div className={styles.arrow}></div>
                    <span>
                      <b>{project.title}</b>&nbsp; - &nbsp;{project.category}
                    </span>
                  </Link>
                  <div className={styles.line} ref={lineRef}></div>
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
