import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { initData } from '../actions/async'
import { withRouter } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    console.log('component did mount')
    this.props.dispatch(initData())
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
      </div>
    );
  }
}

export default withRouter(connect()(App));
