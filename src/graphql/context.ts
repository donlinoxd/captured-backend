import { ExpressContext } from "apollo-server-express";
import User from "../models/user.model";
import Post from "../models/post.model";
import Comment from "../models/comment.model";

const context = ({ req, res }: ExpressContext) => {
  return {
    User,
    Post,
    Comment,
    req,
    res,
  };
};

export type TContext = ReturnType<typeof context>;

export default context;
