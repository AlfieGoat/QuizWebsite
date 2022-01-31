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

export type CreateQuestion3MutationVariables = Exact<{
  quizId: Scalars['ID'];
  questionNumber: Scalars['Int'];
  questionContainerId: Scalars['ID'];
  questionText: Scalars['String'];
  questionId: Scalars['ID'];
  correctAnswerId: Scalars['ID'];
  answerText1: Scalars['String'];
  answerId1: Scalars['ID'];
  answerText2: Scalars['String'];
  answerId2: Scalars['ID'];
  answerText3: Scalars['String'];
  answerId3: Scalars['ID'];
}>;


export type CreateQuestion3Mutation = { __typename?: 'Mutation', createQuestionContainer?: { __typename?: 'QuestionContainer', id: string } | null | undefined, createQuestion?: { __typename?: 'Question', id: string } | null | undefined, createCorrectAnswer?: { __typename?: 'CorrectAnswer', id: string } | null | undefined, Answer1?: { __typename?: 'Answer', id: string } | null | undefined, Answer2?: { __typename?: 'Answer', id: string } | null | undefined, Answer3?: { __typename?: 'Answer', id: string } | null | undefined };

export type CreateQuestion4MutationVariables = Exact<{
  quizId: Scalars['ID'];
  questionNumber: Scalars['Int'];
  questionContainerId: Scalars['ID'];
  questionText: Scalars['String'];
  questionId: Scalars['ID'];
  correctAnswerId: Scalars['ID'];
  answerText1: Scalars['String'];
  answerId1: Scalars['ID'];
  answerText2: Scalars['String'];
  answerId2: Scalars['ID'];
  answerText3: Scalars['String'];
  answerId3: Scalars['ID'];
  answerText4: Scalars['String'];
  answerId4: Scalars['ID'];
}>;


export type CreateQuestion4Mutation = { __typename?: 'Mutation', createQuestionContainer?: { __typename?: 'QuestionContainer', id: string } | null | undefined, createQuestion?: { __typename?: 'Question', id: string } | null | undefined, createCorrectAnswer?: { __typename?: 'CorrectAnswer', id: string } | null | undefined, Answer1?: { __typename?: 'Answer', id: string } | null | undefined, Answer2?: { __typename?: 'Answer', id: string } | null | undefined, Answer3?: { __typename?: 'Answer', id: string } | null | undefined, Answer4?: { __typename?: 'Answer', id: string } | null | undefined };

export type CreateQuestion5MutationVariables = Exact<{
  quizId: Scalars['ID'];
  questionNumber: Scalars['Int'];
  questionContainerId: Scalars['ID'];
  questionText: Scalars['String'];
  questionId: Scalars['ID'];
  correctAnswerId: Scalars['ID'];
  answerText1: Scalars['String'];
  answerId1: Scalars['ID'];
  answerText2: Scalars['String'];
  answerId2: Scalars['ID'];
  answerText3: Scalars['String'];
  answerId3: Scalars['ID'];
  answerText4: Scalars['String'];
  answerId4: Scalars['ID'];
  answerText5: Scalars['String'];
  answerId5: Scalars['ID'];
}>;


export type CreateQuestion5Mutation = { __typename?: 'Mutation', createQuestionContainer?: { __typename?: 'QuestionContainer', id: string } | null | undefined, createQuestion?: { __typename?: 'Question', id: string } | null | undefined, createCorrectAnswer?: { __typename?: 'CorrectAnswer', id: string } | null | undefined, Answer1?: { __typename?: 'Answer', id: string } | null | undefined, Answer2?: { __typename?: 'Answer', id: string } | null | undefined, Answer3?: { __typename?: 'Answer', id: string } | null | undefined, Answer4?: { __typename?: 'Answer', id: string } | null | undefined, Answer5?: { __typename?: 'Answer', id: string } | null | undefined };

export type CreateQuizMutationVariables = Exact<{
  quizName: Scalars['String'];
}>;


export type CreateQuizMutation = { __typename?: 'Mutation', createQuiz?: { __typename?: 'Quiz', id: string } | null | undefined };

