import { FC } from "react";
import Link from "next/link";


interface IProps {
    label: string;
}


const BottomBanner: FC<IProps> = ({label}) => {
    return (
        <section className={'w-full pt-8 mt-4 border-t-[1px] border-solid border-black'}>
            <Link href={'/projects'} className={'font-secondary uppercase text-4xl sm:text-6xl lg:text-7xl'}>{label}</Link>
        </section>
    );
};

export default BottomBanner;