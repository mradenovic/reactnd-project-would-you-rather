import { setLoading } from '../reducers/loading'
import { getInitialData, saveQuestion } from "../utils/api"
import { initUsers } from '../reducers/users'
import { initQuestions } from '../reducers/questions'

export function initData() {
  return dispatch => {
    dispatch(setLoading(true))
    return getInitialData().then(({ users, questions }) => {
      dispatch(initUsers(users))
      dispatch(initQuestions(questions))
      dispatch(setLoading(false))
    })
  }
}

export function addQuestion(question) {
  return dispatch => {
    dispatch(setLoading(true))
    return saveQuestion(question).then((data) => {
      dispatch(initData())
      dispatch(setLoading(false))
      return data
    })
  }
}