export type CreateQuizWithIdMutationVariables = Exact<{
  quizName: Scalars['String'];
  quizId: Scalars['ID'];
}>;


export type CreateQuizWithIdMutation = { __typename?: 'Mutation', createQuiz?: { __typename?: 'Quiz', id: string } | null | undefined };

export type DeleteQuizMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteQuizMutation = { __typename?: 'Mutation', deleteQuiz?: { __typename?: 'Quiz', id: string } | null | undefined };

export type DeleteQuestionContainerMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteQuestionContainerMutation = { __typename?: 'Mutation', deleteQuestionContainer?: { __typename?: 'QuestionContainer', id: string } | null | undefined };

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

export type UpdateAnswerTextMutationVariables = Exact<{
  newAnswerText: Scalars['String'];
  answerId: Scalars['ID'];
}>;


export type UpdateAnswerTextMutation = { __typename?: 'Mutation', updateAnswer?: { __typename?: 'Answer', id: string } | null | undefined };

export type UpdateQuestionTextMutationVariables = Exact<{
  questionId: Scalars['ID'];
  newQuestionText: Scalars['String'];
}>;


export type UpdateQuestionTextMutation = { __typename?: 'Mutation', updateQuestion?: { __typename?: 'Question', id: string } | null | undefined };

export type UpdateQuizNameMutationVariables = Exact<{
  quizId: Scalars['ID'];
  newQuizName: Scalars['String'];
}>;


export type UpdateQuizNameMutation = { __typename?: 'Mutation', updateQuiz?: { __typename?: 'Quiz', id: string } | null | undefined };


export const CreateQuestion3Document = gql`
    mutation CreateQuestion3($quizId: ID!, $questionNumber: Int!, $questionContainerId: ID!, $questionText: String!, $questionId: ID!, $correctAnswerId: ID!, $answerText1: String!, $answerId1: ID!, $answerText2: String!, $answerId2: ID!, $answerText3: String!, $answerId3: ID!) {
  createQuestionContainer(
    input: {questionContainerCorrectAnswerId: $correctAnswerId, questionContainerQuestionId: $questionId, questionNumber: $questionNumber, quizID: $quizId, id: $questionContainerId}
  ) {
    id
  }
  createQuestion(
    input: {questionText: $questionText, questionContainerId: $questionContainerId, id: $questionId}
  ) {
    id
  }
  createCorrectAnswer(
    input: {correctAnswerAnswerId: $answerId1, id: $correctAnswerId}
  ) {
    id
  }
  Answer1: createAnswer(
    input: {questionContainerId: $questionContainerId, answerText: $answerText1, id: $answerId1}
  ) {
    id
  }
  Answer2: createAnswer(
    input: {questionContainerId: $questionContainerId, answerText: $answerText2, id: $answerId2}
  ) {
    id
  }
  Answer3: createAnswer(
    input: {questionContainerId: $questionContainerId, answerText: $answerText3, id: $answerId3}
  ) {
    id
  }
}
    `;
export type CreateQuestion3MutationFn = Apollo.MutationFunction<CreateQuestion3Mutation, CreateQuestion3MutationVariables>;

/**
 * __useCreateQuestion3Mutation__
 *
 * To run a mutation, you first call `useCreateQuestion3Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestion3Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestion3Mutation, { data, loading, error }] = useCreateQuestion3Mutation({
 *   variables: {
 *      quizId: // value for 'quizId'
 *      questionNumber: // value for 'questionNumber'
 *      questionContainerId: // value for 'questionContainerId'
 *      questionText: // value for 'questionText'
 *      questionId: // value for 'questionId'
 *      correctAnswerId: // value for 'correctAnswerId'
 *      answerText1: // value for 'answerText1'
 *      answerId1: // value for 'answerId1'
 *      answerText2: // value for 'answerText2'
 *      answerId2: // value for 'answerId2'
 *      answerText3: // value for 'answerText3'
 *      answerId3: // value for 'answerId3'
 *   },
 * });
 */
