import { MutableRefObject, useEffect } from "react";
import gsap from "gsap";

const useAnimateMenu = (targetState: boolean, background: MutableRefObject<null>, elements: MutableRefObject<null>[]) => {

    const handleAnimate = () => {
        if (targetState) {
          gsap.fromTo(
            background.current,
            { opacity: 0 },
            { opacity: 100, duration: 2.5, ease: "power4.in" }
          );
        }
        gsap.fromTo(
          elements[0].current,
          { opacity: 0, y: -10 },
          { opacity: 100, y: 10, duration: 2.5, ease: "power4.in" }
        );
        gsap.fromTo(
            elements[1].current,
          { opacity: 0, y: -10 },
          { opacity: 100, y: 10, duration: 2.5, ease: "power4.in", delay: 0.5 }
        );
        gsap.fromTo(
            elements[2].current,
          { opacity: 0, y: -10 },
          { opacity: 100, y: 10, duration: 2.5, ease: "power4.in", delay: 1 }
        );
        gsap.fromTo(
            elements[3].current,
          { opacity: 0, y: -10 },
          { opacity: 100, y: 10, duration: 2.5, ease: "power4.in", delay: 1.5 }
        );
      };
    
      useEffect(() => {
        handleAnimate();
      }, []);
};

export default useAnimateMenu;