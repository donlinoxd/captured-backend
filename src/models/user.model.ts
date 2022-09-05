import { Schema, model, Model, Types } from "mongoose";
import cryptoJS from "crypto-js";

export interface TUser {
  _id: Types.ObjectId;
  username: string;
  email: string;
  name: string;
  password: string;
  followers: string[];
  updatedAt: Date;
  createdAt: Date;
}

interface TUserMethods {
  validatePassword(reqPass: string): Promise<boolean> | boolean;
}

type TUserModel = Model<TUser, {}, TUserMethods>;

const userSchema = new Schema<TUser, TUserModel, TUserMethods>(
  {
    username: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      minLengh: 4,
      maxLengh: 20,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      minLengh: 6,
      maxLengh: 25,
    },
    name: { type: String, trim: true, minLengh: 2, maxLengh: 25 },
    password: { type: String, minLength: 8, maxLengh: 25 },
    followers: [String],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = cryptoJS.AES.encrypt(
    this.password!,
    process.env.CRYPTO_KEY!
  ).toString();

  next();
});

userSchema.methods.validatePassword = async function (reqPass) {
  const user = this;

  const origPass = cryptoJS.AES.decrypt(
    user.password,
    process.env.CRYPTO_KEY!
  ).toString(cryptoJS.enc.Utf8);

  return origPass === reqPass;
};

export default model<TUser, TUserModel>("User", userSchema);
