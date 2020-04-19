import { gql } from "apollo-server-express";

const postsTypeDefs = gql`
  scalar DateTime

  type Post {
    id: ID!
    title: String!
    created_on: DateTime!
    modified_on: DateTime
  }

  extend type Query {
    getPosts: [Post]
  }
`;

export default postsTypeDefs;
