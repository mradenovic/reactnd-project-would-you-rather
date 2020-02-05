import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import Page404 from './Page404'

function Main(props) {

  return (
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>

        <Route path="/questions/:question_id" component={QuestionPage} />

        <Route path="/add">Add New Question</Route>

        <Route path="/leaderboard">LeaderBoard</Route>

        <Route path="*" component={Page404} />
      </Switch>
    )
}

export default Main