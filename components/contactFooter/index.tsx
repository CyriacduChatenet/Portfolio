import { FC } from "react";
import gsap from 'gsap';

const ContactFooter: FC = () => {
  const date = new Date();

  const handleEnterAnimate = () => {
    gsap.fromTo('#drop',{x:-40}, {x:0, duration: 1, delay:0.2});
    gsap.fromTo('#email',{x:40}, {x:0, duration: 1, delay:0.2});
  };

  return (
    <div className={''}>
      <div className={''}>
        <h3
          className={''}
          onMouseEnter={() => handleEnterAnimate()}
          onClick={() =>
            (parent.location = "mailto:cyriacduchatenet@icloud.com")
          }
        >
          <p id="drop" className={''}> DROP ME</p>
          <span id="email" className={''}>AN EMAIL</span>
        </h3>
      </div>
      <footer className={''}>
        <ul className={''}>
          <li>
            <a
              href={
                "https://www.linkedin.com/in/cyriac-descubes-du-chatenet-4776911b8/"
              }
              target={"_blank"}
              className={''}
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href={"https://github.com/CyriacduChatenet"}
              target={"_blank"}
              className={''}
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href={"https://www.behance.net/cyriacdescube"}
              target={"_blank"}
              className={''}
              rel="noreferrer"
            >
              Behance
            </a>
          </li>
        </ul>
        <p className={''}>
          © {date.getFullYear()} Cyriac du Chatenet, &nbsp; all right reserved
        </p>
      </footer>
    </div>
  );
};

export default ContactFooter;
