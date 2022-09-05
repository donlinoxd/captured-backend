import { Resolvers } from "../../types/resolvers.type";
import Query from "./query.resolver";
import User from "./user.resolver";
import Mutation from "./mutation.resolver";
import Post from "./post.resolver";

const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
  Post,
};

export default resolvers;
