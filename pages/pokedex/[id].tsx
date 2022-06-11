import { gql } from "@apollo/client";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { getApolloClient } from "../../apollo-client";
import styles from "../../styles/Page.module.css";
import { FeatureCard } from "../../components/organisms/FeatureCard";
import { Pokemon } from "../../models";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const client = getApolloClient();

  const { data } = await client.query<Pokemon>({
    query: gql`
      query pokemon($id: String) {
        pokemon(id: $id) {
          id
          number
          name
          weight {
            minimum
            maximum
          }
          height {
            minimum
            maximum
          }
          classification
          types
          resistant
          weaknesses
          fleeRate
          maxCP
          maxHP
          image
        }
      }
    `,
    variables: {
      id: id,
    },
  });

  return {
    props: {
      pokemon: data.pokemon,
    },
  };
};

const Pokemon: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ pokemon }) => {
  return (
    <main className={styles.main}>
      <FeatureCard {...pokemon} />
    </main>
  );
};

export default Pokemon;
