import * as model from '../models/jokes';
import { JokesResolvers } from '../_generated/types';

export const jokes: JokesResolvers.Type = {
  ...JokesResolvers.defaultResolvers,
  byCategory: (_, { category }) => model.byCategory(category!),
  byId: (_, { id }) => model.byId(id),
};
