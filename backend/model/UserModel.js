const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.index({ username: 1 }, { unique: true });

const UsersModel = mongoose.model("User", userSchema);

module.exports = { UsersModel };
