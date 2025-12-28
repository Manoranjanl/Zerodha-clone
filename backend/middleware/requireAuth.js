const jwt = require("jsonwebtoken");

function getTokenFromReq(req) {
  // Prefer httpOnly cookie
  if (req.cookies && req.cookies.access_token) return req.cookies.access_token;

  // Fallback to Authorization header
  const auth = req.headers.authorization;
  if (!auth) return null;

  const parts = auth.split(" ");
  if (parts.length === 2 && parts[0] === "Bearer") return parts[1];
  return null;
}

function requireAuth(req, res, next) {
  try {
    const token = getTokenFromReq(req);
    if (!token) return res.status(401).json({ message: "Not authenticated" });

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // { sub, username }
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

module.exports = { requireAuth };
