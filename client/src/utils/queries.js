import { gql } from "@apollo/client";

export const QUERY_SERVICES = gql`
  query services {
    services {
      _id
      serviceId
      serviceName
      price
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    user {
      username
      email
    }
  }
`;

export const QUERY_REVIEWS=gql`
  query getReviews{
    reviews{
      reviewId
      description
      reviewAuthor
      createdAt
    }
  }
`;

export const QUERY_STYLISTS = gql`
  query users {
    users {
      _id
      username
      email
      calId
      profilePhoto
      reviews {
        reviewId
        description
        reviewAuthor
      }
      services {
        serviceId
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
      calId
      profilePhoto
      reviews {
        reviewId
        description
        reviewAuthor
      }
      services {
        serviceId
        serviceName
        price
      }
    }
  }
`;
