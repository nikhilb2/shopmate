import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { fetchRequest } from '../utils/request'

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
  const {
    name,
    values,
    label,
    clearProducts,
    getCategoriesByDepartment,
    selectedDepartmentName,
    router,
    selectDepartmentName
  } = props
  const classes = useStyles()
  const [age, setAge] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const [categories, setCategories] = React.useState(null)

  function handleChange(event) {
    setAge(event.target.value)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleOpen() {
    setOpen(true)
  }

  async function getDepartmentName() {
    const dep = await fetchRequest(`departments/${router.query.depId}`, {
      method: 'GET'
    })
    selectDepartmentName(dep.name)
  }

  useEffect(() => {
    getCategoriesByDepartment(router.query.depId)
    getDepartmentName()
  }, [])

  //console.log('props on select')
  //console.log(props)

  return (
    <form autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="controlled-open-select">
          {selectedDepartmentName}
        </InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          inputProps={{
            name: { selectedDepartmentName },
            id: 'controlled-open-select'
          }}
        >
          {values &&
            values.map(item => (
              <MenuItem value={item.name}>
                <Typography
                  onClick={() => {
                    getCategoriesByDepartment(item.department_id)
                    selectDepartmentName(item.name)
                  }}
                >
                  {item.name}
                </Typography>
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </form>
  )
}

export default withRouter(Selection)
