import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import MenuIcon from '@mui/icons-material/Menu'
import { getGroupFromClient, logoutClient } from '../utils/auth'
import { NextRouter } from 'next/router'
import {
  COGNITO_GROUPS,
  CREATE_QUIZ_LINK,
  QUIZZES_LINK,
} from '../utils/constants'

export default function NavBar({
  router,
}: {
  router: NextRouter
}): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Link color="white" href={QUIZZES_LINK} underline="none">
              <Button color="inherit">Quizzes</Button>
            </Link>
          </Box>
          {getGroupFromClient() === COGNITO_GROUPS.ADMIN && (
            <Link color="white" href={CREATE_QUIZ_LINK} underline="none">
              <Button color="inherit">Create a quiz</Button>
            </Link>
          )}

          <Button color="inherit" onClick={() => logoutClient(router)}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
