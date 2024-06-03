import jwt from "jsonwebtoken";

let privateKey = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
  try {
    // Fetch the tOken From Headers

    const token = req.headers["auth-token"];

    // Verify The Token

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // set the payload in req object
    req.payload = payload;

    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Invalid token / token expired" });
  }
}

export default authMiddleware;
