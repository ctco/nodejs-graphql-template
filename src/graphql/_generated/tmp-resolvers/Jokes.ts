// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { JokesResolvers } from "../types/index";

export const Jokes: JokesResolvers.Type = {
  ...JokesResolvers.defaultResolvers,

  byCategory: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  byId: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
