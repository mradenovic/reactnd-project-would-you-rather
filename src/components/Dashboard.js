import React, { Component } from 'react'
import QuestionsList from './QuestionsList'
import { Button } from '@material-ui/core'

class Dashboard extends Component {
  state = {
    answered: false  
  }

  toggleAnswered() {
    this.setState(prevState => ({ answered: !prevState.answered }))  
  } 

  render() {
    const { answered } = this.state
    const show = !answered ? 'Answered' : 'Unanswered'

    return (
      <div>
        <Button variant="contained" onClick={() => this.toggleAnswered()}>
          Show {show} Questions
        </Button>
        <div>
          <QuestionsList answered={answered} />
        </div>
      </div>
    );
  }
}

export default Dashboard
