import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';

import Layout from '@/components/layout';
import useMenu from '@/contexts/useMenu';
import { useBodyScroll, useBodyScrollLock } from '@/hooks/useBodyScroll';
import IProject from '@/types/project';

const ProjectsPage = () => {
	const [projectsStateData, setProjectsStateData] = useState([]);
	const [previewImageSrc, setPreviewImageSrc] = useState('');

	const previewImgRef = useRef(null);
	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const listRef = useRef(null);

	const handleAnimatePreview = () => {
		gsap.fromTo(previewImgRef.current, { opacity: 0 }, { opacity: 100, duration: 2, ease: 'power4.in' });
	};

	const handleUnanimatePreview = () => {
		gsap.fromTo(previewImgRef.current, { opacity: 100 }, { opacity: 0, duration: 2, ease: 'power4.out' });
	};

	const handleAnimate = () => {
		gsap.fromTo(titleRef.current, { opacity: 0 }, { opacity: 100, duration: 2, ease: 'power4.in', delay: 1 });
		gsap.fromTo(descriptionRef.current, { opacity: 0 }, { opacity: 100, duration: 2.5, ease: 'power4.in', delay: 1 });
		gsap.fromTo(listRef.current, { opacity: 0 }, { opacity: 100, duration: 3, ease: 'power4.in', delay: 1 });
	};

	useEffect(() => {
		handleAnimate();
	}, []);

	const { isOpen } = useMenu();

	useBodyScroll(isOpen);
	useBodyScrollLock(isOpen);

	return (
		<>
			<Layout
				title={'Cyriac du Chatenet - Portfolio'}
				description={"Cyriac du Chatenet's portfolio of fullstack developer and Ux - Ui designer"}
			>
				<div className={'px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-24 py-12'}>
					<div className={'pt-20 pb-10'}>
						<h1 className={'font-secondary uppercase text-blue text-6xl sm:text-6xl xl:text-8xl'} ref={titleRef}>
							Projects <span className="text-2xl">{projectsStateData.length}</span>
						</h1>
						<p className={'text-sm lg:text-base'} ref={descriptionRef}>
							Some cool projects i’ve done in school or my work internship
						</p>
					</div>
					<div className={'flex flex-col lg:flex-row xl:mt-10'}>
						<Image src={previewImageSrc} alt={''} width={800} height={800} className={'rounded-xl'} ref={previewImgRef}/>
						<ul className={'xl:pl-40'} ref={listRef}>
							{projectsStateData.map((project:  IProject, index: number) => (
								<li
									key={project._id}
									className={'uppercase text-base border-b-[1px] border-solid border-black pb-2 my-4'}
									onMouseEnter={() => {
										handleAnimatePreview();
										setPreviewImageSrc(project.thumbnail);
									}}
									onMouseLeave={() => {
										handleUnanimatePreview();
										setPreviewImageSrc('');
									}}
								>
									<Link href={`/project/${project.link_title}`} className={''}>
										<span>
											<b>{project.title}</b>&nbsp; - &nbsp;{project.category}
										</span>
										<div className={''}></div>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default ProjectsPage;
