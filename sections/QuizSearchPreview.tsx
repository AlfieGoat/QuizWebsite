import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styles from './QuizSearchPreview.module.scss'
import { ListQuizzesQuery } from '../generated/graphql'
import { NextRouter } from 'next/router'
import { ALPHABET } from '../utils/constants'
import { getQuizUrl } from '../utils/getUrls'
import Link from '@mui/material/Link'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

interface QuestionProps {
  questionText: string
  questionOptions: string[]
  questionNumber: number
}

interface QuestionOptionProps {
  index: number
  optionText: string
}

const QuestionOption = (props: QuestionOptionProps): JSX.Element => {
  return (
    <>
      {ALPHABET[props.index].toUpperCase()}. {props.optionText}
      <br />
    </>
  )
}

const Question = (props: QuestionProps): JSX.Element => {
  return (
    <>
      <Typography variant="body1">
        {props.questionNumber}) {props.questionText}
      </Typography>
      <Typography paddingLeft={1.5} variant="body2">
        {props.questionOptions.map((option, i) => (
          <QuestionOption index={i} optionText={option} key={i} />
        ))}
      </Typography>
    </>
  )
}

interface QuizSearchPreviewProps {
  quiz: ListQuizzesQuery['listQuizzes']['items'][0]
  router: NextRouter
}

const QuizSearchPreview = (props: QuizSearchPreviewProps): JSX.Element => {
  return (
    <Box sx={{ minWidth: 275, maxHeight: 100 }}>
      <Card variant="outlined">
        {' '}
        <CardContent style={{ maxHeight: 400, overflow: 'auto' }}>
          <div className={styles.headingDiv}>
            <Typography variant="h5" component="div">
              {props.quiz.quizName}
            </Typography>
            <div className={styles.button}>
              <Link href={getQuizUrl(props.quiz.id)} underline="none">
                <Button size="small">Open Quiz</Button>
              </Link>
            </div>
          </div>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            QuizPoint1 {bull} QuizPoint2
          </Typography>
          {props.quiz.questions.items
            .sort(
              (questionA, questionB) =>
                questionA.questionNumber - questionB.questionNumber
            )
            .map((question, i) => (
              <Question
                questionNumber={question.questionNumber}
                questionText={question.question.questionText}
                questionOptions={question.possibleAnswers.items.map(
                  (item) => item.answerText
                )}
                key={i}
              />
            ))}
        </CardContent>
      </Card>
    </Box>
  )
}

export default QuizSearchPreview
