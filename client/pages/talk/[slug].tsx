import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ReactPlayer from "react-player";

import Layout from "@/components/layout";
import ContactFooter from "@/components/contactFooter";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";
import Link from "next/link";
import sanity from "@/lib/sanity";
import { sanityUrlFor } from "@/lib/sanity-image";

interface IProps {
  talk: any;
}

const TalkPage: FC<IProps> = ({ talk }) => {
  const ref = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const socialNetworkRef = useRef(null);

  const { isOpen } = useMenu();
  useBodyScroll(isOpen);
  useBodyScrollLock(isOpen);

  const handleAnimate = () => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 100, ease: "power4.in", duration: 1 }
    );
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0 },
      { opacity: 100, ease: "power4.in", duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0 },
      { opacity: 100, ease: "power4.in", duration: 1, delay: 1 }
    );
    gsap.fromTo(
      teamRef.current,
      { opacity: 0 },
      { opacity: 100, ease: "power4.in", duration: 1, delay: 1.5 }
    );
    gsap.fromTo(
      socialNetworkRef.current,
      { opacity: 0 },
      { opacity: 100, ease: "power4.in", duration: 1, delay: 2 }
    );
  };

  useEffect(() => {
    handleAnimate();
  }, []);

  return (
    <Layout
      title={"Cyriac du Chatenet - Portfolio"}
      description={
        "Cyriac du Chatenet's portfolio of fullstack developer and Ux - Ui designer"
      }
    >
      <div className={'px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-24 py-12 bg-white'} ref={ref}>
        <div className={'pt-12 pb-6'}>
          <h1 className={'font-secondary uppercase text-blue text-6xl sm:text-6xl xl:text-8xl'} ref={titleRef}>
            {talk.subtitle}
          </h1>
          <p className={''} ref={descriptionRef}>
            {talk.title}
          </p>
        </div>
        <div className={''}>
          <ReactPlayer
            url={talk.video_link}
            width={"100%"}
          />
          <div className={'my-8 flex flex-col lg:flex-row'}>
            <div className={'flex flex-col items-center py-8 lg:w-1/3'} ref={aboutRef}>
              <h3 className={'py-1 px-20 border-solid border-black border-x border-y rounded-2xl uppercase'}>About</h3>
              <p className={'pt-4 pl-4 text-base xl:text-sm'}>
                {talk.description}
              </p>
            </div>
            <div className={'flex flex-col items-center py-8 lg:w-1/3'} ref={teamRef}>
              <h3 className={'py-1 px-20 border-solid border-black border-x border-y rounded-2xl uppercase'}>Team</h3>
              <ul className={'pt-4 w-full flex flex-col md:flex-row items-center justify-around flex-wrap'}>
                {talk.persons.map((person: any) => (
                  <li key={person._id}>
                    <a href={person.linkedin} target="__blank">
                      <Image src={sanityUrlFor(person.image.asset._ref).url()} alt={person.name} width={60} height={0} className={'rounded-full'}  priority />
                      <p>{person.name}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={'flex flex-col items-center py-8 lg:w-1/3'} ref={socialNetworkRef}>
              <h3 className={'py-1 px-10 border-solid border-black border-x border-y rounded-2xl uppercase'}>Social Networks</h3>
              <ul className={'pt-4 w-full flex flex-col md:flex-row items-center justify-around flex-wrap'}>
                <li className={''}>
                <a href={talk.youtube} target={"_blank"} className={'py-2'} rel="noreferrer">Youtube</a>
                </li>
                <li className={''}>
                <a href={talk.linkedin} target={"_blank"} className={'py-2'} rel="noreferrer">Linkedin</a>
                </li>
                <li className={''}>
                <a href={talk.website} target={"_blank"} className={'py-2'} rel="noreferrer">Website</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ContactFooter />
    </Layout>
  );
};

export default TalkPage;

const projectsQuery = `*[_type == "talk"] { slug { current } }`;

const singleprojectQuery = `*[_type == "talk" && slug.current == $slug] {
	_id,
	title,
  subtitle,
	slug,
	thumbnail,
  description,
  video_link,
  linkedin,
  youtube,
  website,
  "persons": persons[]->
}[0]
`;

export const getStaticPaths = async () => {
  // Get the paths we want to pre-render based on persons
  const talks = await sanity.fetch(projectsQuery);
  const paths = talks.map((talk: { slug: { current: any } }) => ({
    params: { slug: talk.slug.current },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
export const getStaticProps = async ({ params }: any) => {
  const talk = await sanity.fetch(singleprojectQuery, { slug: params.slug });
  return { props: { talk } };
};