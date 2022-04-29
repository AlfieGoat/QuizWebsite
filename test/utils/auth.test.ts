import * as cookies from 'cookies-next'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import * as auth from '../../utils/auth'
import { COGNITO_LOGIN_URL } from '../../utils/constants'

jest.mock('react', () => {
  return {
    ...(jest.requireActual('react') as any),
    useEffect: jest.fn().mockImplementation((fn) => fn()),
  }
})
const routerPushSpy = jest.fn()
jest.mock('next/router', () => ({
  useRouter: () => ({
    isReady: true,
    push: routerPushSpy,
    asPath: JWT_PATH,
    reload: jest.fn(),
  }),
}))

const JWT_PATH =
  'https://quiz.aggoatch.people.amazon.dev/#id_token=eyJraWQiOiJPTjgyVng4XC91TmpnQXY2MXNIdmhLNmNhSUQ0ODZBZ1wvdmlpZURcL0dSWklNPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiaTM0Uy1BcmJFNVlwSWhocUhrNnVjUSIsInN1YiI6IjUzZjBmYzI5LWNmZjctNGQxZC04NDZhLTE5MmExZDliZTM5OCIsImNvZ25pdG86Z3JvdXBzIjpbImFkbWluIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9DcVJscnlHS3UiLCJjb2duaXRvOnVzZXJuYW1lIjoiYWxmaWVhZG1pbiIsImF1ZCI6Ijd2MDMzaHRzcWlwNXV0MHVodjgwcnFiazRsIiwiZXZlbnRfaWQiOiJkYzFiNjg0Ni1lOTYyLTRkNmMtODc2My0zZDliMzgxMzJiMzgiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY0MzcwNDkyMiwiZXhwIjoxNjQzNzA4NTIyLCJpYXQiOjE2NDM3MDQ5MjIsImp0aSI6IjI5YTRhMmI3LWE5MjYtNDE2Zi04N2M2LWMwNzkwMzU4ZGU0MCIsImVtYWlsIjoiYWxmcmVkMTc2ODZAZ21haWwuY29tIn0.WYMr0q5vVyqmUEt797pZGK13PUrh7fSZe1_IFfTGi2rEfM9Mer7biB4tMeuKi4xjEe0sNqNq2QW1Ro4fWrz1cly88fXlzSHuQB0xrI_LLFbeIHDpriED0JW8VG52D2pCwkbfODOhYytK_-funjrw2TmbYjIfYIB8vNXmzEX6I-m7WR6ZwmWiuL9lAovTPnGopvaIEHNW8mViB3NtiwB_F_4nXtND_8D653RG4n0SFF_1urgFgl2jI8xNpfsFfYyifOYGLbus8Z_lM0dSHmBxaJ9lpoTz9_BuHbby8B_0bjw3vccbx4VUJKcZ-o3fiDPYLOy0xoUvK1CjnrEqWvB_Ag&access_token=eyJraWQiOiJ2eU5QdUxuM0J2MmxrTmh1ZXRncFpvaTdzZkRLajFxOE01SVZBT1l2SFwvYz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1M2YwZmMyOS1jZmY3LTRkMWQtODQ2YS0xOTJhMWQ5YmUzOTgiLCJjb2duaXRvOmdyb3VwcyI6WyJhZG1pbiJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9DcVJscnlHS3UiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI3djAzM2h0c3FpcDV1dDB1aHY4MHJxYms0bCIsImV2ZW50X2lkIjoiZGMxYjY4NDYtZTk2Mi00ZDZjLTg3NjMtM2Q5YjM4MTMyYjM4IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSIsImF1dGhfdGltZSI6MTY0MzcwNDkyMiwiZXhwIjoxNjQzNzA4NTIyLCJpYXQiOjE2NDM3MDQ5MjIsImp0aSI6IjY2NjY3MDVhLWZmMTYtNDk4NS1iZGQxLWMyZGNjODkyOWZiNCIsInVzZXJuYW1lIjoiYWxmaWVhZG1pbiJ9.1LbNipknyCy1VvmlAhlfHf8VOKhgU1mNST8cOaCrpm4Ubr7QaUykq7mcea3YjCZNOjRglKP11LGD3BKikS2UpjqaxnRqXk0QRzBg8OdeeQ1KoqTzSdNyxsklTaSYixdoZ8L3x4J5Hyt3g2TTGmGazQ_bed0YjyLRnjzw6JRgJQosdLb5LM3jVfuF-Y4yxJp4dmPbcSP4c6wzTgd_Q088Xs-Z_OMyxs-INNhOzkhtkPZjR4ZBsCBjBi0vUQuFrXk1hY_grb2u_aFTgUb4p-gQI3uDkO_1TJuYNF7bVDZmcm1xtgs3xym7iBsvj06mklXJbwFwQSio05liF0ro9LPoqg&expires_in=3600&token_type=Bearer'

