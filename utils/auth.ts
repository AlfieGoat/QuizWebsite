import { getCookie, removeCookies, setCookies } from 'cookies-next'
import jwt_decode from 'jwt-decode'
import { GetServerSidePropsContext } from 'next'
import { NextRouter, useRouter } from 'next/router'
import { useEffect } from 'react'
import { COGNITO_LOGIN_URL } from './constants'

export const getGroupFromContext = (
  context: GetServerSidePropsContext
): string => {
  const authToken = getTokenFromRequest(context)
  const group = jwt_decode(authToken)['cognito:groups']
  if (group.length > 1) console.warn('User is part of more than 1 group')
  return group[0]
}

export const getGroupFromClient = (): string => {
  const authToken = getTokenFromClientCookies()
  if (!authToken) return
  const group = (jwt_decode(authToken) as any)['cognito:groups']
  if (group.length > 1) console.warn('User is part of more than 1 group')
  return group[0]
}

export const getTokenFromRequest = (
  context: GetServerSidePropsContext
): string | undefined => {
  const cookie = context.req.headers.cookie
    ?.split(';')
    .find((c) => c.trim().startsWith(`id_token=`))

  if (!cookie) return undefined
  return cookie.split('=')[1]
}

export const getTokenFromClientCookies = (): string | false => {
  const token = getCookie('id_token') as string | null
  if (!token) return false
  if (isTokenExpired(token)) return false
  return token
}

export const isTokenExpired = (authToken: string): boolean => {
  // If expiry is more than 30 seconds in the future then the user is auth'd
  const MINIMUM_TOKEN_LIFE_REMAINING = 30 // 30 seconds
  return (
    (jwt_decode(authToken) as any).exp - MINIMUM_TOKEN_LIFE_REMAINING <
    new Date().getTime() / 1000
  )
}

export const isAuthdOnServer = (
  context: GetServerSidePropsContext
): boolean => {
  const authToken = getTokenFromRequest(context)
  if (!authToken) return false
  return !isTokenExpired(authToken)
}

export const authRedirectIfNeededOnServer = (
  context: GetServerSidePropsContext
) => {
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
    try {
      if (isTokenExpired(getCookie('id_token') as string))
        router.push(COGNITO_LOGIN_URL)
    } catch {
      router.push(COGNITO_LOGIN_URL)
    }
  }, [router.isReady])
}

interface Auth {
  id_token: string
  access_token: string
  expires_in: string
}

export const setAuthCookie = (): void => {
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
      router.push('/')
    } catch {
      console.log('No token to set')
    }
  }, [router.isReady])
}

export const logoutClient = (router: NextRouter): void => {
  if (!router.isReady) return
  removeCookies('id_token')
  removeCookies('access_token')
  router.reload()
}
