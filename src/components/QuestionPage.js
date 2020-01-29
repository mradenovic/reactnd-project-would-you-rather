import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'

function QuestionPage(props) {
  const { id, viewType } = props

  return (
    <div>
      <Question id={id} viewType={viewType}/>
    </div>  
  )  
}

function mapStateToProps({questions /*, authedUser */ }, {match: {params: {question_id : id}}}) {
  // TODO: Remove const after implementing user authorisation
  const authedUser = 'sarahedo'

  const question = questions[id]
  if (!question) return { id, viewType: null}
  
  const { optionOne: { votes: one }, optionTwo: { votes: two} } = questions[id]
  const viewType = one.includes(authedUser) || two.includes(authedUser)
    ? 'poll'
    : 'vote'

  return { id, viewType }
}

export default connect(mapStateToProps)(QuestionPage)