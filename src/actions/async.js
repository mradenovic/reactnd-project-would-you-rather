import { getInitialData, saveQuestion } from "../utils/api"
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

export function addQuestion(question) {
  return dispatch => {
    return saveQuestion(question).then((data) => {
      dispatch(initData())
      return data
    })
  }
}
