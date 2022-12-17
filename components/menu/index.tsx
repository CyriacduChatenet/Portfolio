import { NextComponentType } from "next";
import Link from "next/link";
import { useRef } from "react";

import useMenu from "@/contexts/useMenu";

import styles from "@/components/menu/style.module.scss";
import useAnimateMenu from "@/hooks/animations/useAnimateMenu";

const Menu: NextComponentType = () => {

  const homeMenuEntry = useRef(null);
  const projectsMenuEntry = useRef(null);
  const talksMenuEntry = useRef(null);
  const aboutMenuEntry = useRef(null);

  const menuContainer = useRef(null);

  const { isOpen, setIsOpen } = useMenu();

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
            Projects (7)
          </Link>
        </li>
        <li>
          <Link
            href={"/talks"}
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
            ref={talksMenuEntry}
          >
            Talks
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
