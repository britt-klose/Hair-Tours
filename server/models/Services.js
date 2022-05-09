const { Schema } = require("mongoose");

const serviceSchema = new Schema({
  serviceId: {
    type: Number,
  },
  serviceName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
});

// const Services = model("Services", servicesSchema);

module.exports = serviceSchema;
