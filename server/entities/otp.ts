import mongoose, { Schema } from "mongoose";
import { Status } from "../constants/enums/enums";

type Otp = {
  otp: string;
  createdAt: Date;
  expiresAt: Date;
  email: string;
  status: Status;
};
const otpSchema = new Schema<Otp>({
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  expiresAt: {
    type: Date,
    default: () => new Date(new Date().getTime() + 2 * 60000),
  },
  email: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: Status.PENDING,
  },
});

export default mongoose.model<Otp>("Otp", otpSchema);
