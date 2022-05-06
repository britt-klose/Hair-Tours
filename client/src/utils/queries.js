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
export const QUERY_PROVIDER = gql`
  query me {
    me {
      _id
      username
      email
      reviews{
        reviewId
        description
        reviewAuthor
      }
      services{
        serviceName
        price
      }
    }
  }
`;


