import jwt_decode from 'jwt-decode'
import { COGNITO_LOGIN_URL } from './constants'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { checkCookies, getCookie, setCookies } from 'cookies-next'

export const getTokenFromRequest = (context) => {
  const cookie = context.req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith(`id_token=`))

  if (!cookie) return undefined
  return cookie.split('=')[1]
}

export const isTokenExpired = (authToken: string): boolean => {
  // If expiry is more than 30 seconds in the future then the user is auth'd
  const MINIMUM_TOKEN_LIFE_REMAINING = 30 // 30 seconds
  return (
    (jwt_decode(authToken) as any).exp - MINIMUM_TOKEN_LIFE_REMAINING <
    new Date().getTime() / 1000
  )
}

export const isAuthdOnServer = (context) => {
  const authToken = getTokenFromRequest(context)
  if (!authToken) return false
  return !isTokenExpired(authToken)
}

export const authRedirectIfNeededOnServer = (context) => {
  if (!isAuthdOnServer(context)) {
    return {
      redirect: {
        destination: COGNITO_LOGIN_URL,
        permanent: false,
      },
    }
  }
  return false
}

export const authRedirectIfNeededOnClient = (): void => {
  const router = useRouter()
  useEffect(() => {
    if (!router.isReady) return
    if (!checkCookies('id_token', { maxAge: 3600 }))
      router.push(COGNITO_LOGIN_URL)
    if (isTokenExpired(getCookie('id_token') as string))
      router.push(COGNITO_LOGIN_URL)
  }, [router.isReady])
}

interface Auth {
  id_token: string
  access_token: string
  expires_in: string
}

export const setAuthCookie = () => {
  const router = useRouter()

  useEffect(() => {
    try {
      if (!router.isReady) return
      const { id_token, access_token } = Object.fromEntries(
        router.asPath
          .split('#')[1]
          .split('&')
          .map((item) => item.split('='))
      ) as Auth
      setCookies('id_token', id_token)
      setCookies('access_token', access_token)
      console.log(jwt_decode(id_token))
      router.push('/')
    } catch {
      console.log('No token to set')
    }
  }, [router.isReady])
}
