import {
  SyntaxError,
  ValidationError,
  UserInputError,
  AuthenticationError,
  ForbiddenError,
  ApolloError,
} from "apollo-server-express";

export const errorHandler = (error: unknown) => {
  if (error instanceof SyntaxError) {
    return new SyntaxError(error.message);
  }
  if (error instanceof ValidationError) {
    return new ValidationError(error.message);
  }
  if (error instanceof UserInputError) {
    return new UserInputError(error.message);
  }
  if (error instanceof AuthenticationError) {
    return new AuthenticationError(error.message);
  }
  if (error instanceof ForbiddenError) {
    return new ForbiddenError(error.message);
  }

  return error;
};
