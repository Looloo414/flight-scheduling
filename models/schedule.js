const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('./aircraft')
require('./user')

const scheduledFlightSchema = new Schema(
  {
    date: Date,
    instructor: {type: String, enum:['Alexa', 'Chris', 'Steve', 'Brian']},
    user: [{type: Schema.Types.ObjectId,
        ref: 'User'}],
    aircraft: [{type: Schema.Types.ObjectId,
        ref: 'Aircraft'}]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Schedule", scheduledFlightSchema);