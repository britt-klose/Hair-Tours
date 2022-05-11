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
mutation AddReview($userId: ID!, $description: String!, $reviewAuthor:String!, $rating: Int!){
  addReview (userId: $userId, description: $description, reviewAuthor:$reviewAuthor, rating: $rating){
    username
    reviews {
      reviewId
      reviewAuthor
      description
      rating
    }
  }
  }
`;

export const ADD_SERVICE=gql`
mutation AddService($userId: ID!, $serviceId: ID!, $serviceName: String!, $price: Int!)
{addService (userId: $userId, serviceId: $serviceId, serviceName: $serviceName, price: $price){
  username
  services {
    serviceId
    serviceName
    price
  }
}
}
`;

export const REMOVE_SERVICE=gql`
mutation RemoveService($userId: ID!, $serviceId: ID!)
{removeService (userId: $userId, serviceId: $serviceId){
  _id
  username
  services {
    serviceId
  }
}
`;

export const UPDATE_USER = gql`
mutation UpdateUser($id: ID!, $userData: UpdateUserInput!){
  updateUser (id: $id, userData: $userData) {
      _id
      email
      username
  }
  }
`;
