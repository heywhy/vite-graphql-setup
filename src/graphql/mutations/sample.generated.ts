import * as Types from '../types.d'

import * as Operations from './sample'
import * as VueApolloComposable from '@vue/apollo-composable'
import * as VueCompositionApi from 'vue'
export type ReactiveFunction<TParam> = () => TParam
export type ExampleMutationMutationVariables = Types.Exact<{
  input: Types.ExampleMutationInput
}>

export type ExampleMutationMutation = {
  __typename?: 'Mutation'
  exampleMutation?: {
    __typename?: 'ExampleQuery'
    id: string
    name: string
    testing: boolean
  } | null
}

export declare const ExampleMutation: import('graphql').DocumentNode

export function useExampleMutationMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        ExampleMutationMutation,
        ExampleMutationMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          ExampleMutationMutation,
          ExampleMutationMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    ExampleMutationMutation,
    ExampleMutationMutationVariables
  >(Operations.ExampleMutation, options)
}
export type ExampleMutationMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    ExampleMutationMutation,
    ExampleMutationMutationVariables
  >