export function useCreateQuestion3Mutation(baseOptions?: Apollo.MutationHookOptions<CreateQuestion3Mutation, CreateQuestion3MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuestion3Mutation, CreateQuestion3MutationVariables>(CreateQuestion3Document, options);
      }
export type CreateQuestion3MutationHookResult = ReturnType<typeof useCreateQuestion3Mutation>;
export type CreateQuestion3MutationResult = Apollo.MutationResult<CreateQuestion3Mutation>;
export type CreateQuestion3MutationOptions = Apollo.BaseMutationOptions<CreateQuestion3Mutation, CreateQuestion3MutationVariables>;
export const CreateQuestion4Document = gql`
    mutation CreateQuestion4($quizId: ID!, $questionNumber: Int!, $questionContainerId: ID!, $questionText: String!, $questionId: ID!, $correctAnswerId: ID!, $answerText1: String!, $answerId1: ID!, $answerText2: String!, $answerId2: ID!, $answerText3: String!, $answerId3: ID!, $answerText4: String!, $answerId4: ID!) {
  createQuestionContainer(
    input: {questionContainerCorrectAnswerId: $correctAnswerId, questionContainerQuestionId: $questionId, questionNumber: $questionNumber, quizID: $quizId, id: $questionContainerId}
  ) {
    id
  }
  createQuestion(
    input: {questionText: $questionText, questionContainerId: $questionContainerId, id: $questionId}
  ) {
    id
  }
  createCorrectAnswer(
    input: {correctAnswerAnswerId: $answerId1, id: $correctAnswerId}
  ) {
    id
  }
  Answer1: createAnswer(
    input: {questionContainerId: $questionContainerId, answerText: $answerText1, id: $answerId1}
  ) {
    id
  }
  Answer2: createAnswer(
    input: {questionContainerId: $questionContainerId, answerText: $answerText2, id: $answerId2}
  ) {
    id
  }
  Answer3: createAnswer(
    input: {questionContainerId: $questionContainerId, answerText: $answerText3, id: $answerId3}
  ) {
    id
  }
  Answer4: createAnswer(
    input: {questionContainerId: $questionContainerId, answerText: $answerText4, id: $answerId4}
  ) {
    id
  }
}
    `;
export type CreateQuestion4MutationFn = Apollo.MutationFunction<CreateQuestion4Mutation, CreateQuestion4MutationVariables>;

/**
 * __useCreateQuestion4Mutation__
 *
 * To run a mutation, you first call `useCreateQuestion4Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestion4Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestion4Mutation, { data, loading, error }] = useCreateQuestion4Mutation({
 *   variables: {
 *      quizId: // value for 'quizId'
 *      questionNumber: // value for 'questionNumber'
 *      questionContainerId: // value for 'questionContainerId'
 *      questionText: // value for 'questionText'
 *      questionId: // value for 'questionId'
 *      correctAnswerId: // value for 'correctAnswerId'
 *      answerText1: // value for 'answerText1'
 *      answerId1: // value for 'answerId1'
 *      answerText2: // value for 'answerText2'
 *      answerId2: // value for 'answerId2'
 *      answerText3: // value for 'answerText3'
 *      answerId3: // value for 'answerId3'
 *      answerText4: // value for 'answerText4'
 *      answerId4: // value for 'answerId4'
 *   },
 * });
 */
export function useCreateQuestion4Mutation(baseOptions?: Apollo.MutationHookOptions<CreateQuestion4Mutation, CreateQuestion4MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuestion4Mutation, CreateQuestion4MutationVariables>(CreateQuestion4Document, options);
      }
