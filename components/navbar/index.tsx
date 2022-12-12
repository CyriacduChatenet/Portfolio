import { FC, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

import styles from "@/components/navbar/style.module.scss";

interface IProps {
  displayMenu: boolean;
}

const Navbar: FC<IProps> = ({ displayMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const firstLine = useRef(null);
  const secondLine = useRef(null);

  const handleClickAnimate = () => {
    if (isOpen === false) {
      gsap.to(firstLine.current, { rotation: 45, y: 9, ease: "ease-out" });
      gsap.to(secondLine.current, { rotation: -45, y: -9, ease: "ease-out" });
      setIsOpen(!isOpen);
    } else {
      gsap.to(firstLine.current, { rotation: 0, y: 0, ease: "ease-in" });
      gsap.to(secondLine.current, { rotation: 0, y: 0, ease: "ease-in" });
      setIsOpen(!isOpen);
    }
  };

  return (
    <nav className={styles.navbar}>
      {displayMenu ? (
        <>
          <Link href={"/"} className={styles.logoLink}>
            Cyriac du Chatenet
          </Link>
          <button className={styles.menuButton} onClick={handleClickAnimate}>
            <div className={styles.line} ref={firstLine}></div>
            <div className={styles.line} ref={secondLine}></div>
          </button>
        </>
      ) : (
        <>
          <p className={styles.update}>Last update : 12/12/2022</p>
          <div className={styles.loader}></div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
