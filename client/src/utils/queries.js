import { gql } from "@apollo/client";

export const QUERY_SERVICES = gql`
  query services {
    services {
      _id
      name
      price
    }
  }
`;
export const QUERY_STYLISTS = gql`
  query users {
    users {
      _id
      username
      email
      reviews {
        reviewId
        description
        reviewAuthor
      }
      services {
        serviceName
        price
      }
    }
  }
`;
export const QUERY_SINGLE_STYLIST = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      reviews {
        reviewId
        description
        reviewAuthor
      }
      services {
        serviceName
        price
      }
    }
  }
`;
