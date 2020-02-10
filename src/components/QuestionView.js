import React from 'react'
import PropTypes from 'prop-types'
import QuestionPreview from './QuestionPreview'
import QuestionResults from './QuestionResults'
import QuestionVote from './QuestionVote'

function QuestionView(props) {
  const { question, viewType } = props

  switch (viewType) {
    case 'preview':
      return <QuestionPreview question={question} />
    case 'vote':
      return <QuestionVote question={question} />
    case 'poll':
      return <QuestionResults question={question} />
    default:
      return 'Error'
  }
}

QuestionView.propTypes = {
  question: PropTypes.object.isRequired,
  viewType: PropTypes.oneOf(['preview', 'vote', 'poll'])
}

export default QuestionView
