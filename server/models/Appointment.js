const { Schema, Types } = require("mongoose");

const apptSchema = new Schema({
  ApptId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  scheduledFor: {
    type: Date,
    // default: Date.now,
    required: true
  },
  stylist: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
});

// const Appointments = model("Appointment", apptSchema)

module.exports = apptSchema;
