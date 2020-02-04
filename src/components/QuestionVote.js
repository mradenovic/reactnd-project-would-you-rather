import React from 'react'
import {
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button
} from '@material-ui/core'

function QuestionVote(props) {
  const { optionOne, optionTwo } = props.question
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setValue(event.target.value);
  }

  const handleSubmit = event => {
    console.log('handle submit value %s', value)
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

export default QuestionVote