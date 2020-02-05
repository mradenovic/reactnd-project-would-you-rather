import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Avatar
} from '@material-ui/core'

function LeaderBoardScore(props) {
  const { name, avatarURL, questionCount, answerCount, score} = props.user

  return (
    <div style={{ padding: '10px' }}>
      <Card >
        <CardHeader title={name} />
        <CardContent>
          <Avatar src={avatarURL} aria-label={name}>
            {name}
          </Avatar>
          <div>
            <div>
              Questions asked: {questionCount}
            </div>
            <div>
              Questions answered: {answerCount}
            </div>
          </div>

          Score {score}
        </CardContent>
      </Card>
    </div>
  )
}

export default LeaderBoardScore