import { Resolvers } from "../../types/resolvers.type";

const User: Resolvers["User"] = {
  updatedAt: ({ updatedAt }) => updatedAt.toLocaleString(),
  createdAt: ({ updatedAt }) => updatedAt.toLocaleString(),
};

export default User;
