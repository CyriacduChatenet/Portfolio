import { FC, memo, useEffect, useState } from "react";
import Link from "next/link";

import WakatimeService from "@/services/wakatime.service";
import { HOUR } from "@/constants";

interface IProps {
  displayTalks: boolean;
}

const BaselineFooter: FC<IProps> = ({ displayTalks }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let count = 0;

  const wakatimeService = new WakatimeService();

  if (isLoading) {
    data.map((day: any) => {
      count += day.total / HOUR;
      return count;
    });
  }

  useEffect(() => {
    wakatimeService.getData(setData, setIsLoading);
  }, []);

  return (
    <div className={"py-4 w-full h-28 sm:h-6 md:h-6 lg:h-6 xl:h-6 2xl:h-6 flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center justify-between sm:mt-48 lg:mt-48 xl:mt-60 2xl:mt-72 mt-20"}>
      <p className={"text-sm sm:text-base lg:text-base xl:text-base 2xl:text-base"}>
        {Math.round(count)}h of developement this year
      </p>
      {displayTalks ? (
        <>
          <div className={""}>
            <Link
              href={"/talk/design-tokens"}
              className={
                "px-6 py-4 text-sm sm:text-base lg:text-base xl:text-base 2xl:text-base border-solid border-black border-2 rounded-3xl"
              }
            >
              My last talk
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default memo(BaselineFooter);
