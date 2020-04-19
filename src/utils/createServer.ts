import { ApolloServer } from "apollo-server-express";

// GraphQL Files
import typeDefs from "../graphql/typeDefs";
import resolvers from "../graphql/resolvers";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entity/Post";

export default () => {
  return new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req, res }: { req: Request; res: Response }) => {
      const postsRepository = getRepository(Post);

      if (req) {
        return {
          models: {
            postsRepository,
          },
        };
      }
    },
    debug: true,
  });
};
