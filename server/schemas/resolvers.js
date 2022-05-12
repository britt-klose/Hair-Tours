const { AuthenticationError } = require("apollo-server-express");
const { User, Services } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId })
        .populate("services")
        .populate("reviews");
    },
    users: async () => {
      return User.find();
    },
    services: async () => {
      return Services.find();
    },
    // savedAppts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Appointment.find(params).sort({ createdAt: -1 });
    // },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate("services")
          .populate("reviews");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password, calId }) => {
      const user = await User.create({ username, email, password, calId });
      const token = signToken(user);
      return {
        token,
        user,
      };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email");
      }

      const correctP = await user.isCorrectPassword(password);

      if (!correctP) {
        throw new AuthenticationError("Incorrect password or email");
      }

      const token = signToken(user);

      return { token, user };
    },
    addReview: async (
      parent,
      { userId, description, reviewAuthor, rating }
    ) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: {
            reviews: { description, reviewAuthor, rating },
          },
        },
        { new: true, runvalidators: true }
      );
    },
    updateUser: async (parent, { id, username, email, services }) => {
      const updateUser = await User.findOneAndUpdate(
        { _id: id },
        {
          $addToSet: {
            user: { username, email, calId, services },
          },
        },
        { new: true, runValidators: true }
      );
      // const token = signToken(user);
      // return {token, updateUser};
      return updateUser;
      //}
      //throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
