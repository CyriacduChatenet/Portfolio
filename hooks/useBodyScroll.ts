import { useEffect } from "react";


export const useBodyScroll = (targetState: boolean) => {
    useEffect(() => {
        if(targetState === false ) {
            document.body.style.overflow = 'scroll';
        }
    }, [targetState]);
};

export const useBodyScrollLock = (targetState: boolean) => {
    useEffect(() => {
        if(targetState === true ) {
            document.body.style.overflow = 'hidden';
        }
    }, [targetState]);
};