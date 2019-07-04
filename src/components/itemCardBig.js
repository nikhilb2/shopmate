import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ButtonComp from './button'
import { decoratedImageUrl, fetchRequest } from '../utils/request'
import { getCartId, saveCartId } from '../utils/auth'
import theme from '../theme'
import PlusMinus from './plusMinus'
import Breadcrumb from './breadcrumbs'
import Color from './colorAttribute'
import Size from './sizeAttribute'
const styles = {
  box: {
    width: '880px',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontSize: '1rem'
  },
  justifyCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  justifyRow: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '4rem',
    marginRight: '4rem'
  },
  holder: {
    minHeight: '189px',
    minWidth: '180px',
    marginBottom: '2rem',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  },
  imgThumb: {
    minWidth: '90px',
    maxHeight: '95px',
    marginRight: '1rem'
  },
  stars: {
    display: 'flex',
    width: 'fit-content'
  },
  colorAttribute: {
    display: 'flex',
    flexDirection: 'row'
  }
}

class ItemCard extends Component {
  state = {
    selectedImage: null,
    image1Click: true,
    image2Click: false,
    rating: 0,
    cartId: null,
    itemQuantity: 1,
    categoryName: null,
    attributes: null,
    error: null
  }

  componentDidMount() {
    const { productDetails } = this.props
    if (productDetails) {
      this.rating()
      this.getProductCategory(productDetails.product_id)
      this.getAttributes(productDetails.product_id)
    }
  }

  async getAttributes(productId) {
    const attributes = await fetchRequest(`attributes/inProduct/${productId}`, {
      method: 'GET'
    })
    //console.log(attributes)
    this.setState({ attributes })
  }

  rating() {
    const { productReviews } = this.props
    let totalOfRatings = 0
    productReviews.forEach(review => {
      if (review.rating > 5) {
        totalOfRatings = totalOfRatings + 5
      } else if (review.rating < 1) {
        totalOfRatings = totalOfRatings
      } else {
        totalOfRatings = totalOfRatings + review.rating
      }
    })
    const rating = Math.round((totalOfRatings / productReviews.length) * 20)
    const ratingInt =
      Math.round((totalOfRatings / productReviews.length) * 100) / 100
    //console.log(rating)
    //console.log(ratingInt)
    this.setState({ rating, ratingInt })
  }

  async getProductCategory(productId) {
    const catName = await fetchRequest(`categories/inProduct/${productId}`, {
      method: 'GET'
    })
    this.setState({ categoryName: catName[0].name })
  }

