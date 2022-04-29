export const GRAPHQL_API_URL =
  'https://aarvlijmbjbsdmyk3uyspudvli.appsync-api.us-east-1.amazonaws.com/graphql'

const COGNITO_CLIENT_ID = '7v033htsqip5ut0uhv80rqbk4l'
const STATIC_SITE_URL = 'https://quiz.aggoatch.people.amazon.dev'
const COGNITO_PREFIX = 'quiz-aggoatch'

export const COGNITO_LOGIN_URL = `https://${COGNITO_PREFIX}.auth.us-east-1.amazoncognito.com/login?client_id=${COGNITO_CLIENT_ID}&response_type=token&scope=openid+profile&redirect_uri=${STATIC_SITE_URL}`

export enum COGNITO_GROUPS {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  USER = 'user',
}

export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
export const QUIZZES_LINK = '/quizzes'
export const CREATE_QUIZ_LINK = '/createQuiz'
