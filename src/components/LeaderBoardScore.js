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
  },
  score: props => {
    switch(props.index) {
      case 0:
        return {
          color: theme.palette.getContrastText('#FFD700'),
          backgroundColor: '#FFD700'
        }
      case 1:
        return {
          color: theme.palette.getContrastText('#C0C0C0'),
          backgroundColor: 'C0C0C0'
        }
      case 2:
        return {
          color: theme.palette.getContrastText('#cd7f32'),
          backgroundColor: '#cd7f32'
        }
      default:
        return {
          color: theme.palette.getContrastText('#b0e0e6'),
          backgroundColor: '#b0e0e6'
        }
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

export default LeaderBoardScore