import { NextComponentType } from "next";
import Link from "next/link";
import { MutableRefObject, useEffect, useRef, useState } from "react";

import useMenu from "@/contexts/useMenu";
import useAnimateMenu from "@/hooks/animations/useAnimateMenu";
import { Data } from "@/types/data";

import styles from "@/components/menu/style.module.scss";
import gsap from "gsap";


const Menu: NextComponentType = () => {
   const [projectsStateData, setProjectsStateData] = useState<Data>({});

  const homeMenuEntry = useRef(null);
  const projectsMenuEntry = useRef(null);
  const talksMenuEntry = useRef(null);
  const aboutMenuEntry = useRef(null);

  const homeMenuLine = useRef(null);
  const projectsMenuLine = useRef(null);
  const talksMenuLine = useRef(null);
  const aboutMenuLine = useRef(null);

  const menuContainer = useRef(null);

  const { isOpen, setIsOpen } = useMenu();

  useAnimateMenu(isOpen, menuContainer, [
    homeMenuEntry,
    projectsMenuEntry,
    talksMenuEntry,
    aboutMenuEntry,
  ]);

  const handleFetchData = async () => {
    const response = await fetch('/api/projects');
    const json = await response.json();
    setProjectsStateData(json);
  };

  const handleLineAnimate = (target : MutableRefObject<null>) => {
    gsap.fromTo(target.current, {width: 0}, {width: '60%', duration: 1, ease: 'power4.in'});
  };

  const handleLineUnanimate = (target: MutableRefObject<null>) => {
    gsap.fromTo(target.current, {width: '60%'}, {width: 0, duration: 1, ease: 'power4.in'});
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div className={styles.content} ref={menuContainer}>
      <ul className={styles.navList}>
        <li>
          <Link
            href={"/"}
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
            ref={homeMenuEntry}
            onMouseEnter={() => handleLineAnimate(homeMenuLine)}
            onMouseLeave={() => handleLineUnanimate(homeMenuLine)}
          >
            Home
          </Link>
          <div className={styles.line} ref={homeMenuLine}></div>
        </li>
        <li>
          <Link
            href={"/projects"}
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
            ref={projectsMenuEntry}
            onMouseEnter={() => handleLineAnimate(projectsMenuLine)}
            onMouseLeave={() => handleLineUnanimate(projectsMenuLine)}
          >
            Projects ({projectsStateData.data?.length})
          </Link>
          <div className={styles.line} ref={projectsMenuLine}></div>
        </li>
        <li>
          <Link
            href={"/talks"}
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
            ref={talksMenuEntry}
            onMouseEnter={() => handleLineAnimate(talksMenuLine)}
            onMouseLeave={() => handleLineUnanimate(talksMenuLine)}
          >
            Talks (1)
          </Link>
          <div className={styles.line} ref={talksMenuLine}></div>
        </li>
        <li>
          <Link
            href={"/about"}
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
            ref={aboutMenuEntry}
            onMouseEnter={() => handleLineAnimate(aboutMenuLine)}
            onMouseLeave={() => handleLineUnanimate(aboutMenuLine)}
          >
            About
          </Link>
          <div className={styles.line} ref={aboutMenuLine}></div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
