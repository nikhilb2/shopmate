import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    width: '80%'
  }
}))

const Selection = props => {
  const classes = useStyles()
  const [age, setAge] = React.useState('')
  const [open, setOpen] = React.useState(false)

  function handleChange(event) {
    setAge(event.target.value)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleOpen() {
    setOpen(true)
  }

  function clearProductsAndHandleClose() {

    console.log(props)
    setOpen(false)
    props.clearProducts()
  }

  const { name, values, label, clearProducts } = props

  return (
    <form autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="controlled-open-select">{name}</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          inputProps={{
            name: { name },
            id: 'controlled-open-select'
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {values &&
            values.map(item => (
              <Link
                key={item.department_id}
                href={{
                  pathname: '/category',
                  query: { depId: item.department_id }
                }}
              >
                <MenuItem onClick={clearProductsAndHandleClose} value={10}>
                  {item.name}
                </MenuItem>
              </Link>
            ))}
        </Select>
      </FormControl>
    </form>
  )
}

export default Selection
