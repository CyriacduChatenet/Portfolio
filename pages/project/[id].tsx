import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { Props } from 'next/script';
import { GetServerSideProps, NextPage } from 'next';

import Layout from '@/components/layout';
import useMenu from '@/contexts/useMenu';
import { useBodyScroll, useBodyScrollLock } from '@/hooks/useBodyScroll';
import BottomBanner from '@/components/bottomBanner';
import IProject, { Mission } from '@/types/project';

interface IProps {
	data: IProject
};

const ProjectPage: NextPage<IProps> = ({data}) => {
	const [openModal, setOpenModal] = useState(false);

	const { isOpen } = useMenu();

	const titleRef = useRef(null);
	const carouselRef = useRef(null);
	const aboutRef = useRef(null);
	const missionRef = useRef(null);
	const teamRef = useRef(null);

	useBodyScroll(isOpen);
	useBodyScrollLock(isOpen);

	const handleAnimate = () => {
		gsap.fromTo(titleRef.current, { opacity: 0 }, { opacity: 100, duration: 3, ease: 'power4.in', delay: 1 });
		gsap.fromTo(carouselRef.current, { opacity: 0 }, { opacity: 100, duration: 3, ease: 'power4.in', delay: 1.5 });
		gsap.fromTo(aboutRef.current, { opacity: 0 }, { opacity: 100, duration: 3, ease: 'power4.in', delay: 2 });
		gsap.fromTo(missionRef.current, { opacity: 0 }, { opacity: 100, duration: 3, ease: 'power4.in', delay: 2.5 });
		gsap.fromTo(teamRef.current, { opacity: 0 }, { opacity: 100, duration: 3, ease: 'power4.in', delay: 3 });
	};

	useEffect(() => {
		handleAnimate();
	}, []);

	return (
		<>
			<Layout
				title={'Cyriac du Chatenet - Portfolio'}
				description={"Cyriac du Chatenet's portfolio of fullstack developer and Ux - Ui designer"}
			>
				<div className={'px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-24 py-12'}>
					<div className={'pt-12 pb-6'}>
						<h1 className={'font-secondary uppercase text-blue text-6xl sm:text-6xl xl:text-8xl'} ref={titleRef}>
							{data.title}
						</h1>
					</div>
					<div className={'rounded-lg lg:w-1/2 lg:ml-72 xl:ml-80 2xl:ml-96'} ref={carouselRef}>
						<Image src={data.thumbnail} alt={'project thumbnail'} width={800} height={800} className={'rounded-lg'} />
					</div>
					<section className={'my-8 flex flex-col lg:flex-row'}>
						<div className={'flex flex-col items-center py-8 lg:w-1/3'} ref={aboutRef}>
							<h2 className={'py-1 px-20 border-solid border-black border-x border-y rounded-2xl uppercase'}>About</h2>
							<div className={'pt-4 pl-4'}>
								<Link href={''} passHref={true} target={'_blank'} />
								<a href={data.website_url} className={'flex items-center'} target={'_blank'} rel="noreferrer">
									<span>view website</span>
									<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
										<path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4Z" />
									</svg>
								</a>
								<p className="py-2">Year: {data.year}</p>
								<p className={''}>{data.about}</p>
							</div>
						</div>
						<div className={'flex flex-col items-center lg:w-1/3 py-8'} ref={missionRef}>
							<h2 className={'py-1 px-20 border-solid border-black border-x border-y rounded-2xl uppercase'}>Mission</h2>
							<ul className={'pt-4'}>
								{data.missions?.map((mission: Mission) => (
									<li key={mission._id} className="py-2">
										{mission.name} : {mission.description}
									</li>
								))}
							</ul>
						</div>
						<div className={'flex flex-col items-center lg:w-1/3 py-8'} ref={teamRef}>
							<h2 className={'py-1 px-20 border-solid border-black border-x border-y rounded-2xl uppercase'}>Team</h2>
							<ul className={'pt-4 w-full flex flex-col md:flex-row items-center justify-around flex-wrap'}>
								{data.team?.map((user: any) => (
									<Link
										key={user._id}
										href={
											user.website === ''
												? user.socialNetwork[0]?.link
												: user.socialNetwork[0]?.link === ''
												? user.socialNetwork[1]?.link
												: user.socialNetwork[2]?.link === ''
												? user.socialNetwork[0]?.link
												: 'https://linkedin.com'
										}
										passHref={true}
										target={'_blank'}
										onClick={() => setOpenModal(true)}
									>
										<li className={'flex flex-col itmes-center justify-center py-2 md:px-4'}>
											<Image
												src={user.profile_picture}
												alt={'profile picture'}
												width={20}
												height={20}
												className={'rounded-full'}
											/>
											<span>{user.name}</span>
										</li>
									</Link>
								))}
							</ul>
						</div>
					</section>
					<section className={''}>
						{data.images?.map((image: any) => (
							<Image
								key={image._id}
								src={image.source}
								alt={'project characteristics'}
								width={2000}
								height={2000}
								className={'py-4'}
							/>
						))}
					</section>
					{Number(data._id?.length) >= 0 ? <BottomBanner label={'Other projects'} /> : null}
				</div>
			</Layout>
		</>
	);
};

export default ProjectPage;


export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
	const host = context.req.headers['x-forwarded-host'] || context.req.headers;

	const response = await fetch(`https://${host.host}/api/${context.req.url}`);
	const json = await response.json();
	return {
		props: {
			data: json.data,
		}
	}
};