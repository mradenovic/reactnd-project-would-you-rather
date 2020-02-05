import React from 'react'
import { connect } from 'react-redux'
import { logIn } from '../reducers/authedUser'
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core'

function LogIn(props) {
  const { users, dispatch } = props
  const [selectedUser, setSelectedUser] = React.useState('')

  const handleChange = event => {
    setSelectedUser(event.target.value);
  }

  const handleSubmit = event => {
    dispatch(logIn(selectedUser))
  }

  console.log(users)
  
  return (
    <div>
      <Typography variant="h6">
        Please log in
      </Typography>

      <FormControl>
        <InputLabel id="demo-simple-select-label">Select a user</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedUser}
          onChange={handleChange}
          style={{ width: 300 }}        
        >
          {users.map(user => (
            <MenuItem key={user.id} value={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </FormControl>
    </div>
  )
}

function mapStateToProps({ users }) {
  const keys = Object.keys(users)

  return {
    users: keys.map(key => users[key])
  }
}

export default connect(mapStateToProps)(LogIn)