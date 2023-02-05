import { useEffect, useRef } from "react";
import gsap from "gsap";

import BaselineFooter from "@/components/baselineFooter";
import Layout from "@/components/layout";
import Loader from "@/components/loader";
import Cubes from "@/components/home/cubes";
import { useLoader } from "@/contexts/useLoader";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";

const HomePage = () => {
  const creativeTitle = useRef(null);
  const developerTitle = useRef(null);
  const description = useRef(null);

  const { isOpen } = useMenu();
  const { isLoading } = useLoader();

  useBodyScroll(isOpen);
  useBodyScrollLock(isOpen);

  const handleAnimate = () => {
    gsap.fromTo(
      creativeTitle.current,
      { opacity: 0, x: -20 },
      { delay: 4, duration: 6, ease: "power4.inOut", opacity: 100, x: 0 }
    );
    gsap.fromTo(
      developerTitle.current,
      { opacity: 0, x: -20 },
      { delay: 4, duration: 6, ease: "power4.inOut", opacity: 100, x: 0 }
    );
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    // handleAnimate();
  }, []);

  return (
    <>
      {isLoading === false ? <Loader /> : null}
      <div className={'px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-24 py-8'}>
        <Layout
          title={"Cyriac du Chatenet - Portfolio"}
          description={
            "Cyriac du Chatenet's portfolio of fullstack developer and Ux - Ui designer"
          }
        >
            <Cubes />
            <main className={'flex flex-col justify-between w-full'} style={{height: '80vh', zIndex: 1}}>
              <div className={'flex flex-col item-center justify-center h-1/2 mt-24'}>
              <div className={'flex flex-col items-center justify-around w-full h-60 py-10'}>
                  <p className={'text-6xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-8xl  2xl:text-9xl uppercase'} ref={creativeTitle}>
                    Creative
                  </p>
                  <p className={'font-secondary text-6xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl uppercase'} ref={developerTitle}>
                    Developer
                  </p>
                </div>
                <p className={'text-center sm:text-lg md:text-lg'} ref={description}>
                  Ux - Ui designer X developer fullstack
                </p>
              </div>
              <BaselineFooter displayTalks={true} />
            </main>
        </Layout>
      </div>
    </>
  );
};

export default HomePage;
