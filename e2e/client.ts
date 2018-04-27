import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import fetch from 'node-fetch';

global['fetch'] = fetch;

const httpLink = new HttpLink({
  uri: `${process.env.E2E_TEST_URI}/${process.env.GRAPHQL_PATH}`,
  credentials: 'include',
});

const client = () => new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
export {
  gql,
};
