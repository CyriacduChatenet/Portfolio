import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import Layout from "@/components/layout";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";
import BottomBanner from "@/components/bottomBanner";
import Image from "next/image";

const ProjectPage = () => {
  const [data, setData] = useState<any>({});
  const [openModal, setOpenModal] = useState(false);

  const { isOpen } = useMenu();

  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);

  useBodyScroll(isOpen);
  useBodyScrollLock(isOpen);

  const handleFetchData = async () => {
    const response = await fetch(`/api/${window.location.pathname}`);
    const json = await response.json();
    setData(json.data);
  };

  const handleAnimate = () => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 100, duration: 3, ease: "power4.in", delay: 1 }
    );
    gsap.fromTo(
      carouselRef.current,
      { opacity: 0 },
      { opacity: 100, duration: 3, ease: "power4.in", delay: 1.5 }
    );
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0 },
      { opacity: 100, duration: 3, ease: "power4.in", delay: 2 }
    );
    gsap.fromTo(
      missionRef.current,
      { opacity: 0 },
      { opacity: 100, duration: 3, ease: "power4.in", delay: 2.5 }
    );
    gsap.fromTo(
      teamRef.current,
      { opacity: 0 },
      { opacity: 100, duration: 3, ease: "power4.in", delay: 3 }
    );
  };

  useEffect(() => {
    handleFetchData();
    handleAnimate();
  }, []);

  return (
    <>
      <Layout
        title={"Cyriac du Chatenet - Portfolio"}
        description={
          "Cyriac du Chatenet's portfolio of fullstack developer and Ux - Ui designer"
        }
      >
        <div
          className={"px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-24 py-12"}
        >
          <div className={"pt-12 pb-6"}>
            <h1
              className={
                "font-secondary uppercase text-blue text-6xl sm:text-6xl xl:text-8xl"
              }
              ref={titleRef}
            >
              {data.title}
            </h1>
          </div>
          <div className={"rounded-lg lg:w-1/2 lg:ml-72 xl:ml-80 2xl:ml-96"} ref={carouselRef}>
            <Image src={data.thumbnail} alt={"project thumbnail"} width={800} height={800} className={'rounded-lg'}/>
          </div>
          <section className={"my-8 flex flex-col lg:flex-row"}>
            <div className={"flex flex-col items-center py-8 lg:w-1/3"} ref={aboutRef}>
              <h2 className={"py-1 px-20 border-solid border-black border-x border-y rounded-2xl uppercase"}>About</h2>
              <div className={"pt-4 pl-4"}>
                <a
                  href={data.website_url}
                  className={"flex items-center"}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span>view website</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4Z"
                    />
                  </svg>
                </a>
                <p className="py-2">Year: {data.year}</p>
                <p className={""}>{data.about}</p>
              </div>
            </div>
            <div className={"flex flex-col items-center lg:w-1/3 py-8"} ref={missionRef}>
              <h2 className={"py-1 px-20 border-solid border-black border-x border-y rounded-2xl uppercase"}>Mission</h2>
              <ul className={"pt-4"}>
                {data.missions?.map((mission: any) => (
                  <li key={mission._id} className="py-2">
                    {mission.name} : {mission.description}
                  </li>
                ))}
              </ul>
            </div>
            <div className={"flex flex-col items-center lg:w-1/3 py-8"} ref={teamRef}>
              <h2 className={"py-1 px-20 border-solid border-black border-x border-y rounded-2xl uppercase"}>Team</h2>
              <ul className={"pt-4 w-full flex flex-col md:flex-row items-center justify-around flex-wrap"}>
                {data.team?.map((user: any) => (
                  <a
                    key={user._id}
                    className={""}
                    onClick={() => setOpenModal(true)}
                    href={
                      user.website === ""
                        ? user.socialNetwork[0]?.link
                        : user.socialNetwork[0]?.link === ""
                        ? user.socialNetwork[1]?.link
                        : user.socialNetwork[2]?.link === ""
                        ? user.socialNetwork[0]?.link
                        : null
                    }
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <li className={"flex flex-col itmes-center justify-center py-2 md:px-4"}>
                      <Image src={user.profile_picture} alt={"profile picture"} width={20} height={20} className={"rounded-full"}/>
                      <span>{user.name}</span>
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          </section>
          <section className={""}>
            {data.images?.map((image: any, index: number) => (
              <Image key={image._id} src={image.source} alt={"project characteristics"} width={2000} height={2000} className={"py-4"}/>
            ))}
          </section>
          {data._id?.length >= 0 ? <BottomBanner label={"Other projects"} />: null}
        </div>
      </Layout>
    </>
  );
};

export default ProjectPage;
