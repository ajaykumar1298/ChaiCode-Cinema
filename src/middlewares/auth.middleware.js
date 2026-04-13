import jwt from "jsonwebtoken";

export async function authUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      msg: "No token",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_URI);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "invalid token",
    });
  }
}
