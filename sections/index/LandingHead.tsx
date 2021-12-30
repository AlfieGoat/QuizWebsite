import { Button, Typography } from '@mui/material'
import styles from './LandingHead.module.scss'
import {
  Circle,
  Triangle,
} from 'react-shapes'


interface LandingHeadProps {
  redirectToQuizzesFunc: () => void;
}

export const LandingHead = (props: LandingHeadProps): JSX.Element => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img
            src="https://image.flaticon.com/icons/png/512/748/748890.png"
            width={80}
            className={styles.logo}
          />
          <Typography
            variant="h3"
            color={'white'}
            fontWeight={'bold'}
            className={styles.top}
          >
            Funky Quizzes
          </Typography>
          <Typography
            variant="body1"
            color={'lightblue'}
            className={styles.top}
          >
            Jump in and take a look at one of our 15,000 quizzes on hundreds of
            topics such as board games and dogs.
          </Typography>
          <Typography
            variant="h5"
            color={'white'}
            className={styles.bottomText}
          >
            Have a go!
          </Typography>
          <div className={styles.buttonContainer}>
            <Button variant="contained" onClick={props.redirectToQuizzesFunc}>Take me to the Quizzes!</Button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.circle}>
            <Circle r={190} fill={{ color: '#344055' }}>
              <Triangle width={80} height={80} fill={{ color: '#FF9B20' }} />
              <Triangle width={80} height={80} fill={{ color: '#FF9B20' }} />
            </Circle>
          </div>
          <div className={styles.triangle1}>
            <Triangle width={80} height={80} fill={{ color: '#FF9B20' }} />
          </div>
          <div className={styles.triangle2}>
            <Triangle width={80} height={80} fill={{ color: '#FF9B20' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
