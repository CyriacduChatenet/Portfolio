import { FC } from "react";

import styles from '@/components/contact/content/style.module.scss';

const ContactContent: FC = () => {
    return (
        <div className={styles.content}>
            <ul className={styles.socialNetworks}>
                <li className={styles.socialNetwork}>
                    <a href={''}>Email: cyriacduchatenet@icloud.com </a>
                </li>
                <li className={styles.socialNetwork}>
                    <a href={''}>LinkedIn : Cyriac Descubes du Chatenet  </a>
                </li>
                <li className={styles.socialNetwork}>
                    <a href={''}>Github : @CyriacduChatenet </a>
                </li>
                <li className={styles.socialNetwork}>
                    <a href={''}>Behance : Cyriac Descubes du Chatenet  </a>
                </li>
            </ul>
            <img src="https://avatars.githubusercontent.com/u/83903574?v=4" alt="" className={styles.profilePicture} />
        </div>
    );
};

export default ContactContent;

