import type { InferGetServerSidePropsType, NextPage } from "next";
import styles from "../../styles/Page.module.css";

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

const Pokemon: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Think of a clever title</h1>
      <p className={styles.description}>Think of a clever description</p>
      Think of a good way to represent all the pokemon details
    </main>
  );
};

export default Pokemon;
