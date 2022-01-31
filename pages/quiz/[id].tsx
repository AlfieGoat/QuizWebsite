import { Typography, Button, Link } from '@mui/material'
import React from 'react'
import {
  GetQuizQuery,
  GetQuizWithCorrectAnswerQuery,GetQuizDocument, GetQuizWithCorrectAnswerDocument
} from '../../generated/graphql'
import NavBar from '../../sections/NavBar'
import QuizQuestionCard from '../../sections/QuizQuestionCard'
import { makeQuery } from '../../utils/fetch'
import {
  getTokenFromRequest,
  authRedirectIfNeededOnServer,
  getGroupFromContext,
} from '../../utils/auth'
import styles from './[id].module.scss'
import { COGNITO_GROUPS } from '../../utils/constants'
import { NextRouter, useRouter } from 'next/router'
import { getHumanReadableDate } from '../../utils/getHumanReadableDate'
import { getEditQuizUrl } from '../../utils/getUrls'
import { print } from 'graphql'

export async function getServerSideProps(context) {
  const redirect = authRedirectIfNeededOnServer(context)
  if (redirect) return redirect

  const group = getGroupFromContext(context)
  let query = null
  if (group === COGNITO_GROUPS.ADMIN || group === COGNITO_GROUPS.MODERATOR)
    query = print(GetQuizWithCorrectAnswerDocument)
  else if (group === COGNITO_GROUPS.USER) query = print(GetQuizDocument)

  const auth = getTokenFromRequest(context)
  const result = (await makeQuery(query, auth, { id: context.params.id })).data
    .data as GetQuizQuery | GetQuizWithCorrectAnswerQuery
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
          <Button
            sx={{ marginLeft: 'auto', maxHeight: 36.5, minWidth: 159 }}
            variant="contained"
            color="secondary"
          >
            Edit Quiz
          </Button>
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
