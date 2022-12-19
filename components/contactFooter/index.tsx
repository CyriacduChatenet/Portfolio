import { FC } from 'react';

import styles from '@/components/contactFooter/style.module.scss';


const ContactFooter:FC = () => {
    const date = new Date();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h3 className={styles.title} onClick={() => parent.location = 'mailto:cyriacduchatenet@icloud.com'}>DROP ME <span>AN EMAIL</span></h3>
            </div>
            <footer className={styles.footer}>
                <ul className={styles.socialNetworks}>
                    <li><a href={'https://www.linkedin.com/in/cyriac-descubes-du-chatenet-4776911b8/'} target={'_blank'} className={styles.socialNetwork} rel="noreferrer">Linkedin</a></li>
                    <li><a href={'https://github.com/CyriacduChatenet'} target={'_blank'} className={styles.socialNetwork} rel="noreferrer">Github</a></li>
                    <li><a href={'https://www.behance.net/cyriacdescube'} target={'_blank'} className={styles.socialNetwork} rel="noreferrer">Behance</a></li>
                </ul>
                <p className={styles.copyright}>© {date.getFullYear()} Cyriac du Chatenet, &nbsp; all right reserved</p>
            </footer>
        </div>
    );
};

export default ContactFooter;