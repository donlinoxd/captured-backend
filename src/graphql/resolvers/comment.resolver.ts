import { Resolvers } from "./../../types/resolvers.type";

const Comment: Resolvers["Comment"] = {
  updatedAt: ({ updatedAt }) => updatedAt.toLocaleString(),
  createdAt: ({ createdAt }) => createdAt.toLocaleString(),
};

export default Comment;
