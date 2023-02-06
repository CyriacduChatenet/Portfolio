import { FC } from "react";
import gsap from 'gsap';
import background from '../../assets/images/background.jpg'

const ContactFooter: FC = () => {
  const date = new Date();

  const handleEnterAnimate = () => {
    gsap.fromTo('#drop',{x:-40}, {x:0, duration: 1, delay:0.2});
    gsap.fromTo('#email',{x:40}, {x:0, duration: 1, delay:0.2});
  };

  return (
    <div className={'h-96 flex flex-col justify-around items-center rounded-lg w-full'} style={{backgroundImage: `url('${background})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <div className={''}>
        <h3
          className={''}
          onMouseEnter={() => handleEnterAnimate()}
          onClick={() =>
            (parent.location = "mailto:cyriacduchatenet@icloud.com")
          }
        >
          <p id="drop" className={'text-6xl md:text-7xl py-8'}> DROP ME</p>
          <span id="email" className={'font-secondary text-6xl md:text-7xl'}>AN EMAIL</span>
        </h3>
      </div>
      <footer className={'flex flex-col md:w-full'}>
        <ul className={'flex justify-around items-center pb-8 uppercase'}>
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
        <div className={'flex justify-center items-center'}>
        <p className={''}>
          © {date.getFullYear()} Cyriac du Chatenet, &nbsp; all right reserved
        </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactFooter;
