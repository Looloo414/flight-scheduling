const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aircraftSchema = new Schema(
  {
    name: {type: String, required: true},
    schedule: [scheduledFlightSchema],
    multiEngine: Boolean
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", aircraftSchema);resizeBy