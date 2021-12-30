import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDateTime: any;
};

export type Answer = {
  __typename?: 'Answer';
  answerText: Scalars['String'];
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  questionContainerId: Scalars['ID'];
  updatedAt: Scalars['AWSDateTime'];
};

export type CorrectAnswer = {
  __typename?: 'CorrectAnswer';
  answer: Answer;
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['AWSDateTime'];
};

export type CreateAnswerInput = {
  answerText: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  questionContainerId: Scalars['ID'];
};

export type CreateCorrectAnswerInput = {
  correctAnswerAnswerId: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
};

export type CreateQuestionContainerInput = {
  id?: InputMaybe<Scalars['ID']>;
  questionContainerCorrectAnswerId: Scalars['ID'];
  questionContainerQuestionId: Scalars['ID'];
  questionNumber: Scalars['Int'];
  quizID: Scalars['ID'];
};

export type CreateQuestionInput = {
  id?: InputMaybe<Scalars['ID']>;
  questionContainerId: Scalars['ID'];
  questionText: Scalars['String'];
};

export type CreateQuizInput = {
  id?: InputMaybe<Scalars['ID']>;
  quizName: Scalars['String'];
};

export type DeleteAnswerInput = {
  id: Scalars['ID'];
};

export type DeleteCorrectAnswerInput = {
  id: Scalars['ID'];
};

export type DeleteQuestionContainerInput = {
  id: Scalars['ID'];
};

export type DeleteQuestionInput = {
  id: Scalars['ID'];
};

export type DeleteQuizInput = {
  id: Scalars['ID'];
};

export type ModelAnswerConnection = {
  __typename?: 'ModelAnswerConnection';
  items?: Maybe<Array<Maybe<Answer>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelAnswerFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelAnswerFilterInput>>>;
  answerText?: InputMaybe<ModelStringFilterInput>;
  id?: InputMaybe<ModelIdFilterInput>;
  not?: InputMaybe<ModelAnswerFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelAnswerFilterInput>>>;
  questionContainerId?: InputMaybe<ModelIdFilterInput>;
};

export type ModelBooleanFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelCorrectAnswerConnection = {
  __typename?: 'ModelCorrectAnswerConnection';
  items?: Maybe<Array<Maybe<CorrectAnswer>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelCorrectAnswerFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelCorrectAnswerFilterInput>>>;
  not?: InputMaybe<ModelCorrectAnswerFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCorrectAnswerFilterInput>>>;
};

export type ModelFloatFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
};

export type ModelIdFilterInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
};

export type ModelIntFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export type ModelQuestionConnection = {
  __typename?: 'ModelQuestionConnection';
  items?: Maybe<Array<Maybe<Question>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelQuestionContainerConnection = {
  __typename?: 'ModelQuestionContainerConnection';
  items?: Maybe<Array<Maybe<QuestionContainer>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelQuestionContainerFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelQuestionContainerFilterInput>>>;
  id?: InputMaybe<ModelIdFilterInput>;
  not?: InputMaybe<ModelQuestionContainerFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelQuestionContainerFilterInput>>>;
  questionNumber?: InputMaybe<ModelIntFilterInput>;
  quizID?: InputMaybe<ModelIdFilterInput>;
};

export type ModelQuestionFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelQuestionFilterInput>>>;
  id?: InputMaybe<ModelIdFilterInput>;
  not?: InputMaybe<ModelQuestionFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelQuestionFilterInput>>>;
  questionContainerId?: InputMaybe<ModelIdFilterInput>;
  questionText?: InputMaybe<ModelStringFilterInput>;
};

export type ModelQuizConnection = {
  __typename?: 'ModelQuizConnection';
  items?: Maybe<Array<Maybe<Quiz>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelQuizFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelQuizFilterInput>>>;
  id?: InputMaybe<ModelIdFilterInput>;
  not?: InputMaybe<ModelQuizFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelQuizFilterInput>>>;
  quizName?: InputMaybe<ModelStringFilterInput>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStringFilterInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnswer?: Maybe<Answer>;
  createCorrectAnswer?: Maybe<CorrectAnswer>;
  createQuestion?: Maybe<Question>;
  createQuestionContainer?: Maybe<QuestionContainer>;
  createQuiz?: Maybe<Quiz>;
  deleteAnswer?: Maybe<Answer>;
  deleteCorrectAnswer?: Maybe<CorrectAnswer>;
  deleteQuestion?: Maybe<Question>;
  deleteQuestionContainer?: Maybe<QuestionContainer>;
  deleteQuiz?: Maybe<Quiz>;
  updateAnswer?: Maybe<Answer>;
  updateCorrectAnswer?: Maybe<CorrectAnswer>;
  updateQuestion?: Maybe<Question>;
  updateQuestionContainer?: Maybe<QuestionContainer>;
  updateQuiz?: Maybe<Quiz>;
};


