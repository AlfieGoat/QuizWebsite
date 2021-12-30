import { NextRouter } from "next/router";

export const openQuiz = (quizId: string, router: NextRouter) => {
  if (!router.isReady) return
  router.push(`quiz/${quizId}`)
}