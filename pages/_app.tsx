import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './global.scss'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { authRedirectIfNeededOnClient, setAuthCookie } from '../utils/auth'
import { AppProps } from 'next/app'

const theme = createTheme({
  palette: {
    primary: {
      main: '#344055',
    },
    secondary: {
      main: '#006DFD',
    },
  },
})

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  setAuthCookie()
  authRedirectIfNeededOnClient()
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
