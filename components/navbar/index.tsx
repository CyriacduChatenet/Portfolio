import { FC, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

import useMenu from '@/contexts/useMenu';

import logoLight from '../../public/logoLight.png';
import logoDark from '../../public/logoDark.png';

const Navbar: FC = () => {
	const { isOpen, setIsOpen } = useMenu();

	const firstLine = useRef(null);
	const secondLine = useRef(null);

	const handleClickAnimate = () => {
		if (isOpen === false) {
			gsap.to(firstLine.current, { rotation: 45, y: 9, ease: 'ease-out' });
			gsap.to(secondLine.current, { rotation: -45, y: -12.5, ease: 'ease-out' });
			setIsOpen(!isOpen);
		} else {
			gsap.to(firstLine.current, { rotation: 0, y: 0, ease: 'ease-in' });
			gsap.to(secondLine.current, { rotation: 0, y: 0, ease: 'ease-in' });
			setIsOpen(!isOpen);
		}
	};

	return (
		<nav
			className={'flex items-center justify-between absolute z-40 w-full px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-24 py-8'}
		>
			<Link href={'/'} className={''}>
				{isOpen ? (
						<Image src={logoDark} width={150} height={150} alt={'logo'} />
				) : (
						<Image src={logoLight} width={150} height={150} alt={'logo'} />
				)}
			</Link>
			<button className={'flex flex-col items-center justify-around w-12 h-12'} onClick={handleClickAnimate}>
				<div
					className={'w-full h-1'}
					ref={firstLine}
					style={isOpen ? { backgroundColor: 'white' } : { backgroundColor: 'black' }}
				></div>
				<div
					className={'w-full h-1'}
					ref={secondLine}
					style={isOpen ? { backgroundColor: 'white' } : { backgroundColor: 'black' }}
				></div>
			</button>
		</nav>
	);
};

export default Navbar;
