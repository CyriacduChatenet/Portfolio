import { FC, useEffect, useRef } from "react";
import gsap from "gsap";

const Cubes: FC = () => {
  const cubeContainerRef = useRef(null);
  const cube1Ref = useRef(null);
  const cube2Ref = useRef(null);
  const cube3Ref = useRef(null);
  const cube4Ref = useRef(null);
  const cube5Ref = useRef(null);
  const cube6Ref = useRef(null);

  const handleAnimate = () => {
    gsap.fromTo(cubeContainerRef.current, {rotation: 0}, { rotation: 360, duration: 4, delay: 4});
    gsap.fromTo(cubeContainerRef.current, {opacity: 0}, { opacity: 100, ease: 'power4.in', duration: 4, delay: 2});

    gsap.fromTo(cubeContainerRef.current, {width: '100%'}, { width: '100%', duration: 5, delay:2});
    
    gsap.fromTo(cube1Ref.current, {rotation: 0}, { rotation: -360, duration: 1, delay: 2});
    gsap.fromTo(cube2Ref.current, {rotation: 0}, { rotation: -360, duration: 1, delay: 2});
    gsap.fromTo(cube3Ref.current, {rotation: 0}, { rotation: -360, duration: 1, delay: 2});
    gsap.fromTo(cube4Ref.current, {rotation: 0}, { rotation: -360, duration: 1, delay: 2});
    gsap.fromTo(cube5Ref.current, {rotation: 0}, { rotation: -360, duration: 1, delay: 2});
    gsap.fromTo(cube6Ref.current, {rotation: 0}, { rotation: -360, duration: 1, delay: 2});
  };

  useEffect(() => {
    handleAnimate();
  }, [])
  return (
    <div className={'absolute z-0 w-full md:w-12 h-1/6 md:h-1/4 lg:h-1/6 flex flex-col justify-around right-0 top-80 md:top-80 lg:top-96 xl:top-96 2xl:mt-12'} ref={cubeContainerRef} >
      <div className={'z-0 flex items-center justify-around w-full mb-6'}>
        <div className={'w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22'} id={'cube1'} ref={cube1Ref}></div>
        <div className={'w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22 mb-8'} id={'cube2'} ref={cube2Ref}></div>
        <div className={'w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22'} id={'cube3'} ref={cube3Ref}></div>
      </div>
      <div className={'z-1 flex items-center justify-around w-full mt-8'}>
        <div className={'w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22'} id={'cube4'} ref={cube4Ref}></div>
        <div className={'w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22'} id={'cube5'} ref={cube6Ref}></div>
      </div>
      <div className={'z-2 flex items-center justify-around w-full mb-16 lg:mb-32'}>
        <div className={'w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22 md:mb-16'} id={'cube6'} ref={cube5Ref}></div>
      </div>
    </div>
  );
};

export default Cubes;
