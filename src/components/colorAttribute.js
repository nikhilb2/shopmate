import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'

const useStyles = makeStyles(theme => ({
  root: {
    width:'1rem',
    height:'1rem',
    margin:'.2rem',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'black'
  }
}))


const Color = (props) => {
  const classes = useStyles()
  const { color, style, onClick } = props
  return(
    <div className={classes.root} onClick={onClick} style={{backgroundColor:color}}>

    </div>
  )
}

export default Color
