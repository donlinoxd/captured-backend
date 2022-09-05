import jwt, { TokenExpiredError } from "jsonwebtoken";

export const createToken = async (
  payload: object,
  options?: jwt.SignOptions
) => {
  return jwt.sign(payload, process.env.JWT_KEY!, options);
};

export const verifyToken = async <T>(
  token: string
): Promise<{ payload: T | null; valid: boolean; expired: boolean }> => {
  try {
    const payload = jwt.verify(token, process.env.JWT_KEY!);

    return {
      payload: payload as T,
      valid: true,
      expired: false,
    };
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return {
        payload: null,
        valid: false,
        expired: error.message === "jwt expired",
      };
    } else {
      return {
        payload: null,
        valid: false,
        expired: false,
      };
    }
  }
};
