GraphQL
=======

Currently the best approach seems to keep all schema definitions in a single file
 `schema.graphqls`. If it increases and becomes huge, probably it could be split into
 sensible parts and placed somewhere like `schemaDefs`. For merging schema pieces
 see [Modularizing the schema](http://dev.apollodata.com/tools/graphql-tools/generate-schema.html#modularizing).
 