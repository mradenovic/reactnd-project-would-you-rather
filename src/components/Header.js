import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../reducers/authedUser'
import HeaderLinks from './HeaderLinks'

import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Button,
  Avatar,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  avatar: {
    padding: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
  }
}))

function Header(props) {
  const classes = useStyles()
  const { user, dispatch } = props

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Would you rather...
        </Typography>
        <Typography >
          {user && user.name}
        </Typography>
        {user &&
          <Avatar className={classes.avatar} src={user.avatarURL} aria-label={user.name} />
        }
        {user && (
          <Button color="inherit" onClick={() => dispatch(logOut())}>
            Logout
          </Button>
        )}
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