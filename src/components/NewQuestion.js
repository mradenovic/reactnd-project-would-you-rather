import React from 'react'
import {
  Typography,
  TextField,
  Button
} from '@material-ui/core'

function NewQuestion(props) {
  const [input, setInput] = React.useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      optionOne: '',
      optionTwo: ''
    }
  )

  const handleChange = event => {
    const name = event.target.name
    const newValue = event.target.value
    
    setInput({[name]: newValue})
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('handle submit value ', input)
  }

  return (
    <div>
      <Typography variant="h6">Create new question</Typography>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h6">Would you rather...</Typography>
        <TextField
          id="optionOne"
          name="optionOne"
          label="Option one"
          value={input.optionOne}
          onChange={handleChange}
          required
        />
        <Typography variant="h6">or</Typography>
        <TextField
          id="optionTwo"
          name="optionTwo"
          label="Option two"
          value={input.optionTwo}
          onChange={handleChange}
          required
        />

        <Typography variant="h6"></Typography>

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default NewQuestion