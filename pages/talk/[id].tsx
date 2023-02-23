import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ReactPlayer from "react-player";

import Layout from "@/components/layout";
import ContactFooter from "@/components/contactFooter";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";
import Link from "next/link";

const TalkPage = () => {
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
            Design tokens
          </h1>
          <p className={''} ref={descriptionRef}>
            Tech Ctrl - How design token will change our life as designer /
            developer ?
          </p>
        </div>
        <div className={''}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=r_JTTswNdIs"
            width={"100%"}
          />
          <div className={'my-8 flex flex-col lg:flex-row'}>
            <div className={'flex flex-col items-center py-8 lg:w-1/3'} ref={aboutRef}>
              <h3 className={'py-1 px-20 border-solid border-black border-x border-y rounded-2xl uppercase'}>About</h3>
              <p className={'pt-4 pl-4 text-base xl:text-sm'}>
                I present my first Meetup at Ctrl Up event named Tech CTRL.{" "}
                <br /> <br />
                This meetup is about design tokens. It’s transversal subject
                between developer and Ux - Ui designer. the goal is to optimise
                application creation and production.
              </p>
            </div>
            <div className={'flex flex-col items-center py-8 lg:w-1/3'} ref={teamRef}>
              <h3 className={'py-1 px-20 border-solid border-black border-x border-y rounded-2xl uppercase'}>Team</h3>
              <div className={'pt-4 w-full flex flex-col md:flex-row items-center justify-around flex-wrap'}>
                <div className={''}>
                  <Image src={"https://avatars.githubusercontent.com/u/83903574?v=4"} alt={""} width={40} height={40} className={'rounded-full'}/>
                </div>
                <div className={''}>
                <Image src={"https://annuaire.frenchtechbordeaux.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxrT0RBME56WXpOaTA1TkRKbUxUUmxOR010T1RrNU5pMW1OMlExTkdVNVl6Y3hZVFFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--82e5d254293faff41e909bb6be12976715df0c8c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2QzNKbGMybDZaVWtpQ2pFeE16UStCanNHVkRvTWNYVmhiR2wwZVdsTCIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--554d5f8f076be7570d1bb3778f983924169bdcd4/LOGO-CTRL-UP-567p.png"} alt={"logo ctrl up"} width={60} height={60}  className={'rounded-full'}/>
                </div>
              </div>
            </div>
            <div className={'flex flex-col items-center py-8 lg:w-1/3'} ref={socialNetworkRef}>
              <h3 className={'py-1 px-10 border-solid border-black border-x border-y rounded-2xl uppercase'}>Social Networks</h3>
              <ul className={'pt-4 w-full flex flex-col md:flex-row items-center justify-around flex-wrap'}>
                <li className={''}>
                <Link href={'https://www.youtube.com/@ctrlup'} passHref={true} target={"_blank"} className={'py-2'}>Youtube</Link>
                </li>
                <li className={''}>
                <Link href={'https://www.linkedin.com/company/ctrlup/'} passHref={true} target={"_blank"} className={'py-2'}>Linkedin</Link>
                </li>
                <li className={''}>
                <Link href={'https://www.ctrlup.io/'} passHref={true} target={"_blank"} className={'py-2'}>Website</Link>
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
