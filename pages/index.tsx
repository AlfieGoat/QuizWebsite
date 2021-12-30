import { LandingHead } from '../sections/index/LandingHead'
import { useRouter } from 'next/router'

export const Home = (): JSX.Element => {
  const router = useRouter()
  const redirectToQuizzes = (): void => {
      if (!router.isReady) return
        router.push("quizzes")
  }
  return (
      <LandingHead redirectToQuizzesFunc={redirectToQuizzes}/>
  )
}

export default Home
