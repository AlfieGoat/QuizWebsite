// import App from 'next/app'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './global.scss'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { authRedirectIfNeededOnClient, setAuthCookie } from '../utils/auth'

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

function MyApp({ Component, pageProps }) {
  setAuthCookie()
  authRedirectIfNeededOnClient();
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
