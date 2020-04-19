// import {
//   AuthenticationError,
//   UserInputError,
//   ApolloError,
// } from "apollo-server-express";

const postsResolvers = {
  Query: {
    getPosts: async (
      _parent,
      _args,
      { models: { postsRepository } },
      _info
    ) => {
      const users = await postsRepository.find({ order: { created_on: -1 } });

      return users;
    },
  },
  Mutation: {},
};

export default postsResolvers;
