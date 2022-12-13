import { FC } from "react";

import styles from '@/components/about/style.module.scss';

const AboutSection: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.line}></div>
            <h1 className={styles.name}>Cyriac du Chatenet</h1>
            <div className={styles.about}>
              <p className={styles.aboutContent}>
                Hello, i’m french fullstack developper and Ux - Ui designer. I
                have started to create a lot of wireframes since 2019 and create
                frontend part of website since 2020. <br/><br/>Passionate by computer
                science since i was kid, I work in a lot of project at ESD
                Bordeaux during my cursus of digital project manager. I work in
                a lot of project in photography, video montage, shooting film,
                Ux - Ui design, web developement, illustration. <br/><br/>Since september
                2022, i am in app designer & developer cursus, I’m valedictorian
                in web development. alongside of my cursus I started to learn
                mobile app developement in React Native.<br/><br/> During my cursus i was
                intership in web developement at Legrand beetween february and
                april 2021. I was app UAT tester.<br/><br/> Between may and august 2022 i
                was internship in web developement, I have helped to migrate
                application between AngularJS and Angular 14.<br/><br/> Finally since
                september 2022 i’m in apprenticeship in web and mobile
                developement at Dotmind. I create bookshelf app in React and
                React Native.
              </p>
              <img src="https://avatars.githubusercontent.com/u/83903574?v=4" alt="" className={styles.profile} />
            </div>
        </div>
    );
};

export default AboutSection;