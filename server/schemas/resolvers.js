const { AuthenticationError } = require("apollo-server-express");
const { User, Service } = require("../models");
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
      return Service.find();
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
    // updateUser: async (parent, {id, email, username, image}) => {
    //   const updateUser = await 
    //   User.findOneAndUpdate(
    //       { _id: id },
    //       { $patch: { 
    //         $filter:{
    //           $set:{},
    //           $remove:{}
    //         }
    //        }, 
    //       },
    //       { new: true, runValidators: true }
    //     );
        
    //     return updateUser;
    // },
    addService: async (parent, {serviceName, price}, context) => {
      if (context.user){
        const service =await Service.create({
          serviceName,
          price,
        })
        return service
      }
      throw new AuthenticationError('Sytlists must be logged in to add a service.');
    },

    removeService: async (parent, {serviceId}, context) =>{
      if (context.user){
        const service= await Service.findOneAndDelete(
          {_id: serviceId},
      );
      return service;
      }
      throw new AuthenticationError('Sytlists must be logged in to delete services.');
    },
  },
};

module.exports = resolvers;
