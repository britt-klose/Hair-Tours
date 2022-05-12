import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $calId: String
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      calId: $calId
    ) {
      user {
        _id
        username
        email
        password
        calId
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview(
    $description: String!
    $reviewAuthor: String!
    $rating: Int!
  ) {
    addReview(
      description: $description
      reviewAuthor: $reviewAuthor
      rating: $rating
    ) {
      reviewId
      description
      reviewAuthor
      createdAt
      rating
    }
  }
`;

export const ADD_SERVICE = gql`
  mutation addService($serviceName: String!, $price: Int!) {
    addService(serviceName: $serviceName, price: $price) {
      serviceId
      serviceName
      price
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($user: updateUserInput!) {
    updateUser(user: $user) {
      username
      email
      services {
        serviceId
        serviceName
        price
      }
    }
  }
`;
