import React, { Component } from 'react'
import { connect } from 'react-redux'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Question from './Question'

class QuestionsList extends Component {
  render() {
    const { questions, answered } = this.props
    const shown = answered ? 'Answered' : 'Unanswered'

    return (
      <div>
        <h3>List of {shown} questions </h3>
        <GridList cellHeight="auto" cols={1}>
          {questions.map(id => (
            <GridListTile key={id}>
              <Question id={id} viewType="preview"/>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
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
