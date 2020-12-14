import gql from 'graphql-tag'

export const ExampleQuery = gql`
  query exampleQuery {
    exampleQuery {
      id
      name
      testing
    }
  }
`
