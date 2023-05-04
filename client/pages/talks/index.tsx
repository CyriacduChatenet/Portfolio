import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import gsap from "gsap";

import Layout from "@/components/layout";
import ContactFooter from "@/components/contactFooter";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";
import Image from "next/image";
import sanity from "@/lib/sanity";
import { sanityUrlFor } from "@/lib/sanity-image";

interface IProps {
  talks: any[];
}

const TalksPage: FC<IProps> = ({ talks }) => {
  const [previewImageSrc, setPreviewImageSrc] = useState('');

  const ref = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const previewRef = useRef(null);
  const projectRef = useRef(null);

  const { isOpen } = useMenu();
  useBodyScroll(isOpen);
  useBodyScrollLock(isOpen);

  const handleAnimatePreview = () => {
		gsap.fromTo(previewRef.current, { opacity: 0 }, { opacity: 100, duration: 2, ease: 'power4.in' });
	};

	const handleUnanimatePreview = () => {
		gsap.fromTo(previewRef.current, { opacity: 100 }, { opacity: 0, duration: 2, ease: 'power4.out' });
	};

  const handleAnimate = () => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 100, ease: "power4.in", duration: 1 }
    );
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0 },
      { opacity: 100, ease: "power4.in", duration: 1, delay: 1 }
    );
    gsap.fromTo(
      previewRef.current,
      { opacity: 0 },
      { opacity: 100, ease: "power4.in", duration: 1, delay: 1.5 }
    );
    gsap.fromTo(
      projectRef.current,
      { opacity: 0 },
      { opacity: 100, ease: "power4.in", duration: 1, delay: 2 }
    );
  };

  useEffect(() => {
    handleAnimate();
  }, []);

  return (
    <>
      <Layout
        title={"Cyriac du Chatenet - Portfolio"}
        description={
          "Cyriac du Chatenet's portfolio of fullstack developer and Ux - Ui designer"
        }
      >
        <div
          className={
            "px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-24 py-12 bg-white"
          }
          ref={ref}
        >
          <div className={"mt-20"}>
            <h1
              className={
                "font-secondary uppercase text-blue text-6xl sm:text-8xl xl:text-8xl"
              }
              ref={titleRef}
            >
              Talks
            </h1>
            <p className={""} ref={descriptionRef}>
              My different talks in developer conference
            </p>
          </div>
          <div
            className={
              "my-9 flex flex-col lg:flex-row justify-center itmes-center h-96"
            }
          >
            <Image src={previewImageSrc} alt={""} width={700} height={700} ref={previewRef} priority />
            <ul className={"mt-4 lg:pl-12"}>
              {talks.map((talk) => (
                <li
                  key={talk._id}
                  className={"uppercase"}
                  ref={projectRef}
                  onMouseEnter={() => {
                    handleAnimatePreview();
                    setPreviewImageSrc(
                      sanityUrlFor(talk.thumbnail.asset._ref).url()
                    );
                  }}
                  onMouseLeave={() => {
                    handleUnanimatePreview();
                    setPreviewImageSrc("");
                  }}
                >
                  <Link href={`/talk/${talk.slug.current}`} className={""}>
                    {talk.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ContactFooter />
      </Layout>
    </>
  );
};

export default TalksPage;

const talkQuery = `*[_type == "talk"] {
	_id,
	title,
	slug,
	thumbnail
  }`;

export const getStaticProps = async () => {
  const talks = await sanity.fetch(talkQuery);
  return {
    props: { talks },
  };
};
