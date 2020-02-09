import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Page404 from './Page404'
import QuestionView from './QuestionView'
import { formatDate } from '../utils/helpers'

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
  },
  avatarContainer: {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  view: {
    flex: '3 0 auto',
    'padding-left': theme.spacing(2),
  }
}))

function Question(props) {
  const classes = useStyles()
  const { question, user, viewType } = props

  if (!question) {
    return (
      <Page404 />
    )
  }

  const questionDate = formatDate(question.timestamp)

  return (
    <div>
      <Card >
        <CardHeader
          title={`Question by ${user.name}`}
          subheader={`Asked at ${questionDate}`}
        />
        <CardContent className={classes.content}>
          <div className={classes.avatarContainer}>
            <Avatar className={classes.avatar} src={user.avatarURL} aria-label={user.name} />
          </div>

          <div className={classes.view}>
            <QuestionView viewType={viewType} question={question} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
  const question = questions[id]
  const user = question ? users[question.author] : null

  return {
    question,
    user
  }
}

export default connect(mapStateToProps)(Question)