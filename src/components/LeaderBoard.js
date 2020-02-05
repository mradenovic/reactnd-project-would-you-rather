import React from 'react'
import { connect } from 'react-redux'
import LeaderBoardScore from './LeaderBoardScore'
import {
  Typography,
} from '@material-ui/core'

function LeaderBoard(props) {
  const { users } = props

  return (
    <div>
      <Typography variant="h6">
        {users.map(user => (
          <LeaderBoardScore user={user} />
        ))}
      </Typography>
    </div>
  )
}

function mapStateToProps({ users }) {
  const keys = Object.keys(users)

  return {
    users: keys
    .map(key => {
      const questionCount = users[key].questions.length  
      const answerCount = Object.keys(users[key].answers).length
      const score = questionCount + answerCount

      return {
        ...users[key],
        questionCount,
        answerCount,
        score
      }  
    })
    .sort((a, b) => b.score - a.score)
  }
}

export default connect(mapStateToProps)(LeaderBoard)