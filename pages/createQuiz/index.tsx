import { Button, Typography } from '@mui/material'
import { ListQuizzesQuery } from '../../generated/graphql'
import NavBar from '../../sections/NavBar'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import TextField from '@mui/material/TextField'
import React, { useReducer } from 'react'
import Question from '../../sections/QuizCreateQuestion'

interface QuizzesProps {
  quizzes?: ListQuizzesQuery
  redirect?: any
}

interface Question {
  questionText: string
  options: string[]
}

interface State {
  questions: Question[]
}

export type Action =
  | { type: 'add-question' }
  | { type: 'remove-question'; payload: { questionNumber: number } }
  | {
      type: 'edit-question-text'
      payload: { questionNumber: number; newQuestionText: string }
    }
  | {
      type: 'edit-question-option-text'
      payload: {
        questionNumber: number
        optionNumber: number
        newOptionText: string
      }
    }

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'add-question':
      return {
        questions: [
          ...state.questions,
          { questionText: '', options: ['', '', '', ''] },
        ],
      }
    case 'remove-question': {
      const newQuestions = state.questions
      newQuestions.splice(action.payload.questionNumber, 1)
      return {
        questions: newQuestions,
      }
    }
    case 'edit-question-text':
      return {
        questions: state.questions.map((question, questionNumber) =>
          questionNumber === action.payload.questionNumber
            ? { ...question, questionText: action.payload.newQuestionText }
            : question
        ),
      }
    case 'edit-question-option-text':
      return {
        questions: state.questions.map((question, questionNumber) =>
          questionNumber === action.payload.questionNumber
            ? {
                ...question,
                options: question.options.map((option, optionNumber) =>
                  optionNumber === action.payload.optionNumber
                    ? action.payload.newOptionText
                    : option
                ),
              }
            : question
        ),
      }
    default:
      return state
  }
}

const CreateQuiz = (props: QuizzesProps): JSX.Element => {
  if (props.redirect) return <></>
  const router = useRouter()

  const [{ questions }, dispatch] = useReducer(reducer, {
    questions: [{ questionText: '', options: ['', '', '', ''] }],
  })

  return (
    <>
      <NavBar router={router} />
      {JSON.stringify(questions)}
      <div className={styles.contentContainer}>
        <Typography variant="h4" className={styles.heading}>
          Create a quiz
        </Typography>
        <TextField label="Quiz Name" />
        <Button onClick={() => dispatch({ type: 'add-question' })}>
          Add a Question
        </Button>
        {questions.map((question, questionNumber) => {
          return (
            <Question dispatch={dispatch} questionNumber={questionNumber} key={questionNumber}/>
          )
        })}
        <Button onClick={() => sendFormData(formState)}>Send</Button>
      </div>
    </>
  )
}

export default CreateQuiz
