import BaselineFooter from "@/components/baselineFooter";
import Layout from "@/components/layout";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";

import styles from "@/styles/404.module.scss";


const NotFoundPage = () => {
  const { isOpen } = useMenu();

  useBodyScroll(isOpen);
  useBodyScrollLock(isOpen);

  return (
    <div className={styles.container}>
      <Layout
        title={"Page not found"}
      >
        <main className={styles.main}>
            <div className={styles.content}>
                <h1 className={styles.statusCode}>404</h1>
                <p className={styles.errorMessage}>Page not found</p>
            </div>
            <BaselineFooter displayTalks={true} />
        </main>
      </Layout>
    </div>
  );
};

export default NotFoundPage;
