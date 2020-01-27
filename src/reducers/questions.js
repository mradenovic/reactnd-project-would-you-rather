import { createSlice } from '@reduxjs/toolkit'


const questions = createSlice({
  name: 'questions',
  initialState: {},
  reducers: {
    initQuestions(state, action) {
      return action.payload
    }
  }
})

export const { initQuestions } = questions.actions

export default questions.reducer
