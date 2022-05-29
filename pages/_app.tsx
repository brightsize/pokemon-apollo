import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  const { documentHead } = pageProps;
  return (
    <Layout documentHead={documentHead}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
