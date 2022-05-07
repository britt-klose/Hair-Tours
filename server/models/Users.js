const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

//const apptSchema = require("./Appointment");
const reviewSchema = require("./Reviews");
const Service = require("./Service");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
    //is callid an id or a link?
    //made link false for now while testing mutatations in gql
    calId: {
      type: String,
      required: false
    },
    
    image: {
      type: String,
      required: false,
    },
    // savedAppts: [apptSchema],
    services: [
      {
        type: Schema.Types.ObjectId,
        ref: "Service",
      },
    ],
    reviews: [reviewSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
