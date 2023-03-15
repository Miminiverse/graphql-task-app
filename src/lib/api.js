import { gql } from '@apollo/client';

export const ALL_TODOS = gql`
query {
    posts (stage: DRAFT) {
        id
        title
        assignedTo
    }
}
`


export const CREATE_POST =  gql`
    mutation CreatePost($assignedTo: String, $title: String) {
        createPost(
            data: {assignedTo: $assignedTo,  title: $title}
          ) {
            id
            title
            assignedTo
        }
    }
`

export const DELETE_POST = gql `
    mutation DeletePost($id: ID!) {
        deletePost(where: {id: $id}) {
            id
            title
            assignedTo
        }
    }
`



export const UPDATE_POST = gql `
    mutation UpdatePost($assignedTo: String, $title: String, $id: ID) {
        updatePost(
            where: {id: $id}
            data: {
                assignedTo: $assignedTo,
                title: $title,
            }
        ) {
            assignedTo
            title
        }
    }
`