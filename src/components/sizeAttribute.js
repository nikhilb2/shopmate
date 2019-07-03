import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    width:'2rem',
    margin:'.2rem',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'black',
    backgroundColor: '#FFFFFF'
  }
}))


const Size = (props) => {
  const classes = useStyles()
  const { size, style, onClick } = props
  return(
    <div onClick={onClick} className={classes.root}>
      <Typography variant='caption' >{size} </Typography>
    </div>
  )
}

export default Size
