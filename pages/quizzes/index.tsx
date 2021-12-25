import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { MyQuery2Query } from '../../generated/graphql'
import NavBar from '../../sections/NavBar'
import QuizSearchCard from '../../sections/QuizSearchCard'
import QuizSearchPreview from '../../sections/QuizSearchPreview'
import SearchBar from '../../sections/search'
import { makeQuery } from '../../utils/fetch'
import { getTokenFromRequest, authRedirectIfNeededOnServer } from '../../utils/auth'
import styles from './index.module.scss'


export async function getServerSideProps(context) {

  const query = `query MyQuery2 {
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
  const redirect = authRedirectIfNeededOnServer(context)
  if (redirect) return redirect;
  const auth = getTokenFromRequest(context)
  // const query: string = query;
  const result = (await makeQuery(query, auth)).data.data as MyQuery2Query
  // console.log(JSON.stringify(result))
  return {
    props: { quizzes: result }, // will be passed to the page component as props
  }
}

interface QuizzesProps {
  quizzes?: MyQuery2Query;
  redirect?: any;
}

const Quizzes = (props: QuizzesProps): JSX.Element => {
  if (props.redirect) return <></>
  console.log(JSON.stringify(props));
  const [previewQuiz, setPreviewQuiz] = useState(props.quizzes.listQuizzes.items[0]);
  return (
    <>
      <NavBar />
      <div className={styles.contentContainer}>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <Typography variant="h4" className={styles.heading}>
          Quizzes
        </Typography>
        <Typography variant="h5" className={styles.quizListHeading}>
          Quizzes
        </Typography>
        <div className={styles.quizContainer}>
          <div className={styles.quizSearchCards}>
            {props.quizzes.listQuizzes.items.map((quiz, i) => {
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
            <QuizSearchPreview quiz={previewQuiz}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quizzes
