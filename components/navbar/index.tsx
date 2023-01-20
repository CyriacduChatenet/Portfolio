import { FC, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

import styles from "@/components/navbar/style.module.scss";
import useMenu from "@/contexts/useMenu";

const Navbar: FC = () => {
  const { isOpen, setIsOpen } = useMenu();

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
      <Link
        href={"/"}
        className={styles.logoLink}
        style={isOpen ? { color: "white" } : { color: "black" }}
      >
        {isOpen ? (
          <img src={"logoDark.png"} alt={""} width={"50%"} />
        ) : (
          <img src={"logoLight.png"} alt={""} width={"50%"} />
        )}
      </Link>
      <button className={styles.menuButton} onClick={handleClickAnimate}>
        <div
          className={styles.line}
          ref={firstLine}
          style={
            isOpen ? { backgroundColor: "white" } : { backgroundColor: "black" }
          }
        ></div>
        <div
          className={styles.line}
          ref={secondLine}
          style={
            isOpen ? { backgroundColor: "white" } : { backgroundColor: "black" }
          }
        ></div>
      </button>
    </nav>
  );
};

export default Navbar;
