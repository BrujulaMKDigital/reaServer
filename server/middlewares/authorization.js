import jwt from "jsonwebtoken";
import { invalidToken } from "../utils/constans";

// #-- Verify token middleware
const verifyToken = async (req, res, next) => {
  try {
    const token = req.get("token");
    const decoded = jwt.verify(token, process.env.SEED);

    req.user = decoded.user;

    next();
  } catch (error) {
    return res.status(401).send(invalidToken);
  }
};

export { verifyToken };
