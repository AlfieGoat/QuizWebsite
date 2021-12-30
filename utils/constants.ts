export const GRAPHQL_API_URL =
  'https://aarvlijmbjbsdmyk3uyspudvli.appsync-api.us-east-1.amazonaws.com/graphql'

export const COGNITO_LOGIN_URL = 'https://quiz-aggoatch.auth.us-east-1.amazoncognito.com/login?client_id=7v033htsqip5ut0uhv80rqbk4l&response_type=token&scope=openid+profile&redirect_uri=https://quiz.aggoatch.people.amazon.dev';

export enum COGNITO_GROUPS {
  ADMIN = "admin",
  MODERATOR = "moderator",
  USER = "user",
}

export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'