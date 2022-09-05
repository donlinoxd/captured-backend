import { Resolvers } from "../../types/resolvers.type";

const Post: Resolvers["Post"] = {
  comments: async ({ _id }, _, { Comment }) => {
    try {
      return await Comment.find({ postId: _id });
    } catch (error) {
      throw error;
    }
  },
  updatedAt: ({ updatedAt }) => updatedAt.toLocaleString(),
  createdAt: ({ createdAt }) => createdAt.toLocaleString(),
};

export default Post;
