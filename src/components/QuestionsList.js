import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionsList extends Component {
  render() {
    const { answered } = this.props
    const shown = answered ? 'Answered' : 'Unanswered'

    return (
      <div>
        <h3 className='center'>List of {shown} questions </h3>
        <ul className='dashboard-list'>
          {this.props.questions.map((id) => (
            <li key={id}>
              <div>QUESTION ID: {id}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions /*, authedUser*/ }, { answered }) {
  // TODO: Remove const after implementing user authorisation
  const authedUser = 'sarahedo'

  return {
    questions: Object.keys(questions)
      .filter( id => {
        const { optionOne: { votes: one }, optionTwo: { votes: two} } = questions[id]
        return answered
          ? one.includes(authedUser) || two.includes(authedUser)
          : !one.includes(authedUser) && !two.includes(authedUser)
      })
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(QuestionsList) 
