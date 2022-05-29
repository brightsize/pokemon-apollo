import type { NextPage } from "next";
import Head from "next/head";
import { CardLink } from "../components";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokémon | Gotta Fetch &apos;em All</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pokémon gotta{" "}
          <a href="https://wayfair.github.io/dociql/">Fetch &apos;em all</a>
        </h1>

        <p className={styles.description}>
          Hello there! Welcome to the world of pokémon! This world is inhabited
          by creatures called pokémon! For some people, pokémon are pets. Others
          use them for fights. Myself...I fetch pokémon with GraphQL.
        </p>

        <div className={styles.grid}>
          <CardLink href="https://nextjs.org/docs" title="Documentation">
            <p>Find in-depth information about Next.js features and API.</p>
          </CardLink>

          <CardLink href="https://nextjs.org/learn" title="Learn">
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </CardLink>

          <CardLink
            href="https://github.com/vercel/next.js/tree/canary/examples"
            title="Examples"
          >
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </CardLink>

          <CardLink
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Deploy"
          >
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </CardLink>
        </div>
      </main>

      <footer className={styles.footer}>
        {/* TODO: Replace with a footer */}
      </footer>
    </div>
  );
};

export default Home;
