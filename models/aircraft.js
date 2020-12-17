const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aircraftSchema = new Schema(
  {
    name: {type: String, required: true},
    avatar: String,
    multiEngine: Boolean
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Aircraft", aircraftSchema);