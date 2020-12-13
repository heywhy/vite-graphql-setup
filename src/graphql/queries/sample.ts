import gql from 'graphql-tag'

export const ExampleQuery = gql`
  mutation exampleQuery {
    exampleQuery {
      id
    }
  }
`