export type MutationCreateAnswerArgs = {
  input: CreateAnswerInput;
};


export type MutationCreateCorrectAnswerArgs = {
  input: CreateCorrectAnswerInput;
};


export type MutationCreateQuestionArgs = {
  input: CreateQuestionInput;
};


export type MutationCreateQuestionContainerArgs = {
  input: CreateQuestionContainerInput;
};


export type MutationCreateQuizArgs = {
  input: CreateQuizInput;
};


export type MutationDeleteAnswerArgs = {
  input: DeleteAnswerInput;
};


export type MutationDeleteCorrectAnswerArgs = {
  input: DeleteCorrectAnswerInput;
};


export type MutationDeleteQuestionArgs = {
  input: DeleteQuestionInput;
};


export type MutationDeleteQuestionContainerArgs = {
  input: DeleteQuestionContainerInput;
};


export type MutationDeleteQuizArgs = {
  input: DeleteQuizInput;
};


export type MutationUpdateAnswerArgs = {
  input: UpdateAnswerInput;
};


export type MutationUpdateCorrectAnswerArgs = {
  input: UpdateCorrectAnswerInput;
};


export type MutationUpdateQuestionArgs = {
  input: UpdateQuestionInput;
};


export type MutationUpdateQuestionContainerArgs = {
  input: UpdateQuestionContainerInput;
};


export type MutationUpdateQuizArgs = {
  input: UpdateQuizInput;
};

export type Query = {
  __typename?: 'Query';
  getAnswer?: Maybe<Answer>;
  getCorrectAnswer?: Maybe<CorrectAnswer>;
  getQuestion?: Maybe<Question>;
  getQuestionContainer?: Maybe<QuestionContainer>;
  getQuiz?: Maybe<Quiz>;
  listAnswers?: Maybe<ModelAnswerConnection>;
  listCorrectAnswers?: Maybe<ModelCorrectAnswerConnection>;
  listQuestionContainers?: Maybe<ModelQuestionContainerConnection>;
  listQuestions?: Maybe<ModelQuestionConnection>;
  listQuizzes?: Maybe<ModelQuizConnection>;
};


export type QueryGetAnswerArgs = {
  id: Scalars['ID'];
};


export type QueryGetCorrectAnswerArgs = {
  id: Scalars['ID'];
};


export type QueryGetQuestionArgs = {
  id: Scalars['ID'];
};


export type QueryGetQuestionContainerArgs = {
  id: Scalars['ID'];
};


export type QueryGetQuizArgs = {
  id: Scalars['ID'];
};


