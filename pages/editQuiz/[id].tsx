import { Box, Button, TextField, Typography } from '@mui/material'
import { print } from 'graphql'
import { NextRouter, useRouter } from 'next/router'
import React, { useReducer } from 'react'
import {
  GetQuizQuery,
  GetQuizWithCorrectAnswerQuery,
} from '../../generated/graphql'
import NavBar from '../../sections/NavBar'
import QuestionCard from '../../sections/QuizCreateQuestion'
import QuizQuestionCard from '../../sections/QuizQuestionCard'
import {
  authRedirectIfNeededOnServer,
  getGroupFromContext,
  getTokenFromRequest,
} from '../../utils/auth'
import { COGNITO_GROUPS, QUIZZES_LINK } from '../../utils/constants'
import { makeQuery } from '../../utils/fetch'
import {
  createQuizWithQuestions,
  deleteQuestionContainer,
  deleteQuiz,
} from '../../utils/graphQlMutations'
import { Question, reducer } from '../createQuiz/index'
import styles from './[id].module.scss'
import { GetQuizWithCorrectAnswerDocument } from '../../generated/graphql'
import { GetServerSideProps } from 'next'
import { getQuizUrl } from '../../utils/getUrls'
import { delay } from '../../utils/delay'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const redirect = authRedirectIfNeededOnServer(context)
  if (redirect) return redirect

  const group = getGroupFromContext(context)
  const auth = getTokenFromRequest(context)
  const result = (
    await makeQuery(print(GetQuizWithCorrectAnswerDocument), auth, {
      id: context.params.id as string,
    })
  ).data.data as GetQuizWithCorrectAnswerQuery
  return {
    props: { quiz: result, group }, // will be passed to the page component as props
  }
}

const sendEdits = async (
  quizId: string,
  quizName: string,
  questions: Question[],
  questionContainerIds: string[]
) => {
  await deleteQuiz({ id: quizId })
  await Promise.all(
    questionContainerIds.map(
      async (questionContainerId) =>
        await deleteQuestionContainer({ id: questionContainerId })
    )
  )
  return await createQuizWithQuestions(questions, quizName, quizId)
}

interface QuizzesProps {
  quiz?: GetQuizWithCorrectAnswerQuery
  redirect?: any
  group?: COGNITO_GROUPS
}

const CommonQuiz = ({
  router,
  quiz,
}: React.PropsWithChildren<{
  router: NextRouter
  quiz: GetQuizWithCorrectAnswerQuery
}>): JSX.Element => {
  const [{ questions, quizName }, dispatch] = useReducer(reducer, {
    questions: quiz.getQuiz.questions.items.map((question) => {
      return {
        questionText: question.question.questionText,
        options: question.possibleAnswers.items
          .sort((optiona, optionb) => {
            if (optiona.id === question.correctAnswer.answer.id) return -1
            if (optionb.id === question.correctAnswer.answer.id) return 1
            return 0
          })
          .map((item) => item.answerText),
      }
    }),
    quizName: quiz.getQuiz.quizName,
  })
  return (
    <>
      <NavBar router={router} />
      <div className={styles.contentContainer}>
        <Typography variant="h4" className={styles.heading}>
          Edit quiz
        </Typography>
        <div>
          <TextField
            label="Quiz Name"
            value={quizName}
            onChange={(e) =>
              dispatch({
                type: 'edit-quiz-name',
                payload: { newQuizName: e.target.value },
              })
            }
          />
          <Box sx={{ float: 'right' }}>
            <Button
              sx={{ marginRight: 2 }}
              variant="contained"
              color="secondary"
              onClick={async () => {
                await deleteQuiz({ id: quiz.getQuiz.id })
                await router.push(QUIZZES_LINK)
              }}
            >
              Delete Quiz
            </Button>
            <Button
              sx={{ marginRight: 2 }}
              variant="contained"
              color="secondary"
              onClick={async () => {
                const quizId = await sendEdits(
                  quiz.getQuiz.id,
                  quizName,
                  questions,
                  quiz.getQuiz.questions.items.map((question) => question.id)
                )
                await delay(800);
                await router.push(getQuizUrl(quizId))
              }}
            >
              Finalize Edits
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => dispatch({ type: 'add-question' })}
            >
              ➕ Add a Question
            </Button>
          </Box>
        </div>
        {questions.map((question, questionNumber) => {
          return (
            <QuestionCard
              dispatch={dispatch}
              questionNumber={questionNumber}
              key={questionNumber}
              initialValue={question}
            />
          )
        })}
      </div>
    </>
  )
}

const Quiz = (props: QuizzesProps): JSX.Element => {
  const router = useRouter()
  return (
    <CommonQuiz router={router} quiz={props.quiz}>
      {props.group === COGNITO_GROUPS.ADMIN ||
      props.group === COGNITO_GROUPS.MODERATOR ? (
        <AdminModeratorQuiz
          quiz={props.quiz as GetQuizWithCorrectAnswerQuery}
        />
      ) : (
        <UserQuiz quiz={props.quiz as GetQuizQuery} />
      )}
    </CommonQuiz>
  )
}

const AdminModeratorQuiz = ({
  quiz,
}: {
  quiz: GetQuizWithCorrectAnswerQuery
}) => {
  return (
    <>
      {quiz.getQuiz.questions.items.map((question, i) => (
        <QuizQuestionCard
          question={question}
          correctAnswerId={question.correctAnswer.answer.id}
          key={i}
        />
      ))}
    </>
  )
}

const UserQuiz = ({ quiz }: { quiz: GetQuizQuery }) => {
  return (
    <>
      {quiz.getQuiz.questions.items.map((question, i) => (
        <QuizQuestionCard question={question} key={i} />
      ))}
    </>
  )
}

export default Quiz
