export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type ExampleMutationInput = {
  readonly name?: InputMaybe<Scalars['String']>
  readonly testing?: InputMaybe<Scalars['Boolean']>
}

export type ExampleQuery = {
  readonly __typename?: 'ExampleQuery'
  readonly id: Scalars['ID']
  readonly name: Scalars['String']
  readonly testing: Scalars['Boolean']
}

export type Mutation = {
  readonly __typename?: 'Mutation'
  readonly exampleMutation?: Maybe<ExampleQuery>
}

export type MutationExampleMutationArgs = {
  input: ExampleMutationInput
}

export type Query = {
  readonly __typename?: 'Query'
  readonly exampleQuery?: Maybe<ExampleQuery>
}