export type QueryListAnswersArgs = {
  filter?: InputMaybe<ModelAnswerFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListCorrectAnswersArgs = {
  filter?: InputMaybe<ModelCorrectAnswerFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListQuestionContainersArgs = {
  filter?: InputMaybe<ModelQuestionContainerFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListQuestionsArgs = {
  filter?: InputMaybe<ModelQuestionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListQuizzesArgs = {
  filter?: InputMaybe<ModelQuizFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type Question = {
  __typename?: 'Question';
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  questionContainerId: Scalars['ID'];
  questionText: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
};

export type QuestionContainer = {
  __typename?: 'QuestionContainer';
  correctAnswer: CorrectAnswer;
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  possibleAnswers?: Maybe<ModelAnswerConnection>;
  question: Question;
  questionNumber: Scalars['Int'];
  quizID: Scalars['ID'];
  updatedAt: Scalars['AWSDateTime'];
};


export type QuestionContainerPossibleAnswersArgs = {
  filter?: InputMaybe<ModelAnswerFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type Quiz = {
  __typename?: 'Quiz';
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  questions?: Maybe<ModelQuestionContainerConnection>;
  quizName: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
};


export type QuizQuestionsArgs = {
  filter?: InputMaybe<ModelQuestionContainerFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateAnswer?: Maybe<Answer>;
  onCreateCorrectAnswer?: Maybe<CorrectAnswer>;
  onCreateQuestion?: Maybe<Question>;
  onCreateQuestionContainer?: Maybe<QuestionContainer>;
  onCreateQuiz?: Maybe<Quiz>;
  onDeleteAnswer?: Maybe<Answer>;
  onDeleteCorrectAnswer?: Maybe<CorrectAnswer>;
  onDeleteQuestion?: Maybe<Question>;
  onDeleteQuestionContainer?: Maybe<QuestionContainer>;
  onDeleteQuiz?: Maybe<Quiz>;
  onUpdateAnswer?: Maybe<Answer>;
  onUpdateCorrectAnswer?: Maybe<CorrectAnswer>;
  onUpdateQuestion?: Maybe<Question>;
  onUpdateQuestionContainer?: Maybe<QuestionContainer>;
  onUpdateQuiz?: Maybe<Quiz>;
};

export type UpdateAnswerInput = {
  answerText?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  questionContainerId?: InputMaybe<Scalars['ID']>;
};

export type UpdateCorrectAnswerInput = {
  correctAnswerAnswerId?: InputMaybe<Scalars['ID']>;
};

export type UpdateQuestionContainerInput = {
  id: Scalars['ID'];
  questionContainerCorrectAnswerId?: InputMaybe<Scalars['ID']>;
  questionContainerQuestionId?: InputMaybe<Scalars['ID']>;
  questionNumber?: InputMaybe<Scalars['Int']>;
  quizID?: InputMaybe<Scalars['ID']>;
};

export type UpdateQuestionInput = {
  id: Scalars['ID'];
  questionContainerId?: InputMaybe<Scalars['ID']>;
  questionText?: InputMaybe<Scalars['String']>;
};

export type UpdateQuizInput = {
  id: Scalars['ID'];
  quizName?: InputMaybe<Scalars['String']>;
};

export type GetQuizQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetQuizQuery = { __typename?: 'Query', getQuiz?: { __typename?: 'Quiz', quizName: string, createdAt: any, id: string, questions?: { __typename?: 'ModelQuestionContainerConnection', items?: Array<{ __typename?: 'QuestionContainer', id: string, quizID: string, questionNumber: number, question: { __typename?: 'Question', id: string, questionText: string, questionContainerId: string }, possibleAnswers?: { __typename?: 'ModelAnswerConnection', items?: Array<{ __typename?: 'Answer', id: string, answerText: string, questionContainerId: string } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined };

export type GetQuizWithCorrectAnswerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetQuizWithCorrectAnswerQuery = { __typename?: 'Query', getQuiz?: { __typename?: 'Quiz', quizName: string, createdAt: any, id: string, questions?: { __typename?: 'ModelQuestionContainerConnection', items?: Array<{ __typename?: 'QuestionContainer', id: string, quizID: string, questionNumber: number, question: { __typename?: 'Question', id: string, questionText: string, questionContainerId: string }, possibleAnswers?: { __typename?: 'ModelAnswerConnection', items?: Array<{ __typename?: 'Answer', id: string, answerText: string, questionContainerId: string } | null | undefined> | null | undefined } | null | undefined, correctAnswer: { __typename?: 'CorrectAnswer', id: string, answer: { __typename?: 'Answer', questionContainerId: string, id: string, answerText: string } } } | null | undefined> | null | undefined } | null | undefined } | null | undefined };

export type ListQuizzesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListQuizzesQuery = { __typename?: 'Query', listQuizzes?: { __typename?: 'ModelQuizConnection', items?: Array<{ __typename?: 'Quiz', createdAt: any, quizName: string, id: string, questions?: { __typename?: 'ModelQuestionContainerConnection', items?: Array<{ __typename?: 'QuestionContainer', questionNumber: number, possibleAnswers?: { __typename?: 'ModelAnswerConnection', items?: Array<{ __typename?: 'Answer', answerText: string } | null | undefined> | null | undefined } | null | undefined, question: { __typename?: 'Question', questionText: string } } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };


export const GetQuizDocument = gql`
    query getQuiz($id: ID!) {
  getQuiz(id: $id) {
    quizName
    createdAt
    questions {
      items {
        id
        quizID
        questionNumber
        question {
          id
          questionText
          questionContainerId
        }
        possibleAnswers {
          items {
            id
            answerText
            questionContainerId
          }
        }
      }
    }
    id
  }
}
    `;

/**
 * __useGetQuizQuery__
 *
 * To run a query within a React component, call `useGetQuizQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetQuizQuery(baseOptions: Apollo.QueryHookOptions<GetQuizQuery, GetQuizQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuizQuery, GetQuizQueryVariables>(GetQuizDocument, options);
      }
export function useGetQuizLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuizQuery, GetQuizQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuizQuery, GetQuizQueryVariables>(GetQuizDocument, options);
        }
export type GetQuizQueryHookResult = ReturnType<typeof useGetQuizQuery>;
export type GetQuizLazyQueryHookResult = ReturnType<typeof useGetQuizLazyQuery>;
export type GetQuizQueryResult = Apollo.QueryResult<GetQuizQuery, GetQuizQueryVariables>;
export const GetQuizWithCorrectAnswerDocument = gql`
    query getQuizWithCorrectAnswer($id: ID!) {
  getQuiz(id: $id) {
    quizName
    createdAt
    questions {
      items {
        id
        quizID
        questionNumber
        question {
          id
          questionText
          questionContainerId
        }
        possibleAnswers {
          items {
            id
            answerText
            questionContainerId
          }
        }
        correctAnswer {
          answer {
            questionContainerId
            id
            answerText
          }
          id
        }
      }
    }
    id
  }
}
    `;

/**
 * __useGetQuizWithCorrectAnswerQuery__
 *
 * To run a query within a React component, call `useGetQuizWithCorrectAnswerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizWithCorrectAnswerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizWithCorrectAnswerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetQuizWithCorrectAnswerQuery(baseOptions: Apollo.QueryHookOptions<GetQuizWithCorrectAnswerQuery, GetQuizWithCorrectAnswerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuizWithCorrectAnswerQuery, GetQuizWithCorrectAnswerQueryVariables>(GetQuizWithCorrectAnswerDocument, options);
      }
export function useGetQuizWithCorrectAnswerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuizWithCorrectAnswerQuery, GetQuizWithCorrectAnswerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuizWithCorrectAnswerQuery, GetQuizWithCorrectAnswerQueryVariables>(GetQuizWithCorrectAnswerDocument, options);
        }
export type GetQuizWithCorrectAnswerQueryHookResult = ReturnType<typeof useGetQuizWithCorrectAnswerQuery>;
export type GetQuizWithCorrectAnswerLazyQueryHookResult = ReturnType<typeof useGetQuizWithCorrectAnswerLazyQuery>;
export type GetQuizWithCorrectAnswerQueryResult = Apollo.QueryResult<GetQuizWithCorrectAnswerQuery, GetQuizWithCorrectAnswerQueryVariables>;
export const ListQuizzesDocument = gql`
    query listQuizzes {
  listQuizzes {
    items {
      createdAt
      quizName
      id
      questions {
        items {
          questionNumber
          possibleAnswers {
            items {
              answerText
            }
          }
          question {
            questionText
          }
        }
      }
    }
  }
}
    `;

/**
 * __useListQuizzesQuery__
 *
 * To run a query within a React component, call `useListQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListQuizzesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListQuizzesQuery(baseOptions?: Apollo.QueryHookOptions<ListQuizzesQuery, ListQuizzesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListQuizzesQuery, ListQuizzesQueryVariables>(ListQuizzesDocument, options);
      }
export function useListQuizzesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListQuizzesQuery, ListQuizzesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListQuizzesQuery, ListQuizzesQueryVariables>(ListQuizzesDocument, options);
        }
export type ListQuizzesQueryHookResult = ReturnType<typeof useListQuizzesQuery>;
export type ListQuizzesLazyQueryHookResult = ReturnType<typeof useListQuizzesLazyQuery>;
export type ListQuizzesQueryResult = Apollo.QueryResult<ListQuizzesQuery, ListQuizzesQueryVariables>;