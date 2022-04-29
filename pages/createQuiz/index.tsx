import { Box, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/router'
import React, { useReducer } from 'react'
import { ListQuizzesQuery } from '../../generated/graphql'
import NavBar from '../../sections/NavBar'
import Question from '../../sections/QuizCreateQuestion'
import { delay } from '../../utils/delay'
import { getQuizUrl } from '../../utils/getUrls'
import { createQuizWithQuestions } from '../../utils/graphQlMutations'
import styles from './index.module.scss'

interface QuizzesProps {
  quizzes?: ListQuizzesQuery
  redirect?: any
}

export interface Question {
  questionText: string
  options: string[]
}

export interface State {
  questions: Question[]
  quizName: string
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
  | {
      type: 'edit-quiz-name'
      payload: {
        newQuizName: string
      }
    }
  | {
      type: 'add-option'
      payload: {
        questionNumber: number
      }
    }
  | {
      type: 'remove-option'
      payload: {
        questionNumber: number
      }
    }

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add-question':
      return {
        ...state,
        questions: [
          ...state.questions,
          { questionText: '', options: ['', '', '', ''] },
        ],
      }
    case 'remove-question': {
      const newQuestions = state.questions
      newQuestions.splice(action.payload.questionNumber, 1)
      return {
        ...state,
        questions: newQuestions,
      }
    }
    case 'edit-question-text':
      return {
        ...state,
        questions: state.questions.map((question, questionNumber) =>
          questionNumber === action.payload.questionNumber
            ? { ...question, questionText: action.payload.newQuestionText }
            : question
        ),
      }
    case 'edit-question-option-text':
      return {
        ...state,
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
    case 'edit-quiz-name':
      return {
        ...state,
        quizName: action.payload.newQuizName,
      }
    case 'add-option':
      return {
        ...state,
        questions: state.questions.map((question, questionNumber) => {
          if (questionNumber === action.payload.questionNumber) {
            if (question.options.length >= 5) return question
            return {
              ...question,
              options: [...question.options, ''],
            }
          }
          return question
        }),
      }
    case 'remove-option':
      return {
        ...state,
        questions: state.questions.map((question, questionNumber) => {
          if (questionNumber === action.payload.questionNumber) {
            if (question.options.length <= 3) return question
            return {
              ...question,
              options: [
                ...question.options.slice(0, question.options.length - 1),
              ],
            }
          }
          return question
        }),
      }
    default:
      return state
  }
}

const CreateQuiz = (props: QuizzesProps): JSX.Element => {
  if (props.redirect) return <></>
  const router = useRouter()

  const [{ questions, quizName }, dispatch] = useReducer(reducer, {
    questions: [{ questionText: '', options: ['', '', '', ''] }],
    quizName: '',
  })

  return (
    <>
      <NavBar router={router} />
      <div className={styles.contentContainer}>
        <Typography variant="h4" className={styles.heading}>
          Create a quiz
        </Typography>
        <div>
          <TextField
            label="Quiz Name"
            onChange={(e) =>
              dispatch({
                type: 'edit-quiz-name',
                payload: { newQuizName: e.target.value },
              })
            }
          />
          <Box sx={{ float: 'right' }}>
            <Button
              sx={{ marginRight: 2 }}
              variant="contained"
              color="secondary"
              onClick={async () => {
                const quizId = await createQuizWithQuestions(questions, quizName)
                await delay(800);
                await router.push(getQuizUrl(quizId))
              }}
            >
              Create Quiz
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => dispatch({ type: 'add-question' })}
            >
              ➕ Add a Question
            </Button>
          </Box>
        </div>
        {questions.map((question, questionNumber) => {
          return (
            <Question
              dispatch={dispatch}
              questionNumber={questionNumber}
              key={questionNumber}
              initialValue={question}
            />
          )
        })}
      </div>
    </>
  )
}

export default CreateQuiz
