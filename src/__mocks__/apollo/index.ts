import {
  ComponentOptions,
  DefineComponent,
  defineComponent,
  FunctionalComponent,
  h,
  provide,
} from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { buildClientSchema, printSchema } from 'graphql/utilities'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { SchemaLink } from '@apollo/link-schema'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { addMocksToSchema, IMockFn } from '@graphql-tools/mock'
import introspectionResult from 'src/graphql/generated/graphql.schema.json'
import defaultResolvers from './resolvers/index'

type VueComponent = FunctionalComponent | ComponentOptions | DefineComponent

type ApolloWrapperOptions = {
  noDefaults?: boolean
  mockResolvers?: Record<string, IMockFn>
}

const Wrapper = defineComponent({
  props: {
    noDefaults: {
      type: Boolean,
      default: false,
    },
    mockResolvers: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { slots }) {
    // 1) Convert JSON schema into Schema Definition Language
    const schemaSDL = printSchema(
      // @ts-expect-error ts-migrate(2322) FIXME: Property 'kind' is missing in type '{ name: string... Remove this comment to see the full error message
      buildClientSchema({ __schema: introspectionResult.__schema })
    )

    // 2) Make schema "executable"
    const schema = makeExecutableSchema({
      typeDefs: schemaSDL,
      resolverValidationOptions: {
        requireResolversForResolveType: 'ignore',
      },
    })

    // 3) Apply mock resolvers to executable schema
    const mockedSchema = addMocksToSchema({
      schema,
      mocks: props.noDefaults
        ? props.mockResolvers
        : {
            ...defaultResolvers,
            ...props.mockResolvers,
          },
    })

    // 4) Define ApolloClient (client variable used below)
    const client = new ApolloClient({
      link: new SchemaLink({ schema: mockedSchema }),
      cache: new InMemoryCache(),
      resolvers: defaultResolvers,
    })

    provide(DefaultApolloClient, client)

    return () => slots.default?.()
  },
})

export const withApollo = (
  component: VueComponent,
  opts: ApolloWrapperOptions = {}
) => {
  return defineComponent(props => () =>
    h(Wrapper, opts, () => h(component, props))
  )
}
