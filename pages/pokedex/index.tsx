import { gql } from '@apollo/client';
import { getApolloClient } from '../../apollo-client';
import type { InferGetServerSidePropsType, NextPage } from 'next';
import type { Pokemon } from '..';
import { CardGrid } from '../../components';
import styles from '../../styles/Page.module.css';
import { PokemonCard } from '../../components';
import { POKEMON } from '../../config';

type Pokemons = {
  pokemons: [Pokemon];
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
      pokes: data.pokemons,
    },
  };
};

const Pokedex: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ pokes }) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Think of a clever title</h1>

      <p className={styles.description}>
        {pokes.length} {POKEMON} are featured here!
      </p>

      <CardGrid>
        {pokes.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </CardGrid>
    </main>
  );
};

export default Pokedex;
