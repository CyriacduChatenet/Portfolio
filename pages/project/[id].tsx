import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import Layout from "@/components/layout";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";
import BottomBanner from "@/components/bottomBanner";

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
      <div className={'px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-24 py-8'}>
        <Layout
          title={"Cyriac du Chatenet - Portfolio"}
          description={
            "Cyriac du Chatenet's portfolio of fullstack developer and Ux - Ui designer"
          }
        >
          <div className={''}>
            <div className={''}>
              <h1 className={''} ref={titleRef}>
                {data.title}
              </h1>
            </div>
            <div className={''} ref={carouselRef}>
              <img src={data.thumbnail} alt="" className={''} />
            </div>
            <section className={''}>
              <div className={''} ref={aboutRef}>
                <h2 className={''}>About</h2>
                <div className={''}>
                  <a
                    href={data.website_url}
                    className={''}
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
                  <p>Year: {data.year}</p>
                  <p className={''}>{data.about}</p>
                </div>
              </div>
              <div className={''} ref={missionRef}>
                <h2 className={''}>Mission</h2>
                <ul className={''}>
                  {data.missions?.map((mission: any) => (
                    <li key={mission._id}>
                      {mission.name} : {mission.description}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={''} ref={teamRef}>
                <ul className={''}>
                  {data.team?.map((user: any) => (
                    <a
                      key={user._id}
                      className={''}
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
                      <li className={''}>
                        <img
                          src={user.profile_picture}
                          alt=""
                          className={''}
                        />
                        <span>{user.name}</span>
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
            </section>
            <section className={''}>
              {data.images?.map((image: any, index: number) => (
                <img
                  key={image._id}
                  src={image.source}
                  alt={""}
                  className={''}
                />
              ))}
            </section>
            <BottomBanner label={"Other projects"} />
          </div>
        </Layout>
      </div>
    </>
  );
};

export default ProjectPage;
