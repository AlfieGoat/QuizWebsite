import { Button, Link, Typography } from '@mui/material'
import { print } from 'graphql'
import { GetServerSideProps } from 'next'
import { NextRouter, useRouter } from 'next/router'
import React from 'react'
import {
  GetQuizDocument,
  GetQuizQuery,
  GetQuizWithCorrectAnswerDocument,
  GetQuizWithCorrectAnswerQuery,
} from '../../generated/graphql'
import NavBar from '../../sections/NavBar'
import QuizQuestionCard from '../../sections/QuizQuestionCard'
import {
  authRedirectIfNeededOnServer,
  getGroupFromContext,
  getTokenFromRequest,
} from '../../utils/auth'
import { COGNITO_GROUPS } from '../../utils/constants'
import { makeQuery } from '../../utils/fetch'
import { getHumanReadableDate } from '../../utils/getHumanReadableDate'
import { getEditQuizUrl } from '../../utils/getUrls'
import styles from './[id].module.scss'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const redirect = authRedirectIfNeededOnServer(context)
  if (redirect) return redirect

  const group = getGroupFromContext(context)
  let query = null
  if (group === COGNITO_GROUPS.ADMIN || group === COGNITO_GROUPS.MODERATOR)
    query = print(GetQuizWithCorrectAnswerDocument)
  else if (group === COGNITO_GROUPS.USER) query = print(GetQuizDocument)

  const auth = getTokenFromRequest(context)
  const result = (
    await makeQuery(query, auth, { id: context.params.id as string })
  ).data.data as GetQuizQuery | GetQuizWithCorrectAnswerQuery
  return {
    props: { quiz: result, group }, // will be passed to the page component as props
  }
}

interface QuizzesProps {
  quiz?: GetQuizQuery | GetQuizWithCorrectAnswerQuery
  redirect?: any
  group?: COGNITO_GROUPS
}

const CommonQuiz = ({
  router,
  children,
  quiz,
}: React.PropsWithChildren<{
  router: NextRouter
  quiz: GetQuizQuery | GetQuizWithCorrectAnswerQuery
}>): JSX.Element => {
  return (
    <>
      <NavBar router={router} />
      <div className={styles.contentContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.headingContainer}>
            <Typography variant="h4">{quiz.getQuiz.quizName}</Typography>
            <div className={styles.headingRight}>
              <Typography variant="subtitle1" fontSize={20}>
                Created {getHumanReadableDate(quiz.getQuiz.createdAt)}
              </Typography>
              <Typography variant="subtitle1" fontSize={20}>
                {quiz.getQuiz.questions.items.length} question
                {quiz.getQuiz.questions.items.length > 1 ? 's' : ''}
              </Typography>
            </div>
          </div>
          <Typography variant="h5">Quiz terms</Typography>
          {children}
        </div>
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
        <>
          <Link href={getEditQuizUrl(props.quiz.getQuiz.id)} underline="none">
            {props.group === COGNITO_GROUPS.ADMIN && (
              <Button
                sx={{ marginLeft: 'auto', maxHeight: 36.5, minWidth: 159 }}
                variant="contained"
                color="secondary"
              >
                Edit Quiz
              </Button>
            )}
          </Link>
          <AdminModeratorQuiz
            quiz={props.quiz as GetQuizWithCorrectAnswerQuery}
          />
        </>
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
      {quiz.getQuiz.questions.items
        .sort(
          (questionA, questionB) =>
            questionA.questionNumber - questionB.questionNumber
        )
        .map((question, i) => (
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
