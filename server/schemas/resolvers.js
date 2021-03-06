const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
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

    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .populate("services")
          .populate("reviews");

        return userData;
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
    updateUser: async (parent, { username, email, calId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $set: { username, email, calId } },
          { new: true, runvalidators: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addService: async (parent, { userId, serviceId, serviceName, price }) => {
      //if (context.user){
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: {
            services: { serviceId, serviceName, price },
          },
        },
        { new: true, runvalidators: true }
      );
    },

    removeService: async (
      parent,
      { userId, serviceId, serviceName, price }
    ) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $pull: {
            services: { serviceId },
          },
        },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