export type CreateQuestion4MutationHookResult = ReturnType<typeof useCreateQuestion4Mutation>;
export type CreateQuestion4MutationResult = Apollo.MutationResult<CreateQuestion4Mutation>;
export type CreateQuestion4MutationOptions = Apollo.BaseMutationOptions<CreateQuestion4Mutation, CreateQuestion4MutationVariables>;
export const CreateQuestion5Document = gql`
    mutation CreateQuestion5($quizId: ID!, $questionNumber: Int!, $questionContainerId: ID!, $questionText: String!, $questionId: ID!, $correctAnswerId: ID!, $answerText1: String!, $answerId1: ID!, $answerText2: String!, $answerId2: ID!, $answerText3: String!, $answerId3: ID!, $answerText4: String!, $answerId4: ID!, $answerText5: String!, $answerId5: ID!) {
  createQuestionContainer(
    input: {questionContainerCorrectAnswerId: $correctAnswerId, questionContainerQuestionId: $questionId, questionNumber: $questionNumber, quizID: $quizId, id: $questionContainerId}
  ) {
    id
  }
  createQuestion(
    input: {questionText: $questionText, questionContainerId: $questionContainerId, id: $questionId}
  ) {
    id
  }
  createCorrectAnswer(
    input: {correctAnswerAnswerId: $answerId1, id: $correctAnswerId}
  ) {
    id
  }
  Answer1: createAnswer(
    input: {questionContainerId: $questionContainerId, answerText: $answerText1, id: $answerId1}
  ) {
    id
  }
  Answer2: createAnswer(
    input: {questionContainerId: $questionContainerId, answerText: $answerText2, id: $answerId2}
  ) {
    id
  }
  Answer3: createAnswer(
    input: {questionContainerId: $questionContainerId, answerText: $answerText3, id: $answerId3}
  ) {
    id
  }
  Answer4: createAnswer(
    input: {questionContainerId: $questionContainerId, answerText: $answerText4, id: $answerId4}
  ) {
    id
  }
  Answer5: createAnswer(
    input: {questionContainerId: $questionContainerId, answerText: $answerText5, id: $answerId5}
  ) {
    id
  }
}
    `;
export type CreateQuestion5MutationFn = Apollo.MutationFunction<CreateQuestion5Mutation, CreateQuestion5MutationVariables>;

/**
 * __useCreateQuestion5Mutation__
 *
 * To run a mutation, you first call `useCreateQuestion5Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestion5Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestion5Mutation, { data, loading, error }] = useCreateQuestion5Mutation({
 *   variables: {
 *      quizId: // value for 'quizId'
 *      questionNumber: // value for 'questionNumber'
 *      questionContainerId: // value for 'questionContainerId'
 *      questionText: // value for 'questionText'
 *      questionId: // value for 'questionId'
 *      correctAnswerId: // value for 'correctAnswerId'
 *      answerText1: // value for 'answerText1'
 *      answerId1: // value for 'answerId1'
 *      answerText2: // value for 'answerText2'
 *      answerId2: // value for 'answerId2'
 *      answerText3: // value for 'answerText3'
 *      answerId3: // value for 'answerId3'
 *      answerText4: // value for 'answerText4'
 *      answerId4: // value for 'answerId4'
 *      answerText5: // value for 'answerText5'
 *      answerId5: // value for 'answerId5'
 *   },
 * });
 */
export function useCreateQuestion5Mutation(baseOptions?: Apollo.MutationHookOptions<CreateQuestion5Mutation, CreateQuestion5MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuestion5Mutation, CreateQuestion5MutationVariables>(CreateQuestion5Document, options);
      }
export type CreateQuestion5MutationHookResult = ReturnType<typeof useCreateQuestion5Mutation>;
export type CreateQuestion5MutationResult = Apollo.MutationResult<CreateQuestion5Mutation>;
export type CreateQuestion5MutationOptions = Apollo.BaseMutationOptions<CreateQuestion5Mutation, CreateQuestion5MutationVariables>;
export const CreateQuizDocument = gql`
    mutation CreateQuiz($quizName: String!) {
  createQuiz(input: {quizName: $quizName}) {
    id
  }
}
    `;
export type CreateQuizMutationFn = Apollo.MutationFunction<CreateQuizMutation, CreateQuizMutationVariables>;

/**
 * __useCreateQuizMutation__
 *
 * To run a mutation, you first call `useCreateQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuizMutation, { data, loading, error }] = useCreateQuizMutation({
 *   variables: {
 *      quizName: // value for 'quizName'
 *   },
 * });
 */
