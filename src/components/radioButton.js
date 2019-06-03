import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0)
  }
}))

function RadioButtons(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState('female')

  function handleChange(event) {
    setValue(event.target.value)
  }

  const { values } = props

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Categories</FormLabel>
        <RadioGroup
          aria-label="Departments"
          name="department1"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          {values &&
            values.rows.map(item => (
              <Link
                key={item.category_id}
                href={{ pathname: '/men', query: { catId: item.category_id } }}
              >
                <FormControlLabel
                  value={item.name}
                  control={<Radio />}
                  label={item.name}
                />
              </Link>
            ))}
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default RadioButtons
