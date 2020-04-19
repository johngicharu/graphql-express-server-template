import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import * as express from "express";
import * as morgan from "morgan";
import * as dotenv from "dotenv";
import * as helmet from "helmet";
import * as cors from "cors";

import createServer from "./utils/createServer";
import postTester from "./utils/postTester";

dotenv.config();

createConnection()
  .then(async (_connection) => {
    const app = express();
    const { PORT } = process.env;
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(morgan("dev"));

    // Config Apollo GraphQl
    const server = createServer();

    server.applyMiddleware({ app, path: "/graphql" });

    // start express server
    app.listen(PORT, () => {
      console.log(`Server running at ${PORT}${server.graphqlPath}`);
      postTester();
    });
  })
  .catch((error) => console.log(error));
