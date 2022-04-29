import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import styles from './QuizQuestionCard.module.scss'
import { GetQuizQuery } from '../generated/graphql'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

interface QuestionProps {
  questionText: string
  questionOptions: { optionText: string; optionId: string }[]
  questionNumber: number
  correctAnswerId?: string
}

const Question = (props: QuestionProps): JSX.Element => {
  return (
    <Box
      sx={{ minWidth: 275, maxHeight: 300, paddingTop: 3 }}
      key={props.questionNumber}
    >
      <Card variant="outlined">
        <CardContent style={{ maxHeight: 400, overflow: 'auto' }}>
          <div className={styles.questionCardHeader}>
            <Typography variant="h6">{`${props.questionNumber}) ${props.questionText}`}</Typography>
          </div>
          <div className={styles.optionsContainer}>
            {props.questionOptions.map((questionOption, optionNumber) => (
              <Typography
                className={
                  props.correctAnswerId === questionOption.optionId
                    ? styles.correctOption
                    : null
                }
                key={optionNumber}
              >
                {ALPHABET[optionNumber]}) {questionOption.optionText}
              </Typography>
            ))}
          </div>
        </CardContent>
      </Card>
    </Box>
  )
}

interface QuizQuestionCardProps {
  question: GetQuizQuery['getQuiz']['questions']['items'][0]
  correctAnswerId?: string
}

const QuizQuestionCard = (props: QuizQuestionCardProps): JSX.Element => {
  return (
    <Question
      questionNumber={props.question.questionNumber}
      questionText={props.question.question.questionText}
      questionOptions={props.question.possibleAnswers.items.map((item) => {
        return { optionText: item.answerText, optionId: item.id }
      })}
      correctAnswerId={props.correctAnswerId}
    />
  )
}

export default QuizQuestionCard
