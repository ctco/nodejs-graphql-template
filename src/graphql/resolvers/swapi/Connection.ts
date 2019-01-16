import { connectionFromArray } from 'graphql-relay-tools';
import { byUrls, byType } from '../../models/swapi';

function connection(prop: string) {
  return async (obj, args) => {
    const array = await byUrls(obj[prop] || []);
    const connObj = connectionFromArray(array, args);
    return {
      ...connObj,
      totalCount: array.length,
      [prop]: _ => connObj.edges.map(edge => edge.node),
    };
  };
}

function rootConnection(swapiType) {
  return async (_, args) => {
    const { objects, totalCount } = await byType(swapiType);
    const connObj = connectionFromArray(objects, args);
    return {
      ...connObj,
      totalCount,
      [swapiType]: _ => connObj.edges.map(edge => edge.node),
    };
  };
}

export {
  rootConnection,
  connection,
};
