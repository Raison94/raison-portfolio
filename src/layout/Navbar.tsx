import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          component={NavLink}
          to="/"
          end
          color="inherit"
          aria-label="Home"
          sx={{ fontSize: '1.5rem' }}
        >
          <FontAwesomeIcon icon={faCode} aria-hidden="true" />
        </IconButton>
        <Box component="nav" aria-label="Main navigation" sx={{ ml: 'auto' }}>
          <Button component={NavLink} to="/about" color="inherit">
            About Me
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
