const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    password: String
    status: String
    availability: String
    services: [Services]
    reviews: [Review]
    savedAppts:[Appointment]
  }

  type Services {
    serviceId: String
    serviceName: String
    price: Int
  }

  type Review{
    reviewId: String
    reviewAuthor: String
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
    apptId: String
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
    addReview(userId: ID!, reviewAuthor: String!, description: String!, createdAt: String!, rating: Int!): User
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(username: String!, email: String!, status: String!, offeredServices:[Services]!): Auth
    addService(userId: ID!, serviceName: String!, price: Int!): User
    removeService(userId: ID!, serviceId: ID!): User
  }
`;

module.exports = typeDefs;
