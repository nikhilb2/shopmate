import React from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ButtonComp from './button'
import theme from '../theme'

const styles = {
  root: {},
  container: {
    minWidth: '220px',
    minHeight: '697px',
    backgroundColor: theme.palette.primary.main
  }
}

const FilterBox = props => {
  const { image, text, caption, classes, buttonText, categories, productCount } = props
  return (<div className={classes.container}>
    <Typography>{productCount}</Typography>
  </div>)
}

export default withStyles(styles)(FilterBox)