const JWT_EXPIRED_TOKEN =
  'eyJraWQiOiJPTjgyVng4XC91TmpnQXY2MXNIdmhLNmNhSUQ0ODZBZ1wvdmlpZURcL0dSWklNPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiaTM0Uy1BcmJFNVlwSWhocUhrNnVjUSIsInN1YiI6IjUzZjBmYzI5LWNmZjctNGQxZC04NDZhLTE5MmExZDliZTM5OCIsImNvZ25pdG86Z3JvdXBzIjpbImFkbWluIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9DcVJscnlHS3UiLCJjb2duaXRvOnVzZXJuYW1lIjoiYWxmaWVhZG1pbiIsImF1ZCI6Ijd2MDMzaHRzcWlwNXV0MHVodjgwcnFiazRsIiwiZXZlbnRfaWQiOiJkYzFiNjg0Ni1lOTYyLTRkNmMtODc2My0zZDliMzgxMzJiMzgiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY0MzcwNDkyMiwiZXhwIjoxNjQzNzA4NTIyLCJpYXQiOjE2NDM3MDQ5MjIsImp0aSI6IjI5YTRhMmI3LWE5MjYtNDE2Zi04N2M2LWMwNzkwMzU4ZGU0MCIsImVtYWlsIjoiYWxmcmVkMTc2ODZAZ21haWwuY29tIn0.WYMr0q5vVyqmUEt797pZGK13PUrh7fSZe1_IFfTGi2rEfM9Mer7biB4tMeuKi4xjEe0sNqNq2QW1Ro4fWrz1cly88fXlzSHuQB0xrI_LLFbeIHDpriED0JW8VG52D2pCwkbfODOhYytK_-funjrw2TmbYjIfYIB8vNXmzEX6I-m7WR6ZwmWiuL9lAovTPnGopvaIEHNW8mViB3NtiwB_F_4nXtND_8D653RG4n0SFF_1urgFgl2jI8xNpfsFfYyifOYGLbus8Z_lM0dSHmBxaJ9lpoTz9_BuHbby8B_0bjw3vccbx4VUJKcZ-o3fiDPYLOy0xoUvK1CjnrEqWvB_Ag'

const JWT_EXPIRED_TOKEN_COOKIE = `id_token=${JWT_EXPIRED_TOKEN};`

const SERVER_SIDE_CONTEXT = {
  req: {
    headers: {
      cookie: JWT_EXPIRED_TOKEN_COOKIE,
    },
  },
} as GetServerSidePropsContext

const REDIRECT_OBJECT = {
  redirect: {
    destination: COGNITO_LOGIN_URL,
    permanent: false,
  },
}
describe('auth', () => {
  test('can get auth group from server side context', async () => {
    expect(auth.getGroupFromContext(SERVER_SIDE_CONTEXT)).toEqual('admin')
  })

  test('can get auth group client side', async () => {
    jest
      .spyOn(auth, 'getTokenFromClientCookies')
      .mockReturnValue(JWT_EXPIRED_TOKEN)

    expect(auth.getGroupFromClient()).toEqual('admin')
  })

  test('can check if token is expired', async () => {
    expect(auth.isTokenExpired(JWT_EXPIRED_TOKEN)).toEqual(true)
  })

  test('can check if authd on server', async () => {
    expect(auth.isAuthdOnServer(SERVER_SIDE_CONTEXT)).toEqual(false)
  })

  test('can redirect if auth is neededon server side', async () => {
    expect(auth.authRedirectIfNeededOnServer(SERVER_SIDE_CONTEXT)).toEqual(
      REDIRECT_OBJECT
    )
  })

  test('can redirect if auth is neededon client side', async () => {
    jest.spyOn(cookies, 'checkCookies').mockReturnValue(false)
    jest.spyOn(cookies, 'getCookie').mockReturnValue(JWT_EXPIRED_TOKEN)
    auth.authRedirectIfNeededOnClient()
    expect(routerPushSpy).toBeCalledWith(COGNITO_LOGIN_URL)
  })

  test('can set auth cookies', async () => {
    const setCookieSpy = jest.spyOn(cookies, 'setCookies')
    auth.setAuthCookie()
    expect(setCookieSpy).toHaveBeenCalledTimes(2)
    expect(setCookieSpy).toHaveBeenCalledWith('id_token', JWT_EXPIRED_TOKEN)
  })

  test('can logout user', async () => {
    const removeCookiesSpy = jest.spyOn(cookies, 'removeCookies')
    auth.logoutClient(useRouter())
    expect(removeCookiesSpy).toHaveBeenCalledTimes(2)
    expect(removeCookiesSpy).toHaveBeenCalledWith('id_token')
    expect(removeCookiesSpy).toHaveBeenCalledWith('access_token')
  })
})
