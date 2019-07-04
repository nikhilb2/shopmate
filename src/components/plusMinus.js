import React from 'react'
import Fab from '@material-ui/core/Fab'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import theme from '../theme'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: '.5rem',
    marginLeft: 0,
    textAlign: 'center'
  },
  round: {
    backgroundColor: '#eeefef',
    padding: '.2rem',
    borderRadius: '10rem',
    width: '2rem',
    margin: '0.2rem',
    marginTop: 'auto',
    marginBottom: 'auto',
    cursor: 'default'
  },
  number: {
    border: '#eeefef',
    borderStyle: 'solid',
    borderRadius: '10rem',
    borderWidth: '1px',
    width: '3rem',
    margin: '.5rem'
  }
}
const PlusMinus = props => {
  const {
    classes,
    text,
    onClick,
    quantity,
    upddateBag,
    adjustQuantity,
    addToCart,
    reduceQuantity,
    itemId
  } = props
  //console.log('PlusMinus')
  //console.log(props)
  return (
    <div className={classes.root}>
      <Typography
        className={classes.round}
        style={{ marginLeft: 0 }}
        onClick={() => {
          if (reduceQuantity) {
            reduceQuantity(itemId, quantity - 1)
          } else {
            adjustQuantity(-1)
          }
        }}
      >
        -
      </Typography>
      <Typography className={classes.number}>{quantity}</Typography>
      <Typography
        className={classes.round}
        onClick={() => {
          if (reduceQuantity) {
            reduceQuantity(itemId, quantity + 1)
          } else {
            adjustQuantity(1)
          }
        }}
      >
        +
      </Typography>
    </div>
  )
}

export default withStyles(styles)(PlusMinus)
