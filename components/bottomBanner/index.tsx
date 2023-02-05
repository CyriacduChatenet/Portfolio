import { FC } from "react";
import Link from "next/link";


interface IProps {
    label: string;
}


const BottomBanner: FC<IProps> = ({label}) => {
    return (
        <section className={''}>
            <Link href={'/projects'} className={''}>{label}</Link>
        </section>
    );
};

export default BottomBanner;