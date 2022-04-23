import gql from 'graphql-tag'

export const ExampleQuery = gql`
  query ExampleQuery {
    exampleQuery {
      id
      name
      testing
    }
  }
`
