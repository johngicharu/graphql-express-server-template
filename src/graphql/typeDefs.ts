import { gql } from "apollo-server-express";

import postsTypeDefs from "./posts/postsTypeDefs";

const root = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

const typeDefs = [root, postsTypeDefs];

export default typeDefs;
