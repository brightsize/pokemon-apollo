import { gql } from '@apollo/client';
import { getApolloClient } from '../../apollo-client';
import type { InferGetServerSidePropsType, NextPage } from 'next';
import { PokedexGrid } from '../../components';
import styles from '../../styles/Page.module.css';
import { PokemonCard } from '../../components';
import { POKEMON } from '../../config';

type Pokemons = {
  pokemons: { id: string; name: string; number: string; image: string }[];
};

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
      pokemons: data.pokemons,
    },
  };
};

const Pokedex: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ pokemons }) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}></h1>

      <p className={styles.description}>
        {pokemons.length} {POKEMON} are featured here!
      </p>

      <PokedexGrid>
        {pokemons.map((poke) => (
          <PokemonCard key={poke.id} {...poke} />
        ))}
      </PokedexGrid>
    </main>
  );
};

export default Pokedex;
