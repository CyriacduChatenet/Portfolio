import { FC } from "react";

import styles from '@/components/talks/easterEggModal/style.module.scss';


const EasterEggModal: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.easterModalTop}>
                <p>{'>'} Press escape key to close</p>
            </div>
            <div className={styles.easterModalMiddle}>
                <img src='https://media.licdn.com/dms/image/D4E0BAQE-mSca_VfB9g/company-logo_200_200/0/1667386648888?e=1678924800&v=beta&t=jsJUnoQsaiSjfK1228p5O2OrgnlP0VZh4jnHXSg4b7U' alt="" className={styles.CTRLUPlogo} />
                <p className={styles.slogan}>Vous avez trouvé un racccourci !</p>
            </div>
            <div className={styles.easterModalBottom}>
                <img src="https://raw.githubusercontent.com/gist/brudnak/aba00c9a1c92d226f68e8ad8ba1e0a40/raw/e1e4a92f6072d15014f19aa8903d24a1ac0c41a4/nyan-cat.gif" alt="" className={styles.nyanCat} />
                <a href="https://www.ctrlup.io/" target={'_blank'} className={styles.ctrlupLink} rel="noreferrer">Ctrl up.io</a>
            </div>
        </div>
    );
};

export default EasterEggModal;