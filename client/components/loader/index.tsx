import { FC, memo, useEffect, useState } from "react";

import BaselineFooter from "@/components/baselineFooter";
import { useLoader } from "@/contexts/useLoader"
import { useBodyScrollLock } from "@/hooks/useBodyScroll";
import LoaderNavbar from "./navbar";


const Loader: FC = () => {
    const [message, setMessage] = useState('');
    const [lockScroll, setLockScroll] = useState(true);

    const { counter, setCounter } = useLoader();


    useBodyScrollLock(lockScroll);

    const handleChangeDescription = () => {
        if(counter <= 30) {
            setMessage('Skills initialisation...');
        } else if(counter >= 31 && counter <= 80) {
            setMessage('1287839878 mo of creativity')
        } else {
            setMessage('');
        }
    };

    const handleLoading = () => {
        if(counter <= 100) {
            setInterval(() => {
                setCounter(prevCounter => prevCounter += 1);
            }, 500)
        } else {
            setCounter(100);
        }

        handleChangeDescription();
    };

    useEffect(() => {
        handleLoading();
    });

  return (
    <div className={'aboslute z-10 w-screen h-screen flex flex-col justify-between px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-24 pb-8'}>
      <LoaderNavbar />
      <section className={'w-full h-20 flex flex-col items-center justify-center 2xl:pt-20'}>
        <h1 className={'text-8xl md:text-9xl pb-4'}>{counter}%</h1>
        <p className={'text-base pt-4'}>{message}</p>
      </section>
      <div className={''}>
        <BaselineFooter displayTalks={false} />
      </div>
    </div>
  );
};

export default memo(Loader);
