import { QueryResolvers } from '../_generated/types';

export const query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  jokes: () => ({}),
};
