import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { GRAPHQL_API } from "./config";

const IS_SSR = typeof window === "undefined";

export const getApolloClient = (initialState?: NormalizedCacheObject) => {
  const cache = new InMemoryCache().restore(initialState || {});
  return new ApolloClient({
    uri: GRAPHQL_API,
    cache,
    ssrMode: IS_SSR,
  });
};
