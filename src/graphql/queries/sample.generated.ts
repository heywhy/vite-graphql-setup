import * as Types from '../types.d'

import * as Operations from './sample'
import * as VueApolloComposable from '@vue/apollo-composable'
import * as VueCompositionApi from 'vue'
export type ReactiveFunction<TParam> = () => TParam
export type ExampleQueryQueryVariables = Types.Exact<{ [key: string]: never }>

export type ExampleQueryQuery = {
  __typename?: 'Query'
  exampleQuery?: {
    __typename?: 'ExampleQuery'
    id: string
    name: string
    testing: boolean
  } | null
}

export declare const ExampleQuery: import('graphql').DocumentNode

export function useExampleQueryQuery(
  options:
    | VueApolloComposable.UseQueryOptions<
        ExampleQueryQuery,
        ExampleQueryQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ExampleQueryQuery,
          ExampleQueryQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ExampleQueryQuery,
          ExampleQueryQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ExampleQueryQuery,
    ExampleQueryQueryVariables
  >(Operations.ExampleQuery, {}, options)
}
export function useExampleQueryLazyQuery(
  options:
    | VueApolloComposable.UseQueryOptions<
        ExampleQueryQuery,
        ExampleQueryQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ExampleQueryQuery,
          ExampleQueryQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ExampleQueryQuery,
          ExampleQueryQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ExampleQueryQuery,
    ExampleQueryQueryVariables
  >(Operations.ExampleQuery, {}, options)
}
export type ExampleQueryQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ExampleQueryQuery,
    ExampleQueryQueryVariables
  >
