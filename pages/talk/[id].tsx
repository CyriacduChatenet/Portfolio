import { useEffect, useRef } from "react";
import gsap from "gsap";
import ReactPlayer from "react-player";

import Layout from "@/components/layout";
import ContactFooter from "@/components/contactFooter";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";

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
      <div className={''} ref={ref}>
        <div className={''}>
          <h1 className={''} ref={titleRef}>
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
          <div className={''}>
            <div className={''} ref={aboutRef}>
              <h3 className={''}>About</h3>
              <p className={''}>
                I present my first Meetup at Ctrl Up event named Tech CTRL.{" "}
                <br /> <br />
                This meetup is about design tokens. It’s transversal subject
                between developer and Ux - Ui designer. the goal is to optimise
                application creation and production.
              </p>
            </div>
            <div className={''} ref={teamRef}>
              <h3 className={''}>Team</h3>
              <div className={''}>
                <div className={''}>
                  <img
                    src="https://avatars.githubusercontent.com/u/83903574?v=4"
                    alt=""
                    className={''}
                  />
                </div>
                <div className={''}>
                  <img
                    src="https://annuaire.frenchtechbordeaux.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxrT0RBME56WXpOaTA1TkRKbUxUUmxOR010T1RrNU5pMW1OMlExTkdVNVl6Y3hZVFFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--82e5d254293faff41e909bb6be12976715df0c8c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2QzNKbGMybDZaVWtpQ2pFeE16UStCanNHVkRvTWNYVmhiR2wwZVdsTCIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--554d5f8f076be7570d1bb3778f983924169bdcd4/LOGO-CTRL-UP-567p.png"
                    alt=""
                    className={''}
                  />
                </div>
              </div>
            </div>
            <div className={''} ref={socialNetworkRef}>
              <h3 className={''}>Social Networks</h3>
              <ul className={''}>
                <li className={''}>
                  <a
                    href="https://www.youtube.com/@ctrlup"
                    target={"_blank"}
                    rel="noreferrer"
                    className={''}
                  >
                    Youtube
                  </a>
                </li>
                <li className={''}>
                  <a
                    href="https://www.linkedin.com/company/ctrlup/"
                    target={"_blank"}
                    rel="noreferrer"
                    className={''}
                  >
                    Linkedin
                  </a>
                </li>
                <li className={''}>
                  <a
                    href="https://www.ctrlup.io/"
                    target={"_blank"}
                    rel="noreferrer"
                    className={''}
                  >
                    Website
                  </a>
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
