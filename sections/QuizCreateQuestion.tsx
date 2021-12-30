import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import styles from './QuizQuestionCard.module.scss'
import { GetQuizQuery } from '../generated/graphql'
import TextField from '@mui/material/TextField'
import { ALPHABET} from '../utils/constants'
import { Action } from '../pages/createQuiz/index'

const Question = ({
  questionNumber,
  dispatch
}: {
  dispatch: (value: Action) => void,
  questionNumber: number
}): JSX.Element => {
  return (
    <Box sx={{ minWidth: 275, maxHeight: 100 }} key={questionNumber}>
      <Card variant="outlined">
        <CardContent
          style={{ maxHeight: 400, overflow: 'auto' }}
          className={styles.cardContent}
        >
          <div className={styles.question}>
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
              label={`Question ${questionNumber}`}
              variant="standard"
            />
          </div>
          {[1, 1, 1, 1].map((optionTextRef, optionNumber) => (
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
              label={`Option ${ALPHABET[optionNumber]}`}
              variant="standard"
              key={optionNumber}
            />
          ))}
        </CardContent>
      </Card>
    </Box>
  )
}

export default Question;