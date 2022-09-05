import { Schema, model, Types } from "mongoose";

export interface TPost {
  _id: Types.ObjectId;
  image: string;
  caption: string;
  likes: Types.Array<string>;
  username: string;
  updatedAt: Date;
  createdAt: Date;
}

const postSchema = new Schema<TPost>(
  {
    image: { type: String, required: true },
    caption: { type: String },
    likes: [String],
    username: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<TPost>("Post", postSchema);
