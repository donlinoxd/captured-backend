import { readFileSync } from "fs";
import { join } from "path";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import http from "http";
import express from "express";
import cookieParser from "cookie-parser";
require("dotenv").config();

// LOCAL MODULES
import connectDB from "./config/connectDB";
import resolvers from "./graphql/resolvers";
import context from "./graphql/context";

const typeDefs = readFileSync(
  join(__dirname, "/graphql/schema.graphql"),
  "utf-8"
);

const startApolloServer = async (
  typeDefs: string,
  resolvers: any,
  context: any
) => {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  await server.start();
  app.use(cookieParser());

  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: "http://localhost:3000",
    },
    path: "/",
  });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );

  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
};

connectDB().then(() => {
  startApolloServer(typeDefs, resolvers, context);
});
