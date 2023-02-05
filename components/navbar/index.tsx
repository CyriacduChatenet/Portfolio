import { FC, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

import useMenu from "@/contexts/useMenu";

const Navbar: FC = () => {
  const { isOpen, setIsOpen } = useMenu();

  const firstLine = useRef(null);
  const secondLine = useRef(null);

  const handleClickAnimate = () => {
    if (isOpen === false) {
      gsap.to(firstLine.current, { rotation: 45, y: 9, ease: "ease-out" });
      gsap.to(secondLine.current, { rotation: -45, y: -12.5, ease: "ease-out" });
      setIsOpen(!isOpen);
    } else {
      gsap.to(firstLine.current, { rotation: 0, y: 0, ease: "ease-in" });
      gsap.to(secondLine.current, { rotation: 0, y: 0, ease: "ease-in" });
      setIsOpen(!isOpen);
    }
  };

  return (
    <nav className={'flex items-center justify-between'}>
      <Link
        href={"/"}
        className={''}
      >
        {isOpen ? (
          <img src={"logoDark.png"} alt={""} className={'max-w-20 max-h-12'} />
        ) : (
          <img src={"logoLight.png"} alt={""} className={'max-w-20 max-h-12'}  />
        )}
      </Link>
      <button className={'flex flex-col items-center justify-around w-12 h-12'} onClick={handleClickAnimate}>
        <div
          className={'w-full h-1'}
          ref={firstLine}
          style={
            isOpen ? { backgroundColor: "white" } : { backgroundColor: "black" }
          }
        ></div>
        <div
          className={'w-full h-1'}
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
