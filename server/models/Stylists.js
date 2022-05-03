const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

//importing serviceschema apptschema and reviewschema
const servicesSchema = require("./Services");
const apptSchema = require("");
const reviewShema = require("./Reviews");

const stylistsSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    availability: {
      type: String,
      required: true,
    },
    savedAppts: [apptSchema],
    offeredServices: [servicesSchema],
    reviews: [reviewShema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash stylists password
stylistsSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
stylistsSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Stylists = model("Stylists", stylistsSchema);

module.exports = Stylists;
