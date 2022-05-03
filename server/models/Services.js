const { Schema } = require("mongoose");

const servicesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
});

// const Services = model("Services", servicesSchema);

module.exports = servicesSchema;
