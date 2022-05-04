import { gql } from "@apollo/client";

export const QUERY_SERVICES = gql`
  query tech {
    tech {
      _id
      name
    }
  }
`;

export const QUERY_PROVIDERS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;
