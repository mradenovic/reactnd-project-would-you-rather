import React from 'react'
import { connect } from 'react-redux'
import { addAnswer } from '../actions/async'
import {
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button
} from '@material-ui/core'

function QuestionVote(props) {
  const { optionOne, optionTwo, id } = props.question
  const { authedUser, dispatch } = props
  const [value, setValue] = React.useState('optionOne')

  const handleChange = event => {
    setValue(event.target.value)
  }

  const handleSubmit = event => {
    const info = {
      authedUser: authedUser,
      qid: id,
      answer: value
    }
    dispatch(addAnswer(info))
  }

  return (
    <div>
      <Typography variant="h6">
        Would you rather...
      </Typography>

      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender2" value={value} onChange={handleChange}>
          <FormControlLabel
            value="optionOne"
            control={<Radio color="primary" />}
            label={optionOne.text}
          />

          <FormControlLabel
            value="optionTwo"
            control={<Radio color="primary" />}
            label={optionTwo.text}
          />
        </RadioGroup>

        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </FormControl>

    </div>
  )
}

function mapsStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapsStateToProps)(QuestionVote)