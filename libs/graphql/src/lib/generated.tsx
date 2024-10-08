import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
};

export type Clarification = {
  __typename?: 'Clarification';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  visits: Scalars['Int']['output'];
  words: Array<Word>;
};

/** The connection type for Clarification. */
export type ClarificationConnection = {
  __typename?: 'ClarificationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ClarificationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Clarification>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ClarificationEdge = {
  __typename?: 'ClarificationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Clarification>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signIn?: Maybe<SignInPayload>;
};


export type MutationSignInArgs = {
  input: SignInInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get the clarification based on a provided word. */
  clarification?: Maybe<Clarification>;
  /** Get a list of clarifications */
  clarifications: ClarificationConnection;
  /** Get a list of site examples for a given word ID */
  siteExamples: SiteExampleConnection;
};


export type QueryClarificationArgs = {
  word: Scalars['String']['input'];
};


export type QueryClarificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySiteExamplesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<SiteExampleStatus>;
  wordId: Scalars['ID']['input'];
};

/** Autogenerated input type of SignIn */
export type SignInInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

/** Autogenerated return type of SignIn. */
export type SignInPayload = {
  __typename?: 'SignInPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Site = {
  __typename?: 'Site';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parser: Scalars['String']['output'];
  /** The public URL for the site that can be presented to final users. */
  publicUrl?: Maybe<Scalars['String']['output']>;
  siteExamplesCount: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type SiteExample = {
  __typename?: 'SiteExample';
  approved: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  directLink: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  site?: Maybe<Site>;
  status?: Maybe<SiteExampleStatus>;
  text: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  word?: Maybe<Word>;
};

/** The connection type for SiteExample. */
export type SiteExampleConnection = {
  __typename?: 'SiteExampleConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SiteExampleEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SiteExample>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SiteExampleEdge = {
  __typename?: 'SiteExampleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<SiteExample>;
};

/**
 * The current status of a site example. Site examples need to be approved by an admin in order
 * to be valid and displayed to the final users.
 */
export enum SiteExampleStatus {
  /** Example already approved in admin */
  Approved = 'APPROVED',
  /** Example that was ignored */
  Ignored = 'IGNORED',
  /** Example not approved yet */
  ToApprove = 'TO_APPROVE'
}

export type User = {
  __typename?: 'User';
  createdAt: Scalars['ISO8601DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  passwordDigest?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  username: Scalars['String']['output'];
};

export type Word = {
  __typename?: 'Word';
  banned?: Maybe<Scalars['Boolean']['output']>;
  classification: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  examplesCount?: Maybe<Scalars['Int']['output']>;
  exists?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  openForSiteExamples?: Maybe<Scalars['Boolean']['output']>;
  siteExamples?: Maybe<Array<SiteExample>>;
  siteExamplesCount?: Maybe<Scalars['Int']['output']>;
  text: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type WordSiteExamplesArgs = {
  status?: InputMaybe<SiteExampleStatus>;
};

export type BasicWordFragment = { __typename?: 'Word', id: string, text: string, exists?: boolean | null, classification: string, banned?: boolean | null };

export type CompleteWordFragment = { __typename?: 'Word', id: string, text: string, exists?: boolean | null, classification: string, banned?: boolean | null };

export type GetApprovedSiteExamplesQueryVariables = Exact<{
  wordId: Scalars['ID']['input'];
}>;


export type GetApprovedSiteExamplesQuery = { __typename?: 'Query', siteExamples: { __typename?: 'SiteExampleConnection', nodes?: Array<{ __typename?: 'SiteExample', id: string, createdAt: any, text: string, directLink: string, site?: { __typename?: 'Site', id: string, name: string } | null } | null> | null } };

export type GetClarificationQueryVariables = Exact<{
  word: Scalars['String']['input'];
}>;


export type GetClarificationQuery = { __typename?: 'Query', clarification?: { __typename?: 'Clarification', id: string, visits: number, words: Array<{ __typename?: 'Word', id: string, text: string, exists?: boolean | null, classification: string, banned?: boolean | null }> } | null };

export const BasicWordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasicWord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"exists"}},{"kind":"Field","name":{"kind":"Name","value":"classification"}},{"kind":"Field","name":{"kind":"Name","value":"banned"}}]}}]} as unknown as DocumentNode<BasicWordFragment, unknown>;
export const CompleteWordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompleteWord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BasicWord"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasicWord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"exists"}},{"kind":"Field","name":{"kind":"Name","value":"classification"}},{"kind":"Field","name":{"kind":"Name","value":"banned"}}]}}]} as unknown as DocumentNode<CompleteWordFragment, unknown>;
export const GetApprovedSiteExamplesDoc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getApprovedSiteExamples"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wordId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"siteExamples"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"wordId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wordId"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"EnumValue","value":"APPROVED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"directLink"}},{"kind":"Field","name":{"kind":"Name","value":"site"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetApprovedSiteExamplesQuery, GetApprovedSiteExamplesQueryVariables>;
export const GetClarificationDoc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getClarification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"word"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clarification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"word"},"value":{"kind":"Variable","name":{"kind":"Name","value":"word"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"visits"}},{"kind":"Field","name":{"kind":"Name","value":"words"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BasicWord"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasicWord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"exists"}},{"kind":"Field","name":{"kind":"Name","value":"classification"}},{"kind":"Field","name":{"kind":"Name","value":"banned"}}]}}]} as unknown as DocumentNode<GetClarificationQuery, GetClarificationQueryVariables>;