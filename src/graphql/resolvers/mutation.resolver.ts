import { createToken } from "../../utils/jwt";
import { UserInputError } from "apollo-server-express";
import { Resolvers } from "../../types/resolvers.type";
import verifyUser from "../../middlewares/verifyUser";
import { errorHandler } from "../../utils/errorHandler";

const Mutation: Resolvers["Mutation"] = {
  registerUser: async (
    _,
    { input: { username, email, name, password, confirmPassword } },
    { User }
  ) => {
    if (password !== confirmPassword)
      throw new UserInputError("Password should match");

    try {
      const newUser = new User({
        username,
        email,
        name,
        password,
      });

      return await newUser.save();
    } catch (error) {
      throw errorHandler(error);
    }
  },

  loginUser: async (_, { username, password }, { User, res }) => {
    try {
      const user = await User.findOne({ username });

      if (!user) throw new UserInputError("User does not exists");

      if (!(await user.validatePassword(password!)))
        throw new UserInputError("Password did not match");

      const token = await createToken(
        {
          id: user.id,
          username: user.username,
          email: user.email,
          name: user.name,
        },
        { expiresIn: "7d" }
      );

      const accessToken = `Bearer ${token}`;

      res.cookie("authorization", accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });

      // @ts-ignore
      return { ...user._doc, token: accessToken, id: user._id };
    } catch (error: any) {
      throw errorHandler(error);
    }
  },

  followUser: async (_, { followedUsername }, { User, req, res }) => {
    try {
      const user = await verifyUser(req, res);

      const loggedInUser = await User.findOne({ username: user.username });
      const followedUser = await User.findOne({ username: followedUsername });

      if (!followedUser || !loggedInUser)
        throw new UserInputError("Something went wrong. User does not exist");

      if (followedUser.followers.includes(user.username)) {
        followedUser.followers = followedUser.followers.filter(
          (followerId) => followerId !== user.username
        );
      } else {
        followedUser.followers.push(user.username);
      }

      await followedUser.save();

      return loggedInUser;
    } catch (error) {
      throw errorHandler(error);
    }
  },

  createPost: async (_, { input: { image, caption } }, { Post, req, res }) => {
    try {
      const user = await verifyUser(req, res);

      const newPost = new Post({
        image,
        caption,
        username: user.username,
      });

      return await newPost.save();
    } catch (error) {
      throw errorHandler(error);
    }
  },

  editPostCaption: async (_, { postId, caption }, { Post, req, res }) => {
    try {
      const user = await verifyUser(req, res);

      const post = await Post.findOneAndUpdate(
        { _id: postId, username: user.username },
        { caption },
        { new: true }
      );

      if (!post)
        throw new UserInputError(
          "Your are not allowed to do that. Post doesn't exist"
        );

      return post;
    } catch (error) {
      throw errorHandler(error);
    }
  },

  deletePost: async (_, { postId }, { Post, req, res }) => {
    try {
      const user = await verifyUser(req, res);

      console.log(user);

      const { deletedCount } = await Post.deleteOne({
        _id: postId,
        username: user.username,
      });

      if (!deletedCount)
        throw new UserInputError(
          "You are not allowed to do that. Post deletion failed"
        );

      return "deleted successfully";
    } catch (error) {
      throw errorHandler(error);
    }
  },

  likePost: async (_, { postId }, { Post, req, res }) => {
    try {
      const user = await verifyUser(req, res);

      const post = await Post.findOne({ _id: postId });

      if (!post) throw new UserInputError("Post does not exists");

      const likeIndex = post.likes.findIndex(
        (username) => username === user.username
      );

      if (likeIndex === -1) post.likes.push(user.username);
      else post.likes.splice(likeIndex, 1);

      return await post.save();
    } catch (error) {
      throw errorHandler(error);
    }
  },

  addComment: async (_, { input: { body, postId } }, { Comment, req, res }) => {
    try {
      const user = await verifyUser(req, res);

      const newComment = new Comment({
        body,
        postId,
        username: user.username,
      });

      return await newComment.save();
    } catch (error) {
      throw errorHandler(error);
    }
  },

  editComment: async (_, { commentId, body }, { Comment, req, res }) => {
    try {
      const user = await verifyUser(req, res);

      const comment = await Comment.findOneAndUpdate(
        { _id: commentId, username: user.username },
        { body },
        { new: true }
      );

      if (!comment)
        throw new UserInputError(
          "You are not allowed to do that. Updating comment failed"
        );

      return comment;
    } catch (error) {
      throw errorHandler(error);
    }
  },

  deleteComment: async (_, { commentId }, { Comment, req, res }) => {
    try {
      const user = await verifyUser(req, res);

      const { deletedCount } = await Comment.deleteOne({
        _id: commentId,
        username: user.username,
      });

      if (!deletedCount)
        throw new UserInputError(
          "You are not allowed to do that. Comment deletion failed"
        );

      return "Sucessfully deleted the comment";
    } catch (error) {
      throw errorHandler(error);
    }
  },
};

export default Mutation;
