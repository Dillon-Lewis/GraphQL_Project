import { gql } from "urql";

export const DELETE_POST = gql`
    mutation DeletePost($id: ID!) 
    {
        deletePost(id: $id)
    }
`;