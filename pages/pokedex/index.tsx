import { gql } from "@apollo/client";
import { getApolloClient } from "../../apollo-client";
import type { InferGetServerSidePropsType, NextPage } from "next";
import { CardGrid } from "../../components";
import styles from "../../styles/Page.module.css";
import { PokemonCard } from "../../components";
import { POKEMON } from "../../config";

type Pokemons = {
  id: string;
  name: string;
  number: string;
  image: string;
}[];

export const getServerSideProps = async () => {
  const client = getApolloClient();

  const { data } = await client.query<Pokemons>({
    query: gql`
      query {
        pokemons(first: 20) {
          id
          name
          number
          image
        }
      }
    `,
  });
  return {
    props: {
      pokemons: data,
    },
  };
};

const Pokedex: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ pokemons }) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Think of a clever title</h1>

      <p className={styles.description}>
        {pokemons.length} {POKEMON} are featured here!
      </p>

      <CardGrid>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </CardGrid>
    </main>
  );
};

export default Pokedex;
