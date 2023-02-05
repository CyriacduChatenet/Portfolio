import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import ContactFooter from "@/components/contactFooter";
import Layout from "@/components/layout";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const [skills, setSkills] = useState([
    {
      name: "React & React Native",
      url: "https://reactjs.org/",
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Angular",
      url: "https://angular.io/",
    },
    {
      name: "NestJS",
      url: "https://nestjs.com/",
    },
    {
      name: "Ux - Ui design",
    },
    {
      name: "Illustration",
    },
    {
      name: "Photography",
    },
    {
      name: "Video montage",
    },
    {
      name: "Web marketing",
    },
    {
      name: "Marketing",
    },
    {
      name: "SEO",
    },
  ]);

  const ref = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const nameRef = useRef(null);
  const contentRef = useRef(null);

  const skillsTitleRef = useRef(null);
  const skillRef = useRef(null);

  const { isOpen } = useMenu();

  useBodyScroll(isOpen);
  useBodyScrollLock(isOpen);

  const handleTextAnimate = () => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 6, delay: 1, ease: "power4.out" }
    );
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 6, delay: 1.5, ease: "power4.out" }
    );
    gsap.fromTo(
      nameRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 6, delay: 2, ease: "power4.out" }
    );
    gsap.fromTo(
      contentRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 6, delay: 2.5, ease: "power4.out" }
    );
  };

  const handleScrollAnimate = () => {
    gsap.to(skillsTitleRef.current, { opacity: 100, ease: 'power4.in', duration:2, scrollTrigger: {
      trigger: skillsTitleRef.current,
      scrub: 0.5,
      markers: false
    } });

    gsap.to('#lang-0', { opacity: 100, ease: 'power4.in', duration:2, scrollTrigger: {
      trigger: '#lang-0',
      scrub: 0.5,
      markers: false
    } });
    
    gsap.to('#lang-1', { opacity: 100, ease: 'power4.in', duration:2, scrollTrigger: {
      trigger: '#lang-1',
      scrub: 0.5,
      markers: false
    } });

    gsap.to('#lang-2', { opacity: 100, ease: 'power4.in', duration:2, scrollTrigger: {
      trigger: '#lang-2',
      scrub: 0.5,
      markers: false
    } });

    gsap.to('#lang-3', { opacity: 100, ease: 'power4.in', duration:2, scrollTrigger: {
      trigger: '#lang-3',
      scrub: 0.5,
      markers: false
    } });

    gsap.to('#lang-4', { opacity: 100, ease: 'power4.in', duration:2, scrollTrigger: {
      trigger: '#lang-4',
      scrub: 0.5,
      markers: false
    } });

    gsap.to('#lang-5', { opacity: 100, ease: 'power4.in', duration:2, scrollTrigger: {
      trigger: '#lang-5',
      scrub: 0.5,
      markers: false
    } });

    gsap.to('#lang-6', { opacity: 100, ease: 'power4.in', duration:2, scrollTrigger: {
      trigger: '#lang-6',
      scrub: 0.5,
      markers: false
    } });

    gsap.to('#lang-7', { opacity: 100, ease: 'power4.in', duration:2, scrollTrigger: {
      trigger: '#lang-7',
      scrub: 0.5,
      markers: false
    } });

    gsap.to('#lang-8', { opacity: 100, ease: 'power4.in', duration:2, scrollTrigger: {
      trigger: '#lang-8',
      scrub: 0.5,
      markers: false
    } });

    gsap.to('#lang-9', { opacity: 100, ease: 'power4.in', duration:2, scrollTrigger: {
      trigger: '#lang-9',
      scrub: 0.5,
      markers: false
    } });

    gsap.to('#lang-10', { opacity: 100, ease: 'power4.in', duration:2, scrollTrigger: {
      trigger: '#lang-10',
      scrub: 0.5,
      markers: false
    } });
  };

  useEffect(() => {
    handleTextAnimate();
    handleScrollAnimate();
  }, []);

  return (
    <div className={'px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-24 py-8'}>
    <Layout
      title={"Cyriac du Chatenet - Portfolio"}
      description={
        "Cyriac du Chatenet's portfolio of fullstack developer and Ux - Ui designer"
      }
    >
      <main className={''} ref={ref}>
        <div className={''}>
          <h1 className={''} ref={titleRef}>
            About me
          </h1>
          <p className={''} ref={descriptionRef}>
            I’m self-taugh creative developer and Ux -Ui designer
          </p>
        </div>
        <div className={''}>
          <div className={''}>
            <h2 className={''} ref={nameRef}>
              Cyriac du Chatenet
            </h2>
            <p className={''} ref={contentRef}>
              Hello, i’m french fullstack developper and Ux - Ui designer. I
              have started to create a lot of wireframes since 2019 and create
              frontend part of website since 2020.
              <br /> Passionate by computer science since i was kid, I work in a
              lot of project at ESD Bordeaux during my cursus of digital project
              manager. <br /> <br />
              I work in a lot of project in photography, video montage, shooting
              film, Ux - Ui design, web developement, illustration. <br />{" "}
              <br />
              Since september 2022, i am in app designer & developer cursus, I’m
              valedictorian in web development. alongside of my cursus I started
              to learn mobile app developement in React Native. <br /> <br />
              During my cursus i was intership in web developement at Legrand
              beetween february and april 2021. I was app UAT tester. <br />{" "}
              <br />
              Between may and august 2022 i was internship in web developement,
              I have helped to migrate application between AngularJS and Angular
              14. <br /> <br />
              Finally since september 2022 i’m in apprenticeship in web and
              mobile developement at Dotmind. I create bookshelf app in React
              and React Native.
            </p>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/83903574?v=4"
            alt=""
            className={''}
          />
        </div>
        <div className={''}>
          <h2 className={''} ref={skillsTitleRef}>
            Skills
          </h2>
          <ul className={''}>
            {skills.map((skill, index) => (
              <li className={''} key={skill.name} id={`lang-${index}`}>
                <a
                  href={skill.url}
                  target={"_blank"}
                  className={''}
                  rel="noreferrer"
                >
                  {skill.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <ContactFooter />
    </Layout>
    </div>
  );
};

export default AboutPage;
