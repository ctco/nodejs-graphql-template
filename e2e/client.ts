import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
export { default as gql } from 'graphql-tag';

import 'isomorphic-fetch';

const httpLink = new HttpLink({
  uri: `${process.env.E2E_TEST_URL}/${process.env.GRAPHQL_PATH}`,
});

const client = () => new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
