require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { requireAuth } = require("./middleware/requireAuth");
const authRoutes = require("./routes/auth");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const app = express();

app.set("trust proxy", 1); // ✅ important on Render/proxies

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

/* =======================
   Middlewares
======================= */
app.use(express.json());
app.use(cookieParser());

// ✅ CORS (allow both deployed sites + localhost for dev)
const allowedOrigins = [
  "https://zerodha-clone-frontend-4gkr.onrender.com",
  "https://zerodha-clone-dashboard-vl2w.onrender.com",
  "http://localhost:3000",
  "http://localhost:3001",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Postman/curl
    if (allowedOrigins.includes(origin)) return callback(null, true);

    console.log("❌ CORS blocked origin:", origin);
    return callback(null, false);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

// ✅ Handle preflight WITH SAME OPTIONS (critical!)
app.options("*", cors(corsOptions));

/* =======================
   MongoDB Connect
======================= */
mongoose
  .connect(uri, { serverSelectionTimeoutMS: 15000 })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

/* =======================
   Routes
======================= */
app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/api/auth", authRoutes);

// Keep your business APIs intact
app.get("/allHoldings", requireAuth, async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", requireAuth, async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", requireAuth, async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("Order saved!");
});

/* =======================
   Server
======================= */
app.listen(PORT, () => console.log(`✅ Server running on ${PORT}`));
