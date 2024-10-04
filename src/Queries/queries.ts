import { gql } from "urql";

export const GET_POSTS = gql`
  query {
    posts {
      data {
        id
        title
        body
        user {
          id
          name
        }
      }
    }
  }
`;

export const GET_USER_POSTS = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      posts {
        data {
          id
          title
          body
        }
      }
    }
  }
`;
