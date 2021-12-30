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

interface QuestionOptionProps {
  index: number
  optionText: string
  correctAnswerId?: string
  optionId: string
}

const QuestionOption = (props: QuestionOptionProps): JSX.Element => {
  return (
    <div className={props.correctAnswerId === props.optionId ? styles.correctOption : null}>
      {ALPHABET[props.index]}. {props.optionText}
      <br />
    </div>
  )
}

const Question = (props: QuestionProps): JSX.Element => {
  return (
    <>
      <Typography paddingLeft={1.5} variant="subtitle1">
        {props.questionOptions.map((option, i) => (
          <QuestionOption index={i} optionText={option.optionText} optionId={option.optionId} correctAnswerId={props.correctAnswerId} key={i} />
        ))}
      </Typography>
    </>
  )
}

interface QuizQuestionCardProps {
  question: GetQuizQuery['getQuiz']['questions']['items'][0]
  correctAnswerId?: string
}

const QuizQuestionCard = (props: QuizQuestionCardProps): JSX.Element => {
  return (
    <Box sx={{ minWidth: 275, maxHeight: 100 }}>
      <Card variant="outlined">
        {' '}
        <CardContent
          style={{ maxHeight: 400, overflow: 'auto' }}
          className={styles.cardContent}
        >
          <div className={styles.question}>
            <Typography variant="h5" component="div">
              {props.question.question.questionText}
            </Typography>
          </div>
          <Question
            questionNumber={props.question.questionNumber}
            questionText={props.question.question.questionText}
            questionOptions={props.question.possibleAnswers.items.map(
              (item) => {
                return { optionText: item.answerText, optionId: item.id }
              }
            )}
            correctAnswerId={props.correctAnswerId}
          />
        </CardContent>
      </Card>
    </Box>
  )
}

export default QuizQuestionCard
