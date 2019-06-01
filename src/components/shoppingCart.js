import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ButtonComp from './button'
import { fetchRequest } from '../utils/request'
import ItemCardBig from './itemCardBig'
import ProductReivews from './productReviews'
import AddReview from './addReview'
const styles = {
  justifyCol: {
    display: 'flex',
    flexDirection:'column'
  },
  justifyRow: {
    flexGrow:1,
    display: 'flex',
    justifyContent: 'space-between'
  },
  box: {
    maxWidth: '940px',
    maxHeight: '1000px',
    display: 'block',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 0
  },
  bottomButtons: {
    flexGrow:1,
    display: 'flex',
    justifyContent:'space-around',
    backgroundColor: '#EFEFEF',
    padding:'1rem'
  },
  textTop: {
    color: '#E5E5E5'
  }

}

class ShoppingCart extends Component {
  state = {
    newProductReviews: null
  }



  render() {
    const {
      classes,
      bgcolor
    } = this.props

    const { newProductReviews } = this.state
    //console.log('productDetails')
    //console.log(productReviews)
    return (
        <Box
          boxShadow={3}
          bgcolor={bgcolor ? bgcolor : '#FFFFFF'}
          m={0}
          p={1}
          className={classes.box}
        >
          <div className={classes.justifyCol}>
            <div>
              <Typography style={{textAlign:'left'}}>title</Typography>
            </div>
            <div className={classes.justifyRow} style={{borderBottom: 'solid 1px', borderColor: '#E5E5E5', color: '#E5E5E5'}}>
              <Typography >Item</Typography>
              <Typography>Quantity</Typography>
              <Typography >Price</Typography>
            </div>
            <div className={classes.justifyRow} >
              this place to be mapped
            </div>
          </div>
          <div className={classes.bottomButtons}>
            <ButtonComp text='Back to Shop'/>
            <ButtonComp text='Checkout' button={1}/>
          </div>
        </Box>

    )
  }
}

export default withStyles(styles)(ShoppingCart)
