import BaselineFooter from "@/components/baselineFooter";
import Layout from "@/components/layout";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";


const NotFoundPage = () => {
  const { isOpen } = useMenu();

  useBodyScroll(isOpen);
  useBodyScrollLock(isOpen);

  return (
    <div className={''}>
      <Layout
        title={"Cyriac du Chatenet - Page not found"}
        description={"Cyriac du Chatenet's portfolio of fullstack developer and Ux - Ui designer"}
      >
        <main className={''}>
            <div className={''}>
                <h1 className={''}>404</h1>
                <p className={''}>Page not found</p>
            </div>
            <BaselineFooter displayTalks={true} />
        </main>
      </Layout>
    </div>
  );
};

export default NotFoundPage;
