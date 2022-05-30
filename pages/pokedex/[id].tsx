import { gql } from "@apollo/client";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { getApolloClient } from "../../apollo-client";
import styles from "../../styles/Page.module.css";

import { Card } from "../../components";
import Image from "next/image";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const client = getApolloClient();

  const { data } = await client.query({
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
      <h1 className={styles.title}>Think of a clever title</h1>
      <p className={styles.description}>Think of a clever description</p>
      Think of a good way to represent all the pokemon details
    </main>
  );
};

export default Pokemon;
