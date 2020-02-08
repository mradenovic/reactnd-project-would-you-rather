import React, { Component } from 'react';
import { connect } from 'react-redux'
import { initData } from '../actions/async'
import Header from './Header'
import LogIn from './LogIn'
import PageLoading from './PageLoading'
import Main from './Main'
import Footer from './Footer'
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
            <Footer />
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

export default connect(mapStateToProps)(App)
