const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    calId: String
    image: String
    services: [Services]
    reviews: [Review]
  }
  type Service {
    _id: ID
    serviceId: Int
    serviceName: String
    price: Int
  }
  input UpdateUserInput {
    filter: UserFilter!
    set: UserPatch
    remove: UserPatch
  }
  type UpdateUserPayload{
    user(filter: UserFilter):[User]
  }
  type Review {
    reviewId: String
    reviewAuthor: String
    description: String
    rating: Int
    createdAt: String
  }
  type Query {
    users: [User]!
    user(userId: ID!): User
    services:(serviceId: ID!): [Service]
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
    updateUser(input: UpdateUserInput!): UpdateUserPayload
    addService(serviceName: String!, price: Int!): Service
    removeService(serviceId: ID!): Service
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
