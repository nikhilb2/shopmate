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
  },
  alignLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
}))

const RadioButtons = props => {
  const classes = useStyles()
  const [value, setValue] = React.useState('female')
  const { values, clearProducts, categoriesInSelectedDept, getProducts } = props
  function handleChange(event) {
    setValue(event.target.value)
    clearProducts()
  }
  function getProd(catId) {
    handleChange
    getProducts(catId)
  }

  //console.log('categoriesInSelectedDept')
  //console.log(categoriesInSelectedDept)
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
          {categoriesInSelectedDept &&
            categoriesInSelectedDept.map(item => (
              <div
                className={classes.alignLeft}
                onClick={() => getProd(item.category_id)}
              >
                <FormControlLabel
                  value={item.name}
                  control={<Radio />}
                  label={item.name}
                />
              </div>
            ))}
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default RadioButtons
