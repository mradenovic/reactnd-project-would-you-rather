import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../reducers/authedUser'
import HeaderLinks from './HeaderLinks'

import { 
  AppBar,
  Toolbar,
  Button,
  Avatar,
  Typography,
} from '@material-ui/core'

function Header(props) {
  const { user, dispatch } = props

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flex: 1}}>
          Would you rather...
        </Typography>
        {user && 
          <Button color="inherit" onClick={() => dispatch(logOut())}>
            Logout {user.name}
            <Avatar src={user.avatarURL} aria-label={user.name}>
              {user.name}
            </Avatar>
          </Button>
        }
      </Toolbar>
      
      <HeaderLinks />
    </AppBar>
  )
}

function mapStateToProps({ users, authedUser }) {
  return {
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(Header)