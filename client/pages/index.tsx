import { useEffect, useRef } from "react";
import gsap from "gsap";

import BaselineFooter from "@/components/baselineFooter";
import Layout from "@/components/layout";
import Loader from "@/components/loader";
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
      { delay: 4, duration: 3, ease: "power4.inOut", opacity: 100, x: 0 }
    );
    gsap.fromTo(
      developerTitle.current,
      { opacity: 0, x: -20 },
      { delay: 4, duration: 3, ease: "power4.inOut", opacity: 100, x: 0 }
    );
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    handleAnimate();
  }, []);

  return (
    <>
      {isLoading === false ? <Loader /> : null}
      <Layout
        title={"Cyriac du Chatenet - Portfolio"}
        description={
          "Cyriac du Chatenet's portfolio of fullstack developer and Ux - Ui designer"
        }
      >
        <div
          className={"px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-24 py-8"}
        >
          <main
            className={"flex flex-col justify-between w-full h-[85vh]"}
          >
            <div
              className={"flex flex-col item-center justify-center h-1/2 mt-40"}
            >
              <div
                className={
                  "flex flex-col items-center justify-around w-full h-60 sm:h-80 lg:h-80 xl:h-full py-10 2xl:pt-20"
                }
              >
                <p
                  className={
                    "text-6xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl uppercase 2xl:mb-6"
                  }
                  ref={creativeTitle}
                >
                  Creative
                </p>
                <p
                  className={
                    "font-secondary text-6xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl uppercase 2xl:mt-6"
                  }
                  ref={developerTitle}
                >
                  Developer
                </p>
              </div>
              <p
                className={"text-center sm:text-lg md:text-lg"}
                ref={description}
              >
                Ux - Ui designer X developer fullstack
              </p>
            </div>
            <BaselineFooter displayTalks={true} />
          </main>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
