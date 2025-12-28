require("dotenv").config();

const { requireAuth } = require("./middleware/requireAuth");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const app = express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

/* =======================
   Middlewares
======================= */
app.use(express.json());
app.use(cookieParser());

// ✅ Correct CORS for cookie auth
const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow curl/postman (no origin)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("CORS blocked: " + origin));
    },
    credentials: true,
  })
);

// ❌ IMPORTANT: do NOT use app.use(cors()) again.
// ❌ Also do NOT need body-parser; express.json already covers it.

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
  let newOrder = new OrdersModel({
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
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
