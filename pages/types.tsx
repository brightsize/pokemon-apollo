import type { InferGetServerSidePropsType, NextPage } from "next";
import { CardGrid } from "../components";
import styles from "../styles/Page.module.css";

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

const Types: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Think of a clever title</h1>

      <p className={styles.description}>Think of a clever description</p>

      <CardGrid>Think of a good way to represent types?</CardGrid>
    </main>
  );
};

export default Types;
