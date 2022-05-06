const { Schema,  model} = require("mongoose");

const servicesSchema = new Schema({
  serviceName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
});

const Services= model("Services", servicesSchema);

module.exports = Services;
