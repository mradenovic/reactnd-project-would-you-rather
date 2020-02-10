import { createSlice } from '@reduxjs/toolkit'


const authedUser = createSlice({
  name: 'authedUser',
  initialState: null,
  reducers: {
    logIn(state, action) {
      return action.payload
    },
    logOut(state, action) {
      return null
    }
  }
})

export const { logIn, logOut } = authedUser.actions

export default authedUser.reducer
