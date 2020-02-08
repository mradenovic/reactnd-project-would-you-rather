import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  Tabs,
  Tab  
} from '@material-ui/core'

function HeaderLinks() {
  const history = useHistory()
  const pathname = useLocation().pathname
  const routes = ['/', '/add', '/leaderboard']
  const routeIndex = routes.indexOf(pathname)
  const index = routeIndex === -1 ? 3 : routeIndex

  const handleChange = (event, value) => {
    history.push(routes[value])
  }

  return (
    <Tabs value={index} onChange={handleChange} aria-label="simple tabs example">
      <Tab label="Home"  />
      <Tab label="New Question" />
      <Tab label="Leader Board" />
      <Tab label="Invisible" style={{ display: 'none'}} />
    </Tabs>
  )    
}

export default HeaderLinks