  render() {
    const {
      classes,
      title,
      style,
      color,
      image,
      box,
      bgcolor,
      productDetails,
      addToCart,
      addedToCartWithOutUser,
      mobile,
      quantity,
      adjustQuantity,
      selectColor,
      selectSize,
      selectedColor,
      selectedSize
    } = this.props
    const {
      selectedImage,
      image1Click,
      image2Click,
      ratingInt,
      rating,
      attributes,
      error
    } = this.state
    //console.log('this.props on item card big')
    //console.log(this.props)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        {mobile ? (
          <div>
            <div
              className={classes.holder}
              style={{
                backgroundImage: `url(${
                  selectedImage
                    ? decoratedImageUrl(selectedImage)
                    : productDetails && decoratedImageUrl(productDetails.image)
                })`
              }}
            />
            <div className={classes.justifyRow}>
              {productDetails && (
                <img
                  onClick={() =>
                    this.setState({
                      selectedImage: productDetails.image,
                      image1Click: true,
                      image2Click: false
                    })
                  }
                  className={classes.imgThumb}
                  style={
                    image1Click
                      ? {
                          borderStyle: 'solid',
                          borderWidth: '2px',
                          borderColor: theme.palette.secondary.main
                        }
                      : null
                  }
                  src={decoratedImageUrl(productDetails.image)}
                  alt={productDetails.name}
                />
              )}
              {productDetails && (
                <img
                  onClick={() =>
                    this.setState({
                      selectedImage: productDetails.image_2,
                      image1Click: false,
                      image2Click: true
                    })
                  }
                  className={classes.imgThumb}
                  style={
                    image2Click
                      ? {
                          borderStyle: 'solid',
                          borderWidth: '2px',
                          borderColor: theme.palette.secondary.main
                        }
                      : null
                  }
                  src={decoratedImageUrl(productDetails.image_2)}
                  alt={productDetails.image_2}
                />
              )}
            </div>
            <div className={classes.justifyRow} style={{ marginTop: '1rem' }}>
              <div style={{ margin: 'auto' }}>
                <Typography
                  style={{
                    textAlign: 'left',
                    color: '#a4a4a4',
                    fontSize: '1rem',
                    marginTop: '.5rem'
                  }}
                >
                  <Breadcrumb name={this.state.categoryName} />
                </Typography>
                <div style={{ display: 'flex' }}>
                  <div
                    className={classes.stars}
                    style={{
                      background: `linear-gradient(to right, #FFC94F ${rating}%, #EEEEEE ${rating}%)`
                    }}
                  >
                    <img src="static/stars.png" alt="stars" />
                  </div>
                  <Typography
                    style={{
                      marginLeft: '2rem',
                      backgroundColor: '#FFC94F',
                      color: 'white',
                      width: '3rem',
                      borderRadius: '2rem',
                      fontSize: '.8rem',
                      textAlign: 'center'
                    }}
                  >
                    {ratingInt ? ratingInt : 'none'}
                  </Typography>
                </div>
                <Typography
                  style={{
                    textAlign: 'left',
                    fontSize: '1.5rem',
                    marginTop: 0
                  }}
                >
                  {productDetails && productDetails.name}{' '}
                </Typography>
                <Typography
                  style={{
                    textAlign: 'left',
                    fontSize: '.5rem',
                    flexWrap: 'wrap',
                    marginTop: 0
                  }}
                >
                  {productDetails && productDetails.description}{' '}
                </Typography>
                <Typography
                  style={{
                    textAlign: 'left',
                    fontSize: '1.5rem',
                    marginTop: '.5rem',
                    color: theme.palette.secondary.main
                  }}
                >
                  {productDetails && productDetails.discounted_price > 0 ? (
                    <strike>£{productDetails && productDetails.price}</strike>
                  ) : (
                    `£${productDetails && productDetails.price}`
                  )}
                </Typography>
                {productDetails && productDetails.discounted_price > 0 ? (
                  <Typography
                    style={{
                      textAlign: 'left',
                      fontSize: '1.5rem',
                      marginTop: '.5rem',
                      color: theme.palette.secondary.main
                    }}
                  >
                    <strong>
                      £{productDetails && productDetails.discounted_price}
                    </strong>
                  </Typography>
                ) : null}
                <Typography
                  style={{
                    textAlign: 'left',
                    color: '#a4a4a4',
                    fontSize: '1rem',
                    marginTop: '.5rem'
                  }}
                >
                  Quantity
                </Typography>
                <div style={{ display: 'flex' }}>
                  <PlusMinus
                    quantity={quantity}
                    adjustQuantity={adjustQuantity}
                  />
                </div>
                <div className={classes.colorAttribute}>
                  <Typography
                    variant="caption"
                    style={{ marginTop: 'auto', marginBottom: 'auto' }}
                  >
                    Select Color
                  </Typography>
                  {attributes &&
                    attributes.map(attribute => {
                      if (attribute.attribute_name === 'Color') {
                        return (
                          <Color
                            selection={
                              selectedColor &&
                              selectedColor.attribute_value_id ===
                                attribute.attribute_value_id
                                ? true
                                : false
                            }
                            selectedColor={selectedColor}
                            onClick={() => selectColor(attribute)}
                            color={attribute.attribute_value}
                          />
                        )
                      }
                    })}
                </div>
                <div className={classes.colorAttribute}>
                  <Typography
                    variant="caption"
                    style={{ marginTop: 'auto', marginBottom: 'auto' }}
                  >
                    Select Size
                  </Typography>
                  {attributes &&
                    attributes.map(attribute => {
                      if (attribute.attribute_name === 'Size') {
                        return (
                          <Size
                            selection={
                              selectedSize &&
                              selectedSize.attribute_value_id ===
                                attribute.attribute_value_id
                                ? true
                                : false
                            }
                            onClick={() => selectSize(attribute)}
                            size={attribute.attribute_value}
                          />
                        )
                      }
                    })}
                </div>
                <ButtonComp
                  button={1}
                  style={{ width: '2rem', marginTop: '2rem' }}
                  text="Add to cart"
                  onClick={() => {
                    addToCart(productDetails.product_id)
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <Box
            boxShadow={0}
            bgcolor={bgcolor ? bgcolor : '#FFFFFF'}
            m={0}
            p={1}
            style={style}
            className={box === 1 ? classes.box2 : classes.box}
          >
            <div className={classes.justifyCol} style={{ marginLeft: '4rem' }}>
              <div
                className={classes.holder}
                style={{
                  backgroundImage: `url(${
                    selectedImage
                      ? decoratedImageUrl(selectedImage)
                      : productDetails &&
                        decoratedImageUrl(productDetails.image)
                  })`
                }}
              />
              <div className={classes.justifyRow}>
                {productDetails && (
                  <img
                    onClick={() =>
                      this.setState({
                        selectedImage: productDetails.image,
                        image1Click: true,
                        image2Click: false
                      })
                    }
                    className={classes.imgThumb}
                    style={
                      image1Click
                        ? {
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderColor: theme.palette.secondary.main
                          }
                        : null
                    }
                    src={decoratedImageUrl(productDetails.image)}
                    alt={productDetails.name}
                  />
                )}
                {productDetails && (
                  <img
                    onClick={() =>
                      this.setState({
                        selectedImage: productDetails.image_2,
                        image1Click: false,
                        image2Click: true
                      })
                    }
                    className={classes.imgThumb}
                    style={
                      image2Click
                        ? {
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderColor: theme.palette.secondary.main
                          }
                        : null
                    }
                    src={decoratedImageUrl(productDetails.image_2)}
                    alt={productDetails.image_2}
                  />
                )}
              </div>
            </div>
            <div className={classes.justifyRow} style={{ marginTop: '1rem' }}>
              <div style={{ margin: 'auto' }}>
                <Typography
                  style={{
                    textAlign: 'left',
                    color: '#a4a4a4',
                    fontSize: '1rem',
                    marginTop: '.5rem'
                  }}
                >
                  <Breadcrumb name={this.state.categoryName} />
                </Typography>
                <div style={{ display: 'flex' }}>
                  <div
                    className={classes.stars}
                    style={{
                      background: `linear-gradient(to right, #FFC94F ${
                        this.state.rating
                      }%, #EEEEEE ${100 - this.state.rating}%)`
                    }}
                  >
                    <img src="static/stars.png" alt="stars" />
                  </div>
                  <Typography
                    style={{
                      marginLeft: '2rem',
                      backgroundColor: '#FFC94F',
                      color: 'white',
                      width: '3rem',
                      borderRadius: '2rem',
                      fontSize: '.8rem',
                      textAlign: 'center'
                    }}
                  >
                    {ratingInt ? ratingInt : 'none'}
                  </Typography>
                </div>
                <Typography
                  style={{
                    textAlign: 'left',
                    fontSize: '1.5rem',
                    marginTop: 0
                  }}
                >
                  {productDetails && productDetails.name}{' '}
                </Typography>
                <Typography
                  style={{
                    textAlign: 'left',
                    fontSize: '.5rem',
                    flexWrap: 'wrap',
                    marginTop: 0
                  }}
                >
                  {productDetails && productDetails.description}{' '}
                </Typography>
                <Typography
                  style={{
                    textAlign: 'left',
                    fontSize: '1.5rem',
                    marginTop: '.5rem',
                    color: theme.palette.secondary.main
                  }}
                >
                  {productDetails && productDetails.discounted_price > 0 ? (
                    <strike>£{productDetails && productDetails.price}</strike>
                  ) : (
                    `£${productDetails && productDetails.price}`
                  )}
                </Typography>
                {productDetails && productDetails.discounted_price > 0 ? (
                  <Typography
                    style={{
                      textAlign: 'left',
                      fontSize: '1.5rem',
                      marginTop: '.5rem',
                      color: theme.palette.secondary.main
                    }}
                  >
                    <strong>
                      £{productDetails && productDetails.discounted_price}
                    </strong>
                  </Typography>
                ) : null}
                <Typography
                  style={{
                    textAlign: 'left',
                    color: '#a4a4a4',
                    fontSize: '1rem',
                    marginTop: '.5rem'
                  }}
                >
                  Quantity
                </Typography>
                <div style={{ display: 'flex' }}>
                  <PlusMinus
                    quantity={quantity}
                    adjustQuantity={adjustQuantity}
                  />
                </div>
                <div className={classes.colorAttribute}>
                  <Typography
                    variant="caption"
                    style={{ marginTop: 'auto', marginBottom: 'auto' }}
                  >
                    Select Color
                  </Typography>
                  {attributes &&
                    attributes.map(attribute => {
                      if (attribute.attribute_name === 'Color') {
                        return (
                          <Color
                            selection={
                              selectedColor &&
                              selectedColor.attribute_value_id ===
                                attribute.attribute_value_id
                                ? true
                                : false
                            }
                            onClick={() => selectColor(attribute)}
                            color={attribute.attribute_value}
                          />
                        )
                      }
                    })}
                </div>
                <div className={classes.colorAttribute}>
                  <Typography
                    variant="caption"
                    style={{ marginTop: 'auto', marginBottom: 'auto' }}
                  >
                    Select Size
                  </Typography>
                  {attributes &&
                    attributes.map(attribute => {
                      if (attribute.attribute_name === 'Size') {
                        return (
                          <Size
                            selection={
                              selectedSize &&
                              selectedSize.attribute_value_id ===
                                attribute.attribute_value_id
                                ? true
                                : false
                            }
                            onClick={() => selectSize(attribute)}
                            size={attribute.attribute_value}
                          />
                        )
                      }
                    })}
                </div>
                <Typography variant="caption" style={{ color: 'red' }}>
                  {error}
                </Typography>
                <div style={{ marginTop: '1rem' }}>
                  {!selectedColor || !selectedSize ? (
                    <ButtonComp
                      button={1}
                      style={{ width: '2rem' }}
                      text="Add to cart"
                      onClick={() => {
                        this.setState({
                          error:
                            'Please Select Item attributes before adding to cart'
                        })
                      }}
                    />
                  ) : (
                    <ButtonComp
                      button={1}
                      style={{ width: '2rem' }}
                      text="Add to cart"
                      onClick={() => {
                        this.setState({ error: null })
                        addToCart(productDetails.product_id)
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </Box>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(ItemCard)
