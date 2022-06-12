<<<<<<< Updated upstream
import { gql } from '@apollo/client';
import type { Pokemon } from '..';
import { getApolloClient } from '../../apollo-client';
import type { InferGetServerSidePropsType, NextPage } from 'next';
import { CardGrid } from '../../components';
import styles from '../../styles/Page.module.css';
import { PokemonCard } from '../../components';
import { POKEMON } from '../../config';
import type { PokemonCardProps } from '../../components';
=======
import { gql } from "@apollo/client";
import { getApolloClient } from "../../apollo-client";
import type { InferGetServerSidePropsType, NextPage } from "next";
import { PokedexGrid } from "../../components";
import styles from "../../styles/Page.module.css";
import { PokemonCard } from "../../components";
import { POKEMON } from "../../config";

type Pokemons = {
  pokemons: { id: string; name: string; number: string; image: string }[];
};
>>>>>>> Stashed changes

export const getServerSideProps = async () => {
  const client = getApolloClient();

  const { data } = await client.query({
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
      data: data.pokemons,
    },
  };
};

const Pokedex: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  const pokes = data;
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Think of a clever title</h1>

      <p className={styles.description}>
        {pokes.length} {POKEMON} are featured here!
      </p>

<<<<<<< Updated upstream
      <CardGrid>
        {pokes.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
=======
      <PokedexGrid>
        {pokemons.map((poke) => (
          <PokemonCard key={poke.id} {...poke} />
>>>>>>> Stashed changes
        ))}
      </PokedexGrid>
    </main>
  );
};

export default Pokedex;
