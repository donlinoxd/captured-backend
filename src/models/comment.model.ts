import { Schema, model, Types } from "mongoose";

export interface TComment {
  _id: Types.ObjectId;
  body: string;
  postId: Types.ObjectId;
  username: string;
  updatedAt: Date;
  createdAt: Date;
}

const commentSchema = new Schema<TComment>(
  {
    body: { type: String, required: true, minLength: 1 },
    postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<TComment>("Comment", commentSchema);
