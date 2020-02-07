import { combineReducers } from 'redux'
import loading from './loading'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'

export default combineReducers({
  loading,
  authedUser,
  users,
  questions
})
