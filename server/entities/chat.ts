import mongoose, { Schema } from "mongoose";

type Chat = {
  chat: String;
  userUno: String;
  userDos: String;
  createdAt: Date;
  updatedAt: Date;
};
const chatSchema = new Schema<Chat>({
  chat: {
    type: String,
    required: true,
  },
  userUno: {
    type: String,
    required: true,
  },
  userDos: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<Chat>("Chat", chatSchema);
