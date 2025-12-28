const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UsersModel } = require("../model/UserModel");

const router = express.Router();

function isProd() {
  return process.env.NODE_ENV === "production";
}

function signToken(user) {
  return jwt.sign(
    { sub: user._id.toString(), username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
}

/**
 * ✅ IMPORTANT for Render deployments:
 * Your frontend and backend are on different domains.
 * So cookies are cross-site cookies.
 *
 * Cross-site cookies require:
 * - sameSite: "none"
 * - secure: true
 *
 * If you keep sameSite "lax", the browser will drop the cookie.
 */
function setAuthCookie(res, token) {
  res.cookie("access_token", token, {
    httpOnly: true,
    secure: true, // ✅ MUST be true on https (Render)
    sameSite: "none", // ✅ MUST be "none" for cross-site cookies
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/",
  });
}

router.post("/register", async (req, res) => {
  try {
    const { fullName, username, password } = req.body || {};

    if (!fullName || !username || !password) {
      return res
        .status(400)
        .json({ message: "fullName, username, password are required" });
    }

    if (String(password).length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const normalizedUsername = String(username).trim().toLowerCase();

    const existing = await UsersModel.findOne({ username: normalizedUsername });
    if (existing) {
      return res.status(409).json({ message: "Username already exists" });
    }

    const passwordHash = await bcrypt.hash(String(password), 12);

    const user = await UsersModel.create({
      fullName: String(fullName).trim(),
      username: normalizedUsername,
      passwordHash,
    });

    const token = signToken(user);
    setAuthCookie(res, token);

    return res.status(201).json({
      message: "Registered successfully",
      user: { id: user._id, fullName: user.fullName, username: user.username },
    });
  } catch (err) {
    console.error("REGISTER ERROR:", err);

    if (err && err.code === 11000) {
      return res.status(409).json({ message: "Username already exists" });
    }

    return res.status(500).json({
      message: err?.message || "Server error",
      name: err?.name,
      code: err?.code,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body || {};

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "username and password are required" });
    }

    const normalizedUsername = String(username).trim().toLowerCase();

    const user = await UsersModel.findOne({ username: normalizedUsername });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const ok = await bcrypt.compare(String(password), user.passwordHash);
    if (!ok) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = signToken(user);
    setAuthCookie(res, token);

    return res.json({
      message: "Logged in",
      user: { id: user._id, fullName: user.fullName, username: user.username },
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);

    return res.status(500).json({
      message: err?.message || "Server error",
      name: err?.name,
      code: err?.code,
    });
  }
});

router.get("/me", async (req, res) => {
  try {
    const token =
      (req.cookies && req.cookies.access_token) ||
      (req.headers.authorization?.startsWith("Bearer ")
        ? req.headers.authorization.split(" ")[1]
        : null);

    if (!token) return res.status(401).json({ message: "Not authenticated" });

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await UsersModel.findById(payload.sub).select(
      "fullName username"
    );

    if (!user) return res.status(401).json({ message: "Not authenticated" });

    return res.json({
      user: { id: user._id, fullName: user.fullName, username: user.username },
    });
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
});

router.post("/logout", (req, res) => {
  // ✅ Clear cookie with same options (important for some browsers)
  res.clearCookie("access_token", {
    path: "/",
    sameSite: "none",
    secure: true,
  });
  return res.json({ message: "Logged out" });
});

module.exports = router;
