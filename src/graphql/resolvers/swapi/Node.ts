import { nodeDefinitions, fromGlobalId } from 'graphql-relay-tools';
import { byTypeAndId } from '../../models/swapi';

const { nodeResolver, nodesResolver } = nodeDefinitions(globalId => {
  const { type, id } = fromGlobalId(globalId);
  return byTypeAndId(type, id);
});

export const node = {
  node: nodeResolver,
  nodes: nodesResolver
};