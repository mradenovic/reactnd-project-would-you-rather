import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addQuestion } from '../actions/async'
import {
  Typography,
  TextField,
  Button
} from '@material-ui/core'

function NewQuestion(props) {
  const history = useHistory()
  const { authedUser, dispatch } = props
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
    const question = {
      author: authedUser,
      optionOneText: input.optionOne,
      optionTwoText: input.optionTwo
    }

    dispatch(addQuestion(question)).then(newQuestion => {
      history.push(`/questions/${newQuestion.id}`)
    })
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

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)