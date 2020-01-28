import React, { Component } from 'react'

class Dashboard extends Component {
  state = {
    answered: false  
  }

  toggleAnswered() {
    this.setState(prevState => ({ answered: !prevState.answered }))  
  } 

  render() {
    const { answered } = this.state
    const shown = answered ? 'Answered' : 'Unanswered'
    const show = !answered ? 'Answered' : 'Unanswered'

    return (
      <div>
          <button onClick={() => this.toggleAnswered()}>Show {show} Questions</button>
          <div>
            List of {shown} questions 
          </div>
      </div>
    )
  }
}

export default Dashboard
