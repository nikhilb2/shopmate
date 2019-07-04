import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    width: '2rem',
    maxHeight: '1.5rem',
    margin: '.2rem',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'black',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    cursor: 'default'
  }
}))

const Size = props => {
  const classes = useStyles()
  const { size, style, onClick, selection } = props
  return (
    <div
      onClick={onClick}
      className={classes.root}
      style={{
        borderColor: selection ? theme.palette.secondary.main : 'black',
        borderWidth: selection ? '2px' : '1px'
      }}
    >
      <Typography variant="caption">{size} </Typography>
    </div>
  )
}

export default Size
