import gsap from "gsap";
import { MutableRefObject } from "react";

const useAnimateMenu = (targetState: boolean, element: MutableRefObject<null>) => {
    const handleAnimateOpen = () => {
        gsap.fromTo(element.current, {height: 275}, {height: 1000, duration: 2})
    };

    const handleAnimateClose = () => {
        gsap.fromTo(element.current, {height: 1000}, {height: 275, duration: 2})
    };
    
    if(targetState === true) {
        handleAnimateOpen();
    } else {
        handleAnimateClose();
    }
};

export default useAnimateMenu;