import { FC, useEffect, useState } from "react";

import styles from "@/components/baselineFooter/style.module.scss";
import WakatimeService from "@/services/wakatime.service";
import { HOUR } from "@/constants";


interface IProps {
  displayTalks : boolean;
};


const BaselineFooter: FC<IProps> = ({ displayTalks }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  let count = 0;

  const wakatimeService = new WakatimeService();

  if (isLoading) {
    data.map((day: any) => {
      count += (day.total / HOUR);
      return count;
    })
  }

  useEffect(() => {
    wakatimeService.getData(setData, setIsLoading);
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.time}>{Math.round(count)}h of developement this year</p>
      {displayTalks ? <>
        <a href="" className={styles.talksButton} id={styles.mobileLink}>
        My last talk
      </a>
      <div id={styles.desktopLink}>
        <button className={styles.talksButton}>My last talk</button>
        <a href="" className={styles.meetupLink}>
          How design token will change our life as designer / developper ?{" "}
        </a>
      </div>
      </> : null}
    </div>
  );
};

export default BaselineFooter;
