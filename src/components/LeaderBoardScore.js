import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  Avatar,
  Divider,
  Typography,
} from '@material-ui/core'

const colors = (color, theme) => ({
  color: theme.palette.getContrastText(color),
  backgroundColor: color
})

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
  content: {
    display: 'flex',
    '& div': {
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  scores: {
    flexGrow: 1
  },
  score: props => {
    switch(props.index) {
      case 0: // Gold
        return colors('#ffd700', theme)
      case 1: // Silver
        return colors('#c0c0c0', theme)
      case 2: // Bronze
        return colors('#cd7f32', theme)
      default: // Everybody else
        return colors('#b0e0e6', theme)
    }
  }
}))

function LeaderBoardScore(props) {
  const classes = useStyles(props)
  const { name, avatarURL, questionCount, answerCount, score} = props.user

  return (
    <div className={classes.root}>
      <Card >
        {/* <CardHeader title={name} /> */}
        <CardContent className={classes.content}>
          <div>
            <Avatar className={classes.avatar} src={avatarURL} aria-label={name}>
              {name}
            </Avatar>
          </div>
          <div>
            <Divider orientation="vertical" />
          </div>
          <div className={classes.scores}>
            <Typography variant="h6">
              {name}
            </Typography>
            {/* <CardHeader title={name} /> */}
            <Typography>
              Questions asked: {questionCount}
            </Typography>
            <Typography>
              Questions answered: {answerCount}
            </Typography>
          </div>
          <div>
            <Divider orientation="vertical" />
          </div>
          <div className={classes.flexContainer}>
            <Typography variant="h6">
              Score
            </Typography>
            <Avatar className={classes.score} >{score}</Avatar>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

LeaderBoardScore.propTypes = {
  user: PropTypes.object.isRequired
}

export default LeaderBoardScore