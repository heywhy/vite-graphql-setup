import gql from 'graphql-tag'

export const ExampleMutation = gql`
  mutation ExampleMutation($input: ExampleMutationInput!) {
    exampleMutation(input: $input) {
      id
      name
      testing
    }
  }
`
