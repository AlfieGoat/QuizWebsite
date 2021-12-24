import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styles from './QuizSearchCard.module.scss'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

interface QuizSearchCardProps {
  quizTitle: string;
  creationDate: string;
}

export default function QuizSearchCard(props: QuizSearchCardProps): JSX.Element {
  return (
    <Box sx={{ minWidth: 275 }} paddingBottom={2}>
      <Card variant="outlined"><CardContent>
      <div className={styles.headingDiv}>
        <Typography variant="h5" component="div">
          {props.quizTitle}
        </Typography>
        <div className={styles.button}>
        <Button size="small" >Preview</Button>
        </div>
      </div>
      <Typography sx={{ mb: 1.5, fontSize: 11 }} color="text.secondary">
        {bull}
      </Typography>
      <Typography variant="body2">
        Created at: {props.creationDate}
      </Typography>
    </CardContent></Card>
    </Box>
  )
}
