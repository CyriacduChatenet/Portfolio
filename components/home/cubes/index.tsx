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
    <div className={'absolute z-1 w-full md:w-12 h-1/4 md:h-1/4 lg:h-1/3 flex flex-col justify-around right-0 top-64 md:top-68 lg:top-48 xl:top-68'} ref={cubeContainerRef} >
      <div className={'flex items-center justify-around w-full'}>
        <div className={'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue'} id={'cube1'} ref={cube1Ref}></div>
        <div className={'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-12 bg-blue'} id={'cube2'} ref={cube2Ref}></div>
        <div className={'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-10 bg-blue'} id={'cube3'} ref={cube3Ref}></div>
      </div>
      <div className={'flex items-center justify-around w-full'}>
        <div className={'w-12 h-12 sm:w-14 sm:h-144 md:w-16 md:h-16 mb-4 bg-blue'} id={'cube4'} ref={cube4Ref}></div>
        <div className={'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue'} id={'cube5'} ref={cube6Ref}></div>
      </div>
      <div className={'flex items-center justify-around w-full'}>
        <div className={'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 bg-blue'} id={'cube6'} ref={cube5Ref}></div>
      </div>
    </div>
  );
};

export default Cubes;
