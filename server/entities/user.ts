import mongoose, { Schema } from "mongoose";

type UserType = {
  email: string;
  password: string;
  image: string;
  username: string;
  groups: string[];
};

const user = new Schema<UserType>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  username: {
    type: String,
    default: "",
  },
  groups: {
    type: [String],
    default: [],
  },
});

export default mongoose.model("user", user);
