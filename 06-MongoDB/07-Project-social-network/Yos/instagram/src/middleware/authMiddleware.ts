import jwt from "jsonwebtoken";
import router from "../routes/authRoutes";

module.exports = (req: any, res: any, next: any) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    const verified = jwt.verify(token, "your_jwt_secret");
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid token" });
  }
};
export default router;