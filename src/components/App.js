import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { initData } from '../actions/async'
import { withRouter } from 'react-router-dom'
import Main from './Main'
import { makeStyles } from '@material-ui/core/styles'
import { withStyles } from "@material-ui/core/styles"
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}))

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

export default withRouter(connect()(withStyles(useStyles)(App)));
