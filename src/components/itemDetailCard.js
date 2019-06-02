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
  root: {
    flexGrow: 1
  },
  box: {
    maxWidth: '940px',
    maxHeight: '1000px',
    display: 'block',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 0
  },
  title: {
    fontSize: '1rem'
  },
  justify: {
    display: 'flex',
    justifyContent: 'center'
  }
}

class ItemDetailCard extends Component {
  state = {
    newProductReviews: null,
    addedToCartWithOutUser: false
  }

  async getProductReviews() {
    const { productDetails, addToCart } = this.props
    const result = await fetchRequest(
      `products/${productDetails.product_id}/reviews`,
      {
        method: 'GET'
      }
    )
    if (!result.error) {
      //console.log(result)
      this.setState({ newProductReviews: result })
    } else {
      this.setState({ error: result })
    }
  }

  render() {
    const {
      classes,
      title,
      style,
      bgcolor,
      image,
      box,
      productDetails,
      productReviews,
      showProducts,
      addToCart,
      user
    } = this.props

    const { newProductReviews, addedToCartWithOutUser } = this.state
    //console.log('productDetails')
    //console.log(productReviews)
    return (
      <div style={{ style }} className={classes.justify}>
        <Box
          boxShadow={3}
          bgcolor={bgcolor ? bgcolor : '#FFFFFF'}
          m={0}
          p={1}
          className={box === 1 ? classes.box2 : classes.box}
        >
          {showProducts ? (
            <ItemCardBig
              productReviews={productReviews}
              productDetails={productDetails}
              bgcolor={bgcolor}
              addToCart={addToCart}
              user={user}
              addedToCartWithOutUser={() =>
                this.setState({ addedToCartWithOutUser: true })
              }
            />
          ) : (
            <div>
              <ProductReivews
                productReviews={
                  newProductReviews ? newProductReviews : productReviews
                }
              />
              <AddReview
                getProductReviews={() => this.getProductReviews()}
                productDetails={productDetails}
                user={user}
              />
            </div>
          )}
        </Box>
        {addedToCartWithOutUser ? (
          <Box
            bgcolor="background.paper"
            color="text.primary"
            p={2}
            position="fixed"
            top={0}
            left="43%"
            zIndex="modal"
          >
            <Typography>Please Login first</Typography>
            <ButtonComp
              text="ok"
              onClick={() => this.setState({ addedToCartWithOutUser: false })}
              button={1}
            />
          </Box>
        ) : null}
      </div>
    )
  }
}

export default withStyles(styles)(ItemDetailCard)
