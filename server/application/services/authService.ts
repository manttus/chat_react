import jwt, { sign } from "jsonwebtoken";
import { compare, hash } from "bcrypt";

const authService = () => {
  const generateToken = (
    user: { email: string },
    signature: string,
    expires: { expiresIn: string }
  ) => {
    const token = jwt.sign(user, signature, expires);
    return token;
  };

  const comparePassword = async (password: string, db_password: string) => {
    return await compare(db_password, password);
  };

  const encryptPassword = async (password: string) => {
    return await hash(password, 10);
  };

  const verifyToken = (token: string, signature: string) => {
    try {
      const user = jwt.verify(
        token,
        signature,
        (
          err: jwt.VerifyErrors | null,
          user: string | jwt.JwtPayload | undefined
        ) => {
          return user;
        }
      );
      return user;
    } catch (err: Error | unknown) {
      return null;
    }
  };

  return {
    generateToken,
    comparePassword,
    encryptPassword,
    verifyToken,
  };
};

export default authService;
