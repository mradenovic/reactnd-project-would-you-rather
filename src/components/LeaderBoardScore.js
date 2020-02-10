import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  Avatar,
  Divider,
  Typography,
} from '@material-ui/core'

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
  }
}))

function LeaderBoardScore(props) {
  const classes = useStyles()
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
            <Avatar color="primary">{score}</Avatar>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LeaderBoardScore