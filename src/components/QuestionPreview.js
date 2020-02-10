import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

function QuestionPreview(props) {
  const {question} = props

  return (
    <div>
      <Typography variant="h6">
        Would you rather...
      </Typography>
      <Typography>
        ...{question.optionOne.text.substring(0, 15)}...
      </Typography>
      <Link to={`/questions/${question.id}`}>
        <Button variant="contained">View Poll</Button>
      </Link>
    </div>
  )
}

export default QuestionPreview