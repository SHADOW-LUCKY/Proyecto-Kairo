import { verifyJWT } from "../helpers/Token.js";

export const authRequired = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }
    const compared = await verifyJWT(token);
    if (!compared) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }
    req.user = compared;
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
