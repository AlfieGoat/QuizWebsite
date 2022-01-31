export const getQuizUrl = (quizId: string): string => {
    return `/quiz/${quizId}`
}

export const getEditQuizUrl = (quizId: string): string => {
    return `/editQuiz/${quizId}`
}