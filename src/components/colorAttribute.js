import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'

const useStyles = makeStyles(theme => ({
  root: {
    width: '1rem',
    height: '1rem',
    margin: '.2rem',
    borderStyle: 'solid',
    borderWidth: '1px'
  }
}))

const Color = props => {
  const classes = useStyles()
  const { color, style, onClick, selection } = props
  return (
    <div
      className={classes.root}
      onClick={onClick}
      style={{
        backgroundColor: color,
        borderColor: selection ? theme.palette.secondary.main : 'black',
        borderWidth: selection ? '2px' : '1px',
        width: selection ? '1.2rem' : '1rem',
        height: selection ? '1.2rem' : '1rem'
      }}
    />
  )
}

export default Color