export function useCreateQuizMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuizMutation, CreateQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuizMutation, CreateQuizMutationVariables>(CreateQuizDocument, options);
      }
export type CreateQuizMutationHookResult = ReturnType<typeof useCreateQuizMutation>;
export type CreateQuizMutationResult = Apollo.MutationResult<CreateQuizMutation>;
export type CreateQuizMutationOptions = Apollo.BaseMutationOptions<CreateQuizMutation, CreateQuizMutationVariables>;
export const CreateQuizWithIdDocument = gql`
    mutation CreateQuizWithId($quizName: String!, $quizId: ID!) {
  createQuiz(input: {quizName: $quizName, id: $quizId}) {
    id
  }
}
    `;
export type CreateQuizWithIdMutationFn = Apollo.MutationFunction<CreateQuizWithIdMutation, CreateQuizWithIdMutationVariables>;

/**
 * __useCreateQuizWithIdMutation__
 *
 * To run a mutation, you first call `useCreateQuizWithIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuizWithIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuizWithIdMutation, { data, loading, error }] = useCreateQuizWithIdMutation({
 *   variables: {
 *      quizName: // value for 'quizName'
 *      quizId: // value for 'quizId'
 *   },
 * });
 */
export function useCreateQuizWithIdMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuizWithIdMutation, CreateQuizWithIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuizWithIdMutation, CreateQuizWithIdMutationVariables>(CreateQuizWithIdDocument, options);
      }
export type CreateQuizWithIdMutationHookResult = ReturnType<typeof useCreateQuizWithIdMutation>;
export type CreateQuizWithIdMutationResult = Apollo.MutationResult<CreateQuizWithIdMutation>;
export type CreateQuizWithIdMutationOptions = Apollo.BaseMutationOptions<CreateQuizWithIdMutation, CreateQuizWithIdMutationVariables>;
export const DeleteQuizDocument = gql`
    mutation DeleteQuiz($id: ID!) {
  deleteQuiz(input: {id: $id}) {
    id
  }
}
    `;
export type DeleteQuizMutationFn = Apollo.MutationFunction<DeleteQuizMutation, DeleteQuizMutationVariables>;

/**
 * __useDeleteQuizMutation__
 *
 * To run a mutation, you first call `useDeleteQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuizMutation, { data, loading, error }] = useDeleteQuizMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteQuizMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuizMutation, DeleteQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuizMutation, DeleteQuizMutationVariables>(DeleteQuizDocument, options);
      }
export type DeleteQuizMutationHookResult = ReturnType<typeof useDeleteQuizMutation>;
export type DeleteQuizMutationResult = Apollo.MutationResult<DeleteQuizMutation>;
export type DeleteQuizMutationOptions = Apollo.BaseMutationOptions<DeleteQuizMutation, DeleteQuizMutationVariables>;
export const DeleteQuestionContainerDocument = gql`
    mutation DeleteQuestionContainer($id: ID!) {
  deleteQuestionContainer(input: {id: $id}) {
    id
  }
}
    `;
export type DeleteQuestionContainerMutationFn = Apollo.MutationFunction<DeleteQuestionContainerMutation, DeleteQuestionContainerMutationVariables>;

/**
 * __useDeleteQuestionContainerMutation__
 *
 * To run a mutation, you first call `useDeleteQuestionContainerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuestionContainerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuestionContainerMutation, { data, loading, error }] = useDeleteQuestionContainerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteQuestionContainerMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuestionContainerMutation, DeleteQuestionContainerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuestionContainerMutation, DeleteQuestionContainerMutationVariables>(DeleteQuestionContainerDocument, options);
      }
export type DeleteQuestionContainerMutationHookResult = ReturnType<typeof useDeleteQuestionContainerMutation>;
export type DeleteQuestionContainerMutationResult = Apollo.MutationResult<DeleteQuestionContainerMutation>;
export type DeleteQuestionContainerMutationOptions = Apollo.BaseMutationOptions<DeleteQuestionContainerMutation, DeleteQuestionContainerMutationVariables>;
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
export const UpdateAnswerTextDocument = gql`
    mutation UpdateAnswerText($newAnswerText: String!, $answerId: ID!) {
  updateAnswer(input: {id: $answerId, answerText: $newAnswerText}) {
    id
  }
}
    `;
export type UpdateAnswerTextMutationFn = Apollo.MutationFunction<UpdateAnswerTextMutation, UpdateAnswerTextMutationVariables>;

/**
 * __useUpdateAnswerTextMutation__
 *
 * To run a mutation, you first call `useUpdateAnswerTextMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnswerTextMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnswerTextMutation, { data, loading, error }] = useUpdateAnswerTextMutation({
 *   variables: {
 *      newAnswerText: // value for 'newAnswerText'
 *      answerId: // value for 'answerId'
 *   },
 * });
 */
