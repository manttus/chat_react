import { config } from "./../../config/config";
import nodemailer from "nodemailer";
import { hash, compare } from "bcrypt";

const transporter = nodemailer.createTransport(config.mailConfig);

const mainConfig = (receiver: string, body: string) => {
  return {
    from: "Mintables <markeplacemintables@gmail.com> ",
    to: receiver,
    subject: "Verify your email",
    html: `<p>${body}</p>`,
  };
};

const generateOtp = () => {
  const digits = "0123456789";
  let otp = "";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    otp += digits[randomIndex];
  }
  return otp;
};

const hashOtp = async (otp: string) => {
  return await hash(otp, 10);
};

const compareOtp = async (otp: string, db_otp: string) => {
  return await compare(otp, db_otp);
};

const mailService = () => {
  const sendOtp = async (email: string, body: string) => {
    const mailOptions = mainConfig(email, body);
    await transporter.sendMail(mailOptions);
  };
  return {
    sendOtp,
    generateOtp,
    hashOtp,
    compareOtp,
  };
};

export default mailService;
