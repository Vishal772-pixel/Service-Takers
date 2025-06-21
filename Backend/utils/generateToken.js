// utils/generateToken.js or wherever you define it
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '1h', // or whatever duration you prefer
  });
};

export default generateToken;;
