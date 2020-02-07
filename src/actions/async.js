import { setLoading } from '../reducers/loading'
import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api"
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
      return data
    })
  }
}

export function addAnswer(answer) {
  return dispatch => {
    dispatch(setLoading(true))
    return saveQuestionAnswer(answer).then((result) => {
      dispatch(initData())
      return result
    })
  }
}
