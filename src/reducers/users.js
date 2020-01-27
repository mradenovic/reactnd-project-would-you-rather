import { createSlice } from '@reduxjs/toolkit'


const users = createSlice({
  name: 'users',
  initialState: {},
  reducers: {
    initUsers(state, action) {
      return action.payload
    }
  }
})

export const { initUsers } = users.actions

export default users.reducer
