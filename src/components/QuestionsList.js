import React, { Component } from 'react'
import { connect } from 'react-redux'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Question from './Question'

class QuestionsList extends Component {
  render() {
    const { questions } = this.props

    return (
      <div>
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
