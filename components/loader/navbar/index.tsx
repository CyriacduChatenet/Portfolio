import { FC, useEffect, useState } from "react";

const LoaderNavbar: FC = () => {
    const [dateNow, setDateNow] = useState('');

    const handleFormatDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        const day = date.getDate();
    
        if(month > 12) {
          month = 1
        };
        setDateNow(`${day}/${month}/${year}`)
      }

      useEffect(() => {
        handleFormatDate();
      }, []);

    return (
        <div className={''}>
          <p className={''}>Last update : {dateNow}</p>
          <div className={''}></div>
        </div>
    );
};

export default LoaderNavbar