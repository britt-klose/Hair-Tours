const { Schema, Types } = require("mongoose");

const servicesSchema = new Schema({
  serviceId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  serviceName: {
    type: String,
    required: true,
  },
  price: {
    type: Int,
    default: 0,
  },
});

// const Services= model("Services", servicesSchema);

module.exports = servicesSchema;
