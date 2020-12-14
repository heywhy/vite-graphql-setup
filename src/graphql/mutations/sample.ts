import gql from 'graphql-tag'

export const ExampleMutation = gql`
  mutation exampleMutation($input: ExampleMutationInput!) {
    exampleMutation(input: $input) {
      id
      name
      testing
    }
  }
`
