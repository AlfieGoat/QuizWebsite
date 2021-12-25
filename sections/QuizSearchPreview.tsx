import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styles from './QuizSearchPreview.module.scss'
import { MyQuery2Query } from '../generated/graphql'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

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

const Question = (props: QuestionProps): JSX.Element => {
  return (
    <>
      <Typography variant="body1">
        {props.questionNumber}) {props.questionText}
      </Typography>
      <Typography paddingLeft={1.5} variant="body2">
        {props.questionOptions.map((option, i) => (
          <>
            {ALPHABET[i]}. {option}<br/>
          </>
        ))}
      </Typography>
    </>
  )
}

interface QuizSearchPreviewProps {
  quiz: MyQuery2Query['listQuizzes']['items'][0]
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
              <Button size="small">Open Quiz</Button>
            </div>
          </div>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            QuizPoint1 {bull} QuizPoint2
          </Typography>
          {props.quiz.questions.items.map((question, i) => (
            <Question
              questionNumber={question.questionNumber}
              questionText={question.question.questionText}
              questionOptions={question.possibleAnswers.items.map(item => item.answerText)}
              key={i}
            />
          ))}
        </CardContent>
      </Card>
    </Box>
  )
}

export default QuizSearchPreview
