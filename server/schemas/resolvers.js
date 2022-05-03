const { AuthenticationError } = require("apollo-server-express");
const { User }= require('../models');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('savedAppts');
    },
    savedAppts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Appointment.find(params).sort({ createdAt: -1 });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("savedAppts");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
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
    saveAppt: async (
      parent,
      { ApptId, client, stylist, service, scheduledFor },
      context
    ) => {
      if (context.user) {
        const appointment = await Appointment.create({
          ApptId,
          client,
          stylist,
          service,
          scheduledFor,
          
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedAppt: appointment._id } }
        );
    //how to save to stylist too. might have to figure out how to make them all users..
        // await Stylist.findOneAndUpdate(
        //   { _id: context.stylist._id },
        //   { $addToSet: { savedAppt: appointment._id } }
        // );
        return appointment;
      }
      throw new AuthenticationError("You need to be logged in to book an appointment");
    },
  },
};

module.exports = resolvers;
