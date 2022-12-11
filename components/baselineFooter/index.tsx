import { NextComponentType } from 'next';

import styles from '@/components/baselineFooter/style.module.scss';

const BaselineFooter: NextComponentType = () => {
    return (
        <div className={styles.container}>
        <p className={styles.time}>765h of developement</p>
        <a href="" className={styles.talksButton} id={styles.mobileLink}>
          My last talk
        </a>
        <div id={styles.desktopLink}>
          <button className={styles.talksButton}>My last talk</button>
          <a href="" className={styles.meetupLink}>How design token will change our life as designer / developper ?  </a>
        </div>
      </div>
    );
};

export default BaselineFooter;