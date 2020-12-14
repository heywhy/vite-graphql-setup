import '@testing-library/jest-dom'
import { render } from '@testing-library/vue'
import { withApollo } from 'src/__mocks__/apollo'
import GraphQLExample from 'test/GraphQLExample.vue'

test('component getting data from graphql', async () => {
  const Comp = withApollo(GraphQLExample, {
    mockResolvers: {
      ExampleQuery: () => ({ testing: true, name: 'Killer' }),
    },
  })

  const { findByText } = render(Comp)
  expect(await findByText('testing is: true')).toBeInTheDocument()
})
