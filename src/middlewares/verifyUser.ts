import { TUser } from "./../models/user.model";
import { AuthenticationError } from "apollo-server-express";
import { Request, Response } from "express";
import { verifyToken } from "../utils/jwt";

const verifyUser = async (req: Request, res: Response) => {
  const token = req.headers.authorization;

  if (!token) throw new AuthenticationError("Access Token must be provided");

  const accessToken = token.split(" ")[1];

  const { payload, valid, expired } = await verifyToken<TUser>(accessToken);

  if (expired) throw new AuthenticationError("Access Token is expired");
  if (!valid || !payload)
    throw new AuthenticationError("Access Token is not valid");

  return payload;
};

export default verifyUser;
