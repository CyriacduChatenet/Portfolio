import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import ContactFooter from "@/components/contactFooter";
import Layout from "@/components/layout";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";
import sanity from "@/lib/sanity";
import { sanityUrlFor } from "@/lib/sanity-image";

gsap.registerPlugin(ScrollTrigger);

interface IProps {
  about: any [];
}

const AboutPage: FC<IProps> = ({ about }) => {
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
    <>
    <Layout
      title={"Cyriac du Chatenet - Portfolio"}
      description={
        "Cyriac du Chatenet's portfolio of fullstack developer and Ux - Ui designer"
      }
    >
      {about.map((about) => (
              <main key={about._id} className={'px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-24 py-12 bg-white text-sm'} ref={ref}>
              <div className={'pt-20 pb-10'}>
                <h1 className={'font-secondary uppercase text-blue text-6xl sm:text-6xl xl:text-8xl'} ref={titleRef}>
                  About me
                </h1>
                <p className={'text-sm lg:text-base'} ref={descriptionRef}>
                  {about.baseline}
                </p>
              </div>
              <div className={'flex flex-col-reverse xl:flex-row xl:items-center xl:justify-between'}>
                <div className={'xl:w-1/2'}>
                  <h2 className={'pb-4 font-bold text-lg'} ref={nameRef}>
                    {about.title}
                  </h2>
                  <p className={'pb-10'} ref={contentRef}>
                    {about.description}
                  </p>
                </div>
                <Image src={sanityUrlFor(about.thumbnail.asset._ref).url()} width={500} height={500} alt={'my profile'} className={'pb-10'}/>
              </div>
              <div className={''}>
                <h2 className={'font-secondary uppercase text-blue text-7xl xl:text-8xl md:pt-12'} ref={skillsTitleRef}>
                  Skills
                </h2>
                <ul className={'py-4 flex flex-col sm:flex-row flex-wrap justify-between lg:justify-around lg:px-20'}>
                  {about.skills.map((skill: any, index: number) => (
                    <li className={'py-2 sm:px-8'} key={skill.name} id={`lang-${index}`}>
                      <a
                        href={skill.link}
                        target={"_blank"}
                        className={'uppercase'}
                        rel="noreferrer"
                      >
                        {skill.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </main>
      ))}
      <ContactFooter />
    </Layout>
    </>
  );
};

export default AboutPage;

const aboutQuery = `*[_type == "about"] {
	_id,
	title,
  baseline,
  description,
	thumbnail,
  "skills": skills[]->
  }`;

export const getStaticProps = async () => {
  const about = await sanity.fetch(aboutQuery);
  return {
    props: { about },
  };
};