Resolvers
=========

All resolvers should be imported inside `index.ts`, merged
 (`lodash.merge` makes a _deep_ merge), and finally exported as a default object.
 
Future improvements
-------------------

Probably it would be useful to further split Query, Mutations and other resolver types
 by creating a dedicated directory for these groups, merge them in their group's
 `index.ts` and further merge group resolvers inside the resolver's root `index.ts`
 