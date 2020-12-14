const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduledFlightSchema = new Schema(
  {
    date: Date,
    user: [userSchema],
    aircraft: [aircraftSchema]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", scheduledFlightSchema);