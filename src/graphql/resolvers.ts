import { GraphQLScalarType, Kind } from "graphql";

// Models
import postsResolvers from "./posts/postsResolvers";

const Resolvers = [
  {
    DateTime: new GraphQLScalarType({
      name: "DateTime",
      description: "A date and time, represented as an ISO-8601 string",
      serialize: (value) => value.toISOString(),
      parseValue: (value) => new Date(value),
      parseLiteral: (ast) =>
        ast.kind === Kind.STRING ? new Date(ast.value) : null,
    }),
  },
  postsResolvers,
];

export default Resolvers;
