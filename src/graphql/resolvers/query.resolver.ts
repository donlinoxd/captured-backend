import { errorHandler } from "./../../utils/errorHandler";
import verifyUser from "../../middlewares/verifyUser";
import { Resolvers } from "../../types/resolvers.type";

const Query: Resolvers["Query"] = {
  users: async (_, __, { User }) => await User.find(),
  user: async (_, { id }, { User }) => await User.findById(id),
  posts: async (_, __, { Post, req, res }) => {
    try {
      const user = await verifyUser(req, res);

      let posts = await Post.find().sort({ createdAt: -1 });

      return posts.map((post) => {
        return {
          // @ts-ignore
          ...post._doc,
          id: post._id,
          isLiked: post.likes.includes(user.username),
        };
      });
    } catch (error) {
      throw errorHandler(error);
    }
  },
};

export default Query;
