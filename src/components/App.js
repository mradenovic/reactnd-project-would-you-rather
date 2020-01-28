import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { initData } from '../actions/async'
import { withRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    console.log('component did mount')
    this.props.dispatch(initData())
  }

  render() {
    return (
      <div className="App">
        <header>
          Would you rather...
        </header>

        <Switch>
          <Route exact path="/">
            Dashboard
          </Route>

          <Route path="/questions/:question_id">
            Question
          </Route>

          <Route path="/add">
            Add New Question
          </Route>

          <Route path="/leaderboard">
            LeaderBoard
          </Route>

          <Route path="*">
            Error
          </Route>
        </Switch>

        <footer>
          Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a>
        </footer>
      </div>
    );
  }
}

export default withRouter(connect()(App));
