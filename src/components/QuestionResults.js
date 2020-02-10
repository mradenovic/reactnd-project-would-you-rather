import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import QuestionOption from './QuestionOption'

function QuestionResults(props) {
  const {question: { optionOne, optionTwo }} = props
  const one = optionOne.votes.length
  const two = optionTwo.votes.length
  const totalVotes = one + two

  return (
    <div>
      <Typography variant="h5">
        Results:
      </Typography>
      <QuestionOption option={optionOne} totalVotes={totalVotes} />
      <QuestionOption option={optionTwo} totalVotes={totalVotes} />
    </div>
  )
}

QuestionResults.propTypes = {
  question: PropTypes.object.isRequired
}

export default QuestionResults