import { NextComponentType } from "next";
import Link from "next/link";
import gsap from "gsap";
import { MutableRefObject, useEffect, useRef, useState } from "react";

import useMenu from "@/contexts/useMenu";
import useAnimateMenu from "@/hooks/animations/useAnimateMenu";
import IProject from "@/types/project";


const Menu: NextComponentType = () => {
   const [projectsStateData, setProjectsStateData] = useState({});


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
    gsap.fromTo(target.current, {width: 0}, {width: '60%', duration: 0.5, ease: 'power4.in'});
  };

  const handleLineUnanimate = (target: MutableRefObject<null>) => {
    gsap.fromTo(target.current, {width: '60%'}, {width: 0, duration: 0.5, ease: 'power4.in'});
  };

  const length = projectsStateData.data?.length;

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div className={'absolute z-20 w-screen h-screen bg-dark'} ref={menuContainer}>
      <ul className={'flex flex-col justify-around h-3/4 pl-24 sm:pl-48 md:pl-64 lg:pl-80 xl:pl-96 2xl:ml-80 pt-32 text-white'}>
        <li>
          <Link
            href={"/"}
            className={'text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl uppercase'}
            onClick={() => setIsOpen(false)}
            ref={homeMenuEntry}
            onMouseEnter={() => handleLineAnimate(homeMenuLine)}
            onMouseLeave={() => handleLineUnanimate(homeMenuLine)}
          >
            Home
          </Link>
          <div className={''} ref={homeMenuLine}></div>
        </li>
        <li>
          <Link
            href={"/projects"}
            className={'text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl uppercase'}
            onClick={() => setIsOpen(false)}
            ref={projectsMenuEntry}
            onMouseEnter={() => handleLineAnimate(projectsMenuLine)}
            onMouseLeave={() => handleLineUnanimate(projectsMenuLine)}
          >
            Projects ({length})
          </Link>
          <div className={''} ref={projectsMenuLine}></div>
        </li>
        <li>
          <Link
            href={"/talks"}
            className={'text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl uppercase'}
            onClick={() => setIsOpen(false)}
            ref={talksMenuEntry}
            onMouseEnter={() => handleLineAnimate(talksMenuLine)}
            onMouseLeave={() => handleLineUnanimate(talksMenuLine)}
          >
            Talks (1)
          </Link>
          <div className={''} ref={talksMenuLine}></div>
        </li>
        <li>
          <Link
            href={"/about"}
            className={'text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl uppercase'}
            onClick={() => setIsOpen(false)}
            ref={aboutMenuEntry}
            onMouseEnter={() => handleLineAnimate(aboutMenuLine)}
            onMouseLeave={() => handleLineUnanimate(aboutMenuLine)}
          >
            About
          </Link>
          <div className={''} ref={aboutMenuLine}></div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
