import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import * as React from 'react'
import { Action, Question } from '../pages/createQuiz/index'
import styles from './QuizCreateQuestion.module.scss'

const Question = ({
  questionNumber,
  dispatch,
  initialValue,
}: {
  dispatch: (value: Action) => void
  questionNumber: number
  initialValue: Question
}): JSX.Element => {
  return (
    <Box
      sx={{ minWidth: 275, maxHeight: 300, paddingTop: 3 }}
      key={questionNumber}
    >
      <Card variant="outlined">
        <CardContent style={{ maxHeight: 400, overflow: 'auto' }}>
          <div>
            <TextField
              onChange={(e) =>
                dispatch({
                  type: 'edit-question-text',
                  payload: {
                    questionNumber,
                    newQuestionText: e.target.value,
                  },
                })
              }
              label={`Question ${questionNumber + 1}`}
              variant="outlined"
              sx={{ width: '50%' }}
              value={initialValue ? initialValue.questionText : null}
            />
            <Button
              sx={{ float: 'right' }}
              variant="contained"
              color="secondary"
              onClick={() =>
                dispatch({
                  type: 'remove-question',
                  payload: { questionNumber },
                })
              }
            >
              ➖ Question
            </Button>
            <Button
              sx={{ float: 'right' }}
              variant="contained"
              color="secondary"
              onClick={() =>
                dispatch({
                  type: 'remove-option',
                  payload: { questionNumber },
                })
              }
            >
              ➖ option
            </Button>
            <Button
              sx={{ float: 'right' }}
              variant="contained"
              color="secondary"
              onClick={() =>
                dispatch({
                  type: 'add-option',
                  payload: { questionNumber },
                })
              }
            >
              ➕ Option
            </Button>
          </div>
          <div className={styles.optionsContainer}>
            {initialValue.options.map((option, optionNumber) =>
              <TextField
                onChange={(e) =>
                  dispatch({
                    type: 'edit-question-option-text',
                    payload: {
                      questionNumber,
                      optionNumber,
                      newOptionText: e.target.value,
                    },
                  })
                }
                label={
                  optionNumber === 0
                    ? '✅ Correct Option'
                    : '❌ Incorrect Option'
                }
                value={option}
                variant="standard"
                key={optionNumber}
              />
            )}
          </div>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Question
