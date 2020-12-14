export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  exampleQuery?: Maybe<ExampleQuery>
}

export type Mutation = {
  __typename?: 'Mutation'
  exampleMutation?: Maybe<ExampleQuery>
}

export type MutationExampleMutationArgs = {
  input: ExampleMutationInput
}

export type ExampleQuery = {
  __typename?: 'ExampleQuery'
  id: Scalars['ID']
  name: Scalars['String']
  testing: Scalars['Boolean']
}

export type ExampleMutationInput = {
  name?: Maybe<Scalars['String']>
  testing?: Maybe<Scalars['Boolean']>
}

export type ExampleMutationMutationVariables = Exact<{
  input: ExampleMutationInput
}>

export type ExampleMutationMutation = { __typename?: 'Mutation' } & {
  exampleMutation?: Maybe<
    { __typename?: 'ExampleQuery' } & Pick<
      ExampleQuery,
      'id' | 'name' | 'testing'
    >
  >
}

export type ExampleQueryQueryVariables = Exact<{ [key: string]: never }>

export type ExampleQueryQuery = { __typename?: 'Query' } & {
  exampleQuery?: Maybe<
    { __typename?: 'ExampleQuery' } & Pick<
      ExampleQuery,
      'id' | 'name' | 'testing'
    >
  >
}
