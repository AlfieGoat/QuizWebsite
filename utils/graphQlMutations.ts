import { v4 } from 'uuid'
import {
  CreateQuestion3Mutation,
  CreateQuestion3MutationVariables,
  CreateQuestion4Mutation,
  CreateQuestion5Mutation,
  CreateQuestion5MutationVariables,
  CreateQuestion3Document,
  CreateQuestion4Document,
  CreateQuestion5Document,
  DeleteQuestionContainerDocument,
  CreateQuizDocument,
  CreateQuizWithIdDocument,
  DeleteQuizDocument,
  CreateQuizMutation,
  CreateQuizMutationVariables,
  CreateQuizWithIdMutation,
  CreateQuizWithIdMutationVariables,
  DeleteQuestionContainerMutation,
  DeleteQuestionContainerMutationVariables,
  DeleteQuizMutation,
  DeleteQuizMutationVariables,
} from '../generated/graphql'
import { Question } from '../pages/createQuiz'
import { getTokenFromClientCookies } from './auth'
import { makeQuery } from './fetch'
import { print } from 'graphql'

export const createQuizWithQuestions = async (
  questions: Question[],
  quizName: string,
  quizId?: string
): Promise<void> => {
  const createQuizResult = quizId
    ? await createQuizWithId({ quizId, quizName })
    : await createQuiz({ quizName })
  if (!createQuizResult)
  questions.map((question, questionNumber) => {
    createQuestion({
      numberOfOptions: question.options.length,
      queryVariables: {
        quizId: createQuizResult.createQuiz.id,
        questionNumber: questionNumber + 1,
        questionText: question.questionText,
        answerText1: question.options[0],
        answerText2: question.options[1],
        answerText3: question.options[2],
        answerText4: question.options[3],
        answerText5: question.options[4],
      },
    })
  })
}

export const createQuiz = async (
  variables: CreateQuizMutationVariables
): Promise<CreateQuizMutation> => {
  const authToken = getTokenFromClientCookies() as string
  return (await makeQuery(print(CreateQuizDocument), authToken, variables)).data
    .data
}

export const createQuizWithId = async (
  variables: CreateQuizWithIdMutationVariables
): Promise<CreateQuizWithIdMutation> => {
  const authToken = getTokenFromClientCookies() as string
  return (
    await makeQuery(print(CreateQuizWithIdDocument), authToken, variables)
  ).data.data
}

export const deleteQuiz = async (
  variables: DeleteQuizMutationVariables
): Promise<DeleteQuizMutation> => {
  const authToken = getTokenFromClientCookies() as string
  return (await makeQuery(print(DeleteQuizDocument), authToken, variables)).data
    .data
}

export const deleteQuestionContainer = async (
  variables: DeleteQuestionContainerMutationVariables
): Promise<DeleteQuestionContainerMutation> => {
  const authToken = getTokenFromClientCookies() as string
  return (
    await makeQuery(
      print(DeleteQuestionContainerDocument),
      authToken,
      variables
    )
  ).data.data
}

type CreateQuestion5MutationProps = Omit<
  CreateQuestion5MutationVariables,
  | 'questionContainerId'
  | 'questionId'
  | 'correctAnswerId'
  | 'answerId1'
  | 'answerId2'
  | 'answerId3'
  | 'answerId4'
  | 'answerId5'
>

type CreateQuestion4MutationProps = Omit<
  CreateQuestion5MutationProps,
  'answerId5' | 'answerText5'
>
type CreateQuestion3MutationProps = Omit<
  CreateQuestion4MutationProps,
  'answerId4' | 'answerText4'
>

interface CreateQuestionProps {
  numberOfOptions: number
  queryVariables:
    | CreateQuestion5MutationProps
    | CreateQuestion4MutationProps
    | CreateQuestion3MutationProps
}

const createQuestion = async (props: CreateQuestionProps) => {
  const authToken = getTokenFromClientCookies() as string

  const baseVariables: CreateQuestion3MutationVariables = {
    ...props.queryVariables,
    questionContainerId: v4(),
    questionId: v4(),
    correctAnswerId: v4(),
    answerId1: v4(),
    answerId2: v4(),
    answerId3: v4(),
  }

  switch (props.numberOfOptions) {
    case 3:
      return (
        await makeQuery(
          print(CreateQuestion3Document),
          authToken,
          baseVariables
        )
      ).data.data as CreateQuestion3Mutation

    case 4:
      return (
        await makeQuery(print(CreateQuestion4Document), authToken, {
          ...baseVariables,
          answerId4: v4(),
        })
      ).data.data as CreateQuestion4Mutation

    case 5:
      return (
        await makeQuery(print(CreateQuestion5Document), authToken, {
          ...baseVariables,
          answerId4: v4(),
          answerId5: v4(),
        })
      ).data.data as CreateQuestion5Mutation
  }
}
