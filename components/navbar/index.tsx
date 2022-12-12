import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

import styles from "@/components/navbar/style.module.scss";
import useMenu from "@/contexts/useMenu";

interface IProps {
  displayMenu: boolean;
}

const Navbar: FC<IProps> = ({ displayMenu }) => {
  const [dateNow, setDateNow] = useState('');

  const { isOpen, setIsOpen } = useMenu();

  const firstLine = useRef(null);
  const secondLine = useRef(null);

  const handleFormatDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    const day = date.getDate();

    if(month < 12) {
      month = 1
    };
    setDateNow(`${day}/${month}/${year}`)
  }

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

  useEffect(() => {
    handleFormatDate();
  }, []);

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
          <p className={styles.update}>Last update : {dateNow}</p>
          <div className={styles.loader}></div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
