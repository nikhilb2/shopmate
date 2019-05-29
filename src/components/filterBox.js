import React from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ButtonComp from './button'

const styles = {
  root: {},
  container: {
    minWidth: '220px',
    minHeight: '697px',
    backgroundColor: 'black'
  }
}

const FilterBox = props => {
  const { image, text, caption, classes, buttonText, categories } = props
  return <div className={classes.container}>test</div>
}

export default withStyles(styles)(FilterBox)
