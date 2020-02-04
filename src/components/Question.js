import React from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import QuestionPreview from './QuestionPreview'
import QuestionResults from './QuestionResults'
import QuestionVote from './QuestionVote'
import { formatDate } from '../utils/helpers'

function Question(props) {
  const { question, user, viewType } = props

  if (!question) {
    return 'Loading'
  }

  const questionDate = formatDate(question.timestamp)
  const view = (viewType) => {
    switch(viewType) {
        case 'preview': return <QuestionPreview question={question} />
        case 'vote': return <QuestionVote question={question} />
        case 'poll': return <QuestionResults question={question} />
        default: return 'View'
    }  
  }

  return (
    <div>
      <Card >
        <CardHeader
          avatar={
            <Avatar src={user.avatarURL} aria-label={user.name}>
              {user.name}
            </Avatar>
          }
          title={`Question by ${user.name}`}
          subheader={`Asked at ${questionDate}`}
        />
        <CardContent>
          {view(viewType)}
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