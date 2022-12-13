import { FC, useEffect, useState } from "react";
import Link from "next/link";

import styles from '@/components/talks/about/style.module.scss';
import useEasterEgg from "@/contexts/displayEasterEgg";


const TalksAboutSection: FC = () => {
    const { setDisplayEasterEgg } = useEasterEgg();

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if(e.key === 'Escape') {
                setDisplayEasterEgg(false);
            }
        });
    })
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h3 className={styles.subtitle}>About</h3>
                <p className={styles.content}>I present my first Meetup at Ctrl Up event named Tech CTRL. <br/><br/>
                    This meetup is about design tokens. It’s transversal subject between developer and Ux - Ui designer. the goal is to optimise application creation and production.</p>
            </section>
            <section className={styles.section}>
            <h3 className={styles.subtitle}>Team</h3>
            <div className={styles.images}>
                <img src="https://avatars.githubusercontent.com/u/83903574?v=4" alt="" className={styles.logo} />
                <img onClick={() => setDisplayEasterEgg(true)} src="https://annuaire.frenchtechbordeaux.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxrT0RBME56WXpOaTA1TkRKbUxUUmxOR010T1RrNU5pMW1OMlExTkdVNVl6Y3hZVFFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--82e5d254293faff41e909bb6be12976715df0c8c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2QzNKbGMybDZaVWtpQ2pFd01qUjRCanNHVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--3c83fddb20b7eaccd2233989affaa7ecacf5f3b8/LOGO-CTRL-UP-567p.png" alt="" className={styles.logo} />
            </div>
            </section>
            <section className={styles.section}>
            <h3 className={styles.subtitle}>Social networks</h3>
            <ul className={styles.socialNetworks}>
                <li className={styles.socialNetwork}>
                    <Link href={''} className={styles.networkLink}>Youtube</Link>
                </li>
                <li className={styles.socialNetwork}>
                    <Link  href={'https://www.linkedin.com/company/ctrlup/'} className={styles.networkLink}>LinkedIn</Link>
                </li>
                <li className={styles.socialNetwork}>
                    <Link  href={''} className={styles.networkLink}>Website</Link>
                </li>
            </ul>
            </section>
        </div>
    );
};

export default TalksAboutSection;