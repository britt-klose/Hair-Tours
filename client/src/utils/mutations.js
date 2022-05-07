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

export const ADD_PROVIDER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
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

export const ADD_REVIEW = gql`
  mutation addReview($description: String!, $reviewAuthor: String!) {
    addReview(description: $description, reviewAuthor: $reviewAuthor) {
      reviewId
      description
      reviewAuthor
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($user: updateUserInput!) {
    updateUser(user: $user) {
      token
      username
      email
      services {
        serviceName
      }
    }
  }
`;
