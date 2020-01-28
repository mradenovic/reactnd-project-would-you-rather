import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'

export default function Main() {

  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>

      <Route path="/questions/:question_id">Question</Route>

      <Route path="/add">Add New Question</Route>

      <Route path="/leaderboard">LeaderBoard</Route>

      <Route path="*">Error</Route>
    </Switch>
  )
}
