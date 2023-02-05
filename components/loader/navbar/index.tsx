import { FC, useEffect, useState } from "react";

const LoaderNavbar: FC = () => {
  const [dateNow, setDateNow] = useState("");

  const handleFormatDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    const day = date.getDate();

    if (month > 12) {
      month = 1;
    }
    setDateNow(`${day}/${month}/${year}`);
  };

  useEffect(() => {
    handleFormatDate();
  }, []);

  return (
    <div className={"w-full h-20 flex justify-center sm:justify-start items-center px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-24 py-8"}>
      <div className={""}></div>
      <p className={""}>Last update : {dateNow}</p>
    </div>
  );
};

export default LoaderNavbar;
