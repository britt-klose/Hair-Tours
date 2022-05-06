const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    services: [Services]
    reviews: [Review]
  }
  type Services {
    serviceId: String
    serviceName: String
    price: Int
  }

  input UpdateStylistInput {
    username: String
    email: String
    services: [Services]
  }
  type Review {
    reviewId: String
    reviewAuthor: String
    description: String
    createdAt: String
  }
  type Query {
    users: [User]
    user(username: String!): User
    services(username: String): [Services]
    reviews (username: String): [Review]
    me: User
  }

  type Auth{
    token: ID!
    user: User
  }
  type Mutation {
    addReview(userId: ID!, reviewAuthor: String!, description: String!, createdAt: String!): User
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(id: ID!, input:UpdateStylistInput): Auth
  }
`;

module.exports = typeDefs;

// type Appointment{
//   apptId: String
//   client: String
//   stylist: String
//   service: String
//   scheduledFor: String
// }

// input ApptInput{
//   client: String
//   stylist: String
//   service: String
//   scheduledFor: String
// }