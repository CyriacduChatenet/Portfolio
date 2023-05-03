import { FC } from "react";
import Link from "next/link";


interface IProps {
  link: string;
  label: string;
}

const BottomPageControl: FC<IProps> = ({ link, label }) => {
  return (
    <div className={''}>
        <Link href={link} className={''}>
          {label}
        </Link>
    </div>
  );
};

export default BottomPageControl;
