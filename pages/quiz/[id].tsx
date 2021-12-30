import { Typography } from '@mui/material'
import React, { useState } from 'react'
import {
  GetQuizQuery,
  GetQuizWithCorrectAnswerQuery,
  ListQuizzesQuery,
} from '../../generated/graphql'
import NavBar from '../../sections/NavBar'
import QuizSearchCard from '../../sections/QuizSearchCard'
import QuizSearchPreview from '../../sections/QuizSearchPreview'
import SearchBar from '../../sections/SearchBar'
import QuizQuestionCard from '../../sections/QuizQuestionCard'
import { makeQuery } from '../../utils/fetch'
import {
  getTokenFromRequest,
  authRedirectIfNeededOnServer,
  getGroup,
} from '../../utils/auth'
import styles from './[id].module.scss'
import { COGNITO_GROUPS } from '../../utils/constants'
import { NextRouter, useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const redirect = authRedirectIfNeededOnServer(context)
  if (redirect) return redirect
  const getQuiz = `query getQuiz($id: ID!) {
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
  }`

  const getQuizWithCorrectAnswer = `query getQuizWithCorrectAnswer($id: ID!) {
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
  }`

  const group = getGroup(context)
  let query = null
  if (group === COGNITO_GROUPS.ADMIN || group === COGNITO_GROUPS.MODERATOR)
    query = getQuizWithCorrectAnswer
  else if (group === COGNITO_GROUPS.USER) query = getQuiz

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
                {quiz.getQuiz.createdAt}
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
  console.log(props.quiz.getQuiz.questions)
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
