import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { ListQuizzesQuery } from '../../generated/graphql'
import NavBar from '../../sections/NavBar'
import QuizSearchCard from '../../sections/QuizSearchCard'
import QuizSearchPreview from '../../sections/QuizSearchPreview'
import SearchBar from '../../sections/SearchBar'
import { makeQuery } from '../../utils/fetch'
import {
  getTokenFromRequest,
  authRedirectIfNeededOnServer,
  logoutClient,
} from '../../utils/auth'
import styles from './index.module.scss'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const query = `query listQuizzes {
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
  }`
  console.log(context.req.headers)
  const redirect = authRedirectIfNeededOnServer(context)
  if (redirect) return redirect
  const auth = getTokenFromRequest(context)
  // const query: string = query;
  const result = (await makeQuery(query, auth)).data.data as ListQuizzesQuery
  // console.log(JSON.stringify(result))
  return {
    props: { quizzes: result }, // will be passed to the page component as props
  }
}

interface QuizzesProps {
  quizzes?: ListQuizzesQuery
  redirect?: any
}

const Quizzes = (props: QuizzesProps): JSX.Element => {
  if (props.redirect) return <></>
  const [previewQuiz, setPreviewQuiz] = useState(
    props.quizzes.listQuizzes.items[0]
  )
  const [searchText, setSearchText] = useState('')
  const router = useRouter(); 
  return (
    <>
      <NavBar router={router}/>
      <div className={styles.contentContainer}>
        <div className={styles.searchBar}>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
        </div>
        <Typography variant="h4" className={styles.heading}>
          Quizzes
        </Typography>
        <Typography variant="h5" className={styles.quizListHeading}>
          Quizzes
        </Typography>
        <div className={styles.quizContainer}>
          <div className={styles.quizSearchCards}>
            {props.quizzes.listQuizzes.items
              .filter((quiz) =>
                quiz.quizName.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((quiz, i) => {
                return (
                  <QuizSearchCard
                    quizTitle={quiz.quizName}
                    creationDate={quiz.createdAt}
                    quiz={quiz}
                    setPreviewQuiz={setPreviewQuiz}
                    key={i}
                  />
                )
              })}
          </div>
          <div className={styles.quizSearchPreview}>
            <QuizSearchPreview quiz={previewQuiz} router={router}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quizzes
