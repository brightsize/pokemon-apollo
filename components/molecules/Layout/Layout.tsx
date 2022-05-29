import Head from "next/head";
import React from "react";
import { DocumentHead } from "../../../models";
import { Footer } from "../../atoms";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
  documentHead?: DocumentHead;
};

const Layout = ({ children, documentHead }: LayoutProps) => {
  const title = `Pokémon | ${documentHead?.title ?? ""}`;
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={documentHead?.description ?? ""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <Footer />
    </div>
  );
};

export { Layout };
