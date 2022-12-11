import { NextComponentType } from "next";

import styles from "@/components/baselineFooter/style.module.scss";
import WakatimeService from "@/services/wakatime.service";
import { useEffect, useState } from "react";

const BaselineFooter: NextComponentType = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const HOUR = 3600;
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
      <a href="" className={styles.talksButton} id={styles.mobileLink}>
        My last talk
      </a>
      <div id={styles.desktopLink}>
        <button className={styles.talksButton}>My last talk</button>
        <a href="" className={styles.meetupLink}>
          How design token will change our life as designer / developper ?{" "}
        </a>
      </div>
    </div>
  );
};

export default BaselineFooter;