export function useUpdateAnswerTextMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAnswerTextMutation, UpdateAnswerTextMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAnswerTextMutation, UpdateAnswerTextMutationVariables>(UpdateAnswerTextDocument, options);
      }
export type UpdateAnswerTextMutationHookResult = ReturnType<typeof useUpdateAnswerTextMutation>;
export type UpdateAnswerTextMutationResult = Apollo.MutationResult<UpdateAnswerTextMutation>;
export type UpdateAnswerTextMutationOptions = Apollo.BaseMutationOptions<UpdateAnswerTextMutation, UpdateAnswerTextMutationVariables>;
export const UpdateQuestionTextDocument = gql`
    mutation UpdateQuestionText($questionId: ID!, $newQuestionText: String!) {
  updateQuestion(input: {questionText: $newQuestionText, id: $questionId}) {
    id
  }
}
    `;
export type UpdateQuestionTextMutationFn = Apollo.MutationFunction<UpdateQuestionTextMutation, UpdateQuestionTextMutationVariables>;

/**
 * __useUpdateQuestionTextMutation__
 *
 * To run a mutation, you first call `useUpdateQuestionTextMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestionTextMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuestionTextMutation, { data, loading, error }] = useUpdateQuestionTextMutation({
 *   variables: {
 *      questionId: // value for 'questionId'
 *      newQuestionText: // value for 'newQuestionText'
 *   },
 * });
 */
export function useUpdateQuestionTextMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuestionTextMutation, UpdateQuestionTextMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuestionTextMutation, UpdateQuestionTextMutationVariables>(UpdateQuestionTextDocument, options);
      }
export type UpdateQuestionTextMutationHookResult = ReturnType<typeof useUpdateQuestionTextMutation>;
export type UpdateQuestionTextMutationResult = Apollo.MutationResult<UpdateQuestionTextMutation>;
export type UpdateQuestionTextMutationOptions = Apollo.BaseMutationOptions<UpdateQuestionTextMutation, UpdateQuestionTextMutationVariables>;
export const UpdateQuizNameDocument = gql`
    mutation UpdateQuizName($quizId: ID!, $newQuizName: String!) {
  updateQuiz(input: {id: $quizId, quizName: $newQuizName}) {
    id
  }
}
    `;
export type UpdateQuizNameMutationFn = Apollo.MutationFunction<UpdateQuizNameMutation, UpdateQuizNameMutationVariables>;

/**
 * __useUpdateQuizNameMutation__
 *
 * To run a mutation, you first call `useUpdateQuizNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuizNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuizNameMutation, { data, loading, error }] = useUpdateQuizNameMutation({
 *   variables: {
 *      quizId: // value for 'quizId'
 *      newQuizName: // value for 'newQuizName'
 *   },
 * });
 */
export function useUpdateQuizNameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuizNameMutation, UpdateQuizNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuizNameMutation, UpdateQuizNameMutationVariables>(UpdateQuizNameDocument, options);
      }
export type UpdateQuizNameMutationHookResult = ReturnType<typeof useUpdateQuizNameMutation>;
export type UpdateQuizNameMutationResult = Apollo.MutationResult<UpdateQuizNameMutation>;
export type UpdateQuizNameMutationOptions = Apollo.BaseMutationOptions<UpdateQuizNameMutation, UpdateQuizNameMutationVariables>;