import BaselineFooter from "@/components/baselineFooter";
import Layout from "@/components/layout";

import styles from "@/styles/Home.module.scss";


const HomePage = () => {
  return (
    <div className={styles.container}>
      <Layout
        title={"Create Next App"}
        description={"Generated by create next app"}
      >
        <main className={styles.main}>
          <div className={styles.content}>
            <div className={styles.titleContainer}>
              <p className={styles.title}>Creative</p>
              <p className={styles.devTitle}>Developer</p>
            </div>
            <p className={styles.description}>
              Ux - Ui designer X developper fullstack
            </p>
          </div>
          <BaselineFooter />
        </main>
      </Layout>
    </div>
  );
};

export default HomePage;
