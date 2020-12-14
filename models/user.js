const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    student: {type: Boolean, required: true},
    hours: Number,
    licensesRatings: [String],
    scheduledFlight: [scheduledFlightSchema]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
