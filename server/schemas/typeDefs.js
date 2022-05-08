const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    calId: String
    profilePhoto: String
    services: [Services]
    reviews: [Review]
  }
  type Services {
    _id: ID
    serviceId: Int
    serviceName: String
    price: Int
  }
  input UpdateUserInput {
    username: String
    email: String
    services: [String]
  }
  type Review {
    reviewId: String
    reviewAuthor: String
    description: String
    rating: Int
  }
  type Query {
    users: [User]!
    user(userId: ID!): User
    services: [Services]
    reviews(userId: ID!): [Review]
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    addReview(
      userId: ID!
      reviewAuthor: String!
      description: String!
      rating: Int!
    ): User
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(id: ID!, input: UpdateUserInput): User
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
