import { connectionDefinitions } from 'graphql-relay-tools';

/**
  * Constructs a GraphQL connection field config; it is assumed
  * that the object has a property named `prop`, and that property
  * contains a list of types.
  */
export function connectTypes(name: string, prop: string, type: string) {
  const { connectionType } = connectionDefinitions({
    name,
    nodeType: type,
    connectionFields: `
      totalCount: Int
      ${prop}: [${type}]
    `,
  });

  return connectionType;
}
