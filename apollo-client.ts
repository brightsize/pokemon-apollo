import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const IS_SSR = typeof window === "undefined";

export const getApolloClient = (initialState?: NormalizedCacheObject) => {
  const cache = new InMemoryCache().restore(initialState || {});
  return new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache,
    ssrMode: IS_SSR,
  });
};
