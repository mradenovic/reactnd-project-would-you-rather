import React from 'react'
import { connect } from 'react-redux'
import {
  Typography,
  LinearProgress,
  Chip } from '@material-ui/core'

function QuestionOption(props) {
  const { totalVotes, authedUser } = props
  const { text, votes } = props.option
  const votesCount = votes.length
  const voted = votes.includes(authedUser)
  const percentage = Math.floor(votesCount * 100 / totalVotes)
  const background = voted
    ? 'PowderBlue'
    : 'inherit'

  return (
    <div style={{background: background}}>
      {voted && <Chip color="primary" label="Your vote!" />}  
      <Typography color="textSecondary" variant="h6">
        Would you rather {text}
      </Typography>
      <LinearProgress variant="determinate" value={percentage} />
      <Typography>
        {votesCount} out of {totalVotes} vote(s) ({percentage}%)
      </Typography>
    </div>
  )
}
const  mapStateToProps = ({ authedUser }) => ({ authedUser })

export default connect(mapStateToProps)(QuestionOption)