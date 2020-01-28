import React, { Component } from 'react'
import QuestionsList from './QuestionsList'

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
          <button onClick={() => this.toggleAnswered()}>Show {show} Questions</button>
          <div>
            <QuestionsList answered={answered}/>
          </div>
      </div>
    )
  }
}

export default Dashboard
