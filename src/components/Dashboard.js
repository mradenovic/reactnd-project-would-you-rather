import React, { Component } from 'react'
import QuestionsList from './QuestionsList'
import {
  Tabs,
  Tab
} from '@material-ui/core'

class Dashboard extends Component {
  state = {
    answered: false,
    index: 0
  }

  handleChange(event, value) {
    this.setState(prevState => ({
      answered: !prevState.answered,
      index: !prevState.answered
        ? 1
        : 0
    }))
  }

  render() {
    const { answered, index } = this.state

    return (
      <div>
        <Tabs value={index} onChange={() => this.handleChange()} aria-label="simple tabs example">
          <Tab label="Unanswered"  />
          <Tab label="Answered"  />
        </Tabs>
        <div>
          <QuestionsList answered={answered} />
        </div>
      </div>
    )
  }
}

export default Dashboard
