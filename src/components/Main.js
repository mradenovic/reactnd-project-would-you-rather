import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'

function Main(props) {

  return (
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>

        <Route path="/questions/:question_id" component={QuestionPage} />

        <Route path="/add">Add New Question</Route>

        <Route path="/leaderboard">LeaderBoard</Route>

        <Route path="*">Error</Route>
      </Switch>
    )
}

export default Main