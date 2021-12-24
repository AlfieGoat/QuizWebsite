import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './QuizSearchPreview.module.scss';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Question = (): JSX.Element => {
  return (
    <>
    <Typography variant="body1">
    1) What breed is Heidi
  </Typography>
  <Typography paddingLeft={1.5} variant="body2">
    a. Golden retriever <br/>
    b. Vizsla <br/>
    c. Beagle <br/>
    d. Lab
  </Typography>
  </>
  )
}

const card = (
  <React.Fragment>
    <CardContent style={{maxHeight:400, overflow: 'auto'}}>
    <div className={styles.headingDiv}>
        <Typography variant="h5" component="div">
          Quiz Name
        </Typography>
        <div className={styles.button}>
        <Button size="small" >Open Quiz</Button>
        </div>
      </div>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        QuizPoint1 {bull} QuizPoint2
      </Typography>
      <Question/>
      <Question/>
      <Question/>
      <Question/>
    </CardContent>
  </React.Fragment>
);

const QuizSearchPreview = (): JSX.Element => {
  return (
    <Box sx={{ minWidth: 275, maxHeight: 100 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

export default QuizSearchPreview;