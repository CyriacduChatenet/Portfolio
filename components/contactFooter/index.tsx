import { FC, useEffect } from "react";
import gsap from 'gsap';

import styles from "@/components/contactFooter/style.module.scss";

const ContactFooter: FC = () => {
  const date = new Date();

  const handleEnterAnimate = () => {
    gsap.fromTo('#drop',{x:-40}, {x:0, duration: 1, delay:0.2});
    gsap.fromTo('#email',{x:40}, {x:0, duration: 1, delay:0.2});
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3
          className={styles.title}
          onMouseEnter={() => handleEnterAnimate()}
          onClick={() =>
            (parent.location = "mailto:cyriacduchatenet@icloud.com")
          }
        >
          <p id="drop" className={styles.drop}> DROP ME</p>
          <span id="email" className={styles.email}>AN EMAIL</span>
        </h3>
      </div>
      <footer className={styles.footer}>
        <ul className={styles.socialNetworks}>
          <li>
            <a
              href={
                "https://www.linkedin.com/in/cyriac-descubes-du-chatenet-4776911b8/"
              }
              target={"_blank"}
              className={styles.socialNetwork}
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href={"https://github.com/CyriacduChatenet"}
              target={"_blank"}
              className={styles.socialNetwork}
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href={"https://www.behance.net/cyriacdescube"}
              target={"_blank"}
              className={styles.socialNetwork}
              rel="noreferrer"
            >
              Behance
            </a>
          </li>
        </ul>
        <p className={styles.copyright}>
          © {date.getFullYear()} Cyriac du Chatenet, &nbsp; all right reserved
        </p>
      </footer>
    </div>
  );
};

export default ContactFooter;
