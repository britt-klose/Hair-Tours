const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    savedAppts:[Appointment]
  }

  type Stylist {
    _id: ID
    username: String
    email: String
    password: String
    status: String
    availability: String
    offeredServices: [Services]
    reviews: [Review]
    savedAppts:[Appointment]
  }

  type Services {
    _id: ID
    name: String
    price: Int
  }

  type Review{
    _id: ID
    username: String
    description: String
    createdAt: String
    rating: Int
  }
  type Query {
    users: [User]
    user(username: String!): User
    savedAppts(username: String): [Appointment]
    me: User
  }

  type Appointment{
    ApptId: String
    client: String
    stylist: String
    service: String
    scheduledFor: String
  }

  input ApptInput{
    client: String
    stylist: String
    service: String
    scheduledFor: String
  }

  type Auth{
    token: ID!
    user: User
  }

  type Mutation {
    saveAppt(input: ApptInput): Appointment
    addReview(username: String!, description: String!, createdAt: String!, rating: Int!): Review
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
