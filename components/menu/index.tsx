import { NextComponentType } from "next";
import Link from "next/link";
import { useRef, useState } from "react";

import useMenu from "@/contexts/useMenu";
import useAnimateMenu from "@/hooks/animations/useAnimateMenu";
import useFetch from "@/hooks/useFetch";
import { Data } from "@/types/data";

import styles from "@/components/menu/style.module.scss";


const Menu: NextComponentType = () => {
   const [projectsStateData, setProjectsStateData] = useState<Data>({});
   const [projectsStateDataError, setProjectsStateDataError] = useState<Data>({});

  const homeMenuEntry = useRef(null);
  const projectsMenuEntry = useRef(null);
  const talksMenuEntry = useRef(null);
  const aboutMenuEntry = useRef(null);

  const menuContainer = useRef(null);

  const { isOpen, setIsOpen } = useMenu();

  useFetch('/api/projects', 'GET', setProjectsStateData, setProjectsStateDataError);

  useAnimateMenu(isOpen, menuContainer, [
    homeMenuEntry,
    projectsMenuEntry,
    talksMenuEntry,
    aboutMenuEntry,
  ]);

  return (
    <div className={styles.content} ref={menuContainer}>
      <ul className={styles.navList}>
        <li>
          <Link
            href={"/"}
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
            ref={homeMenuEntry}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/projects"}
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
            ref={projectsMenuEntry}
          >
            Projects ({projectsStateData.data?.length})
          </Link>
        </li>
        <li>
          <Link
            href={"/talks"}
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
            ref={talksMenuEntry}
          >
            Talks (1)
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
            ref={aboutMenuEntry}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
