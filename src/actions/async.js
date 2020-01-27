import { getInitialData } from "../utils/api"
import { initUsers } from '../reducers/users'
import { initQuestions } from '../reducers/questions'

export function initData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(initUsers(users))
      dispatch(initQuestions(questions))
    })
  }
}
