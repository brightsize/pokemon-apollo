import { gql } from '@apollo/client';
import type { Pokemon } from '..';
import { getApolloClient } from '../../apollo-client';
import type { InferGetServerSidePropsType, NextPage } from 'next';
import { CardGrid } from '../../components';
import styles from '../../styles/Page.module.css';
import { PokemonCard } from '../../components';
import { POKEMON } from '../../config';
import type { PokemonCardProps } from '../../components';
import { getRandomPokemonId } from '../../utils';

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
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>The PokemonCard calls them all featured</h1>

      <p className={styles.description}>
        All the {POKEMON} are <i>featured</i> here!
      </p>

      <CardGrid>
        {data.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </CardGrid>
    </main>
  );
};

export default Pokedex;
