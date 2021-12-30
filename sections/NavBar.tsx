import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { logoutClient } from '../utils/auth';
import { NextRouter } from 'next/router';

export default function ButtonAppBar({router}: {router: NextRouter}): JSX.Element {
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quizzes
          </Typography>
          <Button color="inherit" onClick={() => logoutClient(router)}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}