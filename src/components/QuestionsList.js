import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionsList extends Component {
  render() {
    const { questions } = this.props

    return (
      <div>
        {questions.map(id => (
            <Question key={id} id={id} viewType="preview"/>
        ))}
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser }, { answered }) {
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
