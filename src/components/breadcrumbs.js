import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  paper: {
    marginLeft: 0,
    backgroundColor: 'transparent'
  }
}))

const Breadcrumb = props => {
  const classes = useStyles()
  const { name } = props
  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs separator="›" aria-label="Breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Link color="inherit">{name}</Link>
        </Breadcrumbs>
      </Paper>
    </div>
  )
}

export default Breadcrumb
