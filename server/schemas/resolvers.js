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
    // saveAppt: async (
    //   parent,
    //   { apptId, client, stylist, service, scheduledFor },
    //   context
    // ) => {
    //   if (context.user) {
    //     const appointment = await Appointment.create({
    //       apptId,
    //       client,
    //       stylist,
    //       service,
    //       scheduledFor,

    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { savedAppt: appointment._id } },
    //       {new: true, runvalidators: true}
    //     );
    //     return appointment;
    //   }
    //   throw new AuthenticationError("You need to be logged in to book an appointment");
    // },
    addReview: async (parent, { userId, description, reviewAuthor, rating }) => {
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
    updateUser: async (parent, {id, username, email, services }) => {
      // if (context.user) {
      const updateUser = await 
      User.findOneAndUpdate(
          { _id: id },
          { $addToSet: { 
            user: {username, email, services},
           }, },
          { new: true, runValidators: true }
        );
        // const token = signToken(user);
        // return {token, updateUser};
        return updateUser;
      //}
      //throw new AuthenticationError("You need to be logged in!");
    },
    // addService: async (parent, {userId, serviceName, price}, context) => {
    //   if (context.user){
    //     return User.findOneAndUpdate(
    //       {_id: userId},
    //       {$addToSet:{
    //         services: {serviceName, price}
    //       },},
    //       {new: true,
    //       runvalidators: true,}
    //     );
    //   }
    //   throw new AuthenticationError('Sytlists must be logged in to update services.');
    // },

    // removeService: async (parent, {userId, serviceId}, context) =>{
    //   if (context.user){
    //     return User.findOneAndUpdate(
    //       {_id: userId},
    //       {$pull: {services:{
    //         _id: serviceId,

    //         serviceName,
    //         price,
    //         },
    //       },
    //     },
    //     {new: true}
    //   );
    //   }
    //   throw new AuthenticationError('Sytlists must be logged in to update services.');
    // },
  },
};

module.exports = resolvers;
