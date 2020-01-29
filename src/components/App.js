import React, { Component } from 'react';
import { connect } from 'react-redux'
import { initData } from '../actions/async'
import { withRouter } from 'react-router-dom'
import Main from './Main'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'


class App extends Component {
  componentDidMount() {
    console.log('component did mount')
    this.props.dispatch(initData())
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Container maxWidth="lg">
          <header>Would you rather...</header>
          <main>
            <Main />
          </main>
        </Container>
        <footer>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/roundicons"
            title="Roundicons"
          >
            Roundicons
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </footer>
      </div>
    );
  }
}

export default withRouter(connect()(App));
