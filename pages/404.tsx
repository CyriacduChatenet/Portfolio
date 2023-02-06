import BaselineFooter from "@/components/baselineFooter";
import Layout from "@/components/layout";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";


const NotFoundPage = () => {
  const { isOpen } = useMenu();

  useBodyScroll(isOpen);
  useBodyScrollLock(isOpen);

  return (
    <>
      <Layout
        title={"Cyriac du Chatenet - Page not found"}
        description={"Cyriac du Chatenet's portfolio of fullstack developer and Ux - Ui designer"}
      >
        <main className={'px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-24 py-12 h-screen flex flex-col justify-around items-center'}>
          <div className={'flex flex-col justify-center items-center h-full w-full mt-4 md:mt-24'}>
            <h1 className={'mb-4 text-8xl sm:text-9xl'}>404</h1>
            <p className={'sm:text-lg'}>not found</p>
          </div>
            <BaselineFooter displayTalks={true} />
        </main>
      </Layout>
    </>
  );
};

export default NotFoundPage;
