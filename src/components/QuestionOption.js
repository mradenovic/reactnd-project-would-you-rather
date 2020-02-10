import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  CircularProgress,
  Chip,
  Badge
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    background: props => props.option.votes.includes(props.authedUser)
      ? 'PowderBlue'
      : 'inherit'
  },
  badge: {
    position: 'relative',
    left: theme.spacing(-3),
    top: theme.spacing(-2.5)
  },
}))

function QuestionOption(props) {
  const classes = useStyles(props)
  const { totalVotes, authedUser } = props
  const { text, votes } = props.option
  const votesCount = votes.length
  const voted = votes.includes(authedUser)
  const percentage = Math.floor(votesCount * 100 / totalVotes)

  return (
    <div className={classes.root}>
      {voted && <Chip color="primary" label="Your vote!" />}
      <Typography color="textSecondary" variant="h6">
        Would you rather {text}
      </Typography>
      <div>
        <CircularProgress variant="static" value={percentage} size={50} thickness={5}/>
        <Badge className={classes.badge} badgeContent={`${percentage}%`} color="primary" />
      </div>
      <Typography>
        {votesCount} out of {totalVotes} vote(s)
      </Typography>
    </div>
  )
}
const  mapStateToProps = ({ authedUser }) => ({ authedUser })

QuestionOption.propTypes = {
  option: PropTypes.object.isRequired,
  totalVotes: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(QuestionOption)