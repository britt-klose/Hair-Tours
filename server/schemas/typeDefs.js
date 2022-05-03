const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    savedAppts:[apptSchema]
  }

  type Stylist {
    _id: ID
    username: String
    email: String
    password: String
    status: String
    availability: String
    offeredServices: [servicesSchema]
    reviews: [reviewShema]
    savedAppts:[apptSchema]
  }

  type Review{
    username: String
    description: String
    createdAt: Date
    rating: Number
  }
  type Query {
    users: [User]
    user(username: String!): User
    savedAppts(username: String): [ApptSchema]
    me: User
  }

  type Appointment{
    ApptId: String
    client: String
    stylist: String
    service: String
    scheduledFor: Date
  }

  input ApptInput{
    client: String
    stylist: String
    service: String
    scheduledFor: Date
  }

  type Auth{
    token: ID!
    user: User
  }

  type Mutation {
    saveAppt(input: ApptInput): Appointment
    addReview(username: String!, description: String!, createdAt: Date!, rating: Number!): Review
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
