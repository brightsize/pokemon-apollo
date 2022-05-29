import type { InferGetServerSidePropsType, NextPage } from "next";
import { CardGrid } from "../../components";
import styles from "../../styles/Page.module.css";

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

const Pokedex: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Think of a clever title</h1>

      <p className={styles.description}>Think of a clever description</p>

      <CardGrid>
        Map the pokemon here into {"<PokemonCard />"} components
      </CardGrid>
    </main>
  );
};

export default Pokedex;
