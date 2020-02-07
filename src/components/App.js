import React, { Component } from 'react';
import { connect } from 'react-redux'
import { initData } from '../actions/async'
import { withRouter } from 'react-router-dom'
import Header from './Header'
import LogIn from './LogIn'
import PageLoading from './PageLoading'
import Main from './Main'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(initData())
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Container maxWidth="sm">
          <header><Header /></header>
          <main>
            {
              this.props.loading
                ? <PageLoading />
                : !this.props.authedUser
                  ? <LogIn />
                  : <Main />
            }
          </main>
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
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ loading, authedUser }) {
  return {
    authedUser,
    loading
  }
}

export default withRouter(connect(mapStateToProps)(App))
