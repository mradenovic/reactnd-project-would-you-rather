import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../reducers/authedUser'

import { 
  AppBar,
  Toolbar,
  Button,
  Avatar,
  Typography,
  Tabs,
  Tab
} from '@material-ui/core'

function Header(props) {
  const history = useHistory()
  const { user, dispatch } = props
  const [ index, setIndex ] = React.useState(0)

  const handleChange = (event, value) => {
    const routes = ['/', '/add', '/leaderboard']
    setIndex(value)
    history.push(routes[value])
  }

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
      <Tabs value={index} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Home"  />
        <Tab label="New Question" />
        <Tab label="Leader Board" />
      </Tabs>
    </AppBar>
  )
}

function mapStateToProps({ users, authedUser }) {
  return {
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(Header)