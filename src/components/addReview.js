import React, { Component } from 'react'
import Fab from '@material-ui/core/Fab'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import theme from '../theme'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import ButtonComp from './button'
import { fetchRequest, fetchRequestWithoutResponse } from '../utils/request'
import SignInPopper from './signInPopper'

const styles = {
  box: {
    maxWidth: '940px',
    maxHeight: '1000px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 0,
    justifyContent: 'space-around'
  },
  justify: {
    display: 'flex',
    justifyContent: 'center'
  }
}
class AddReview extends Component {
  state = {
    rating: 0,
    review: null,
    reviewStatus: null
  }

  async postReview() {
    const { productDetails } = this.props
    const result = await fetchRequestWithoutResponse(
      `products/${productDetails.product_id}/reviews`,
      {
        method: 'POST',
        body: JSON.stringify(this.state)
      }
    )
    if (!result.error) {
      this.setState({ reviewStatus: result.status })
      this.props.getProductReviews()
    } else {
      this.setState({ error: result })
    }
  }

  render() {
    const { classes, user } = this.props
    const { rating, review, reviewStatus } = this.state
    return (
      <div className={classes.justify}>
        <Box
          boxShadow={0}
          bgcolor="#FFFFFF"
          m={0}
          p={1}
          className={classes.box}
        >
          <Typography style={{ fontSize: '1.5rem' }}>Add a review</Typography>

          <TextField
            style={{ width: '600px' }}
            id="filled-multiline-static"
            label="Review"
            multiline
            rows="4"
            className={classes.textField}
            margin="normal"
            variant="filled"
            onChange={e => this.setState({ review: e.target.value })}
          />

          <div style={{ display: 'flex' }}>
            <Typography style={{ fontSize: '.7', marginRight: '2rem' }}>
              Rating
            </Typography>
            <div>
              <img
                onClick={() => this.setState({ rating: 1 })}
                onMouseOver={() => this.setState({ rating: 1 })}
                src={rating > 0 ? 'static/goldstar.svg' : 'static/greystar.svg'}
                alt="star"
              />
            </div>
            <div>
              <img
                onClick={() => this.setState({ rating: 2 })}
                onMouseOver={() => this.setState({ rating: 2 })}
                src={rating > 1 ? 'static/goldstar.svg' : 'static/greystar.svg'}
                alt="star"
              />
            </div>
            <div>
              <img
                onClick={() => this.setState({ rating: 3 })}
                onMouseOver={() => this.setState({ rating: 3 })}
                src={rating > 2 ? 'static/goldstar.svg' : 'static/greystar.svg'}
                alt="star"
              />
            </div>
            <div>
              <img
                onClick={() => this.setState({ rating: 4 })}
                onMouseOver={() => this.setState({ rating: 4 })}
                src={rating > 3 ? 'static/goldstar.svg' : 'static/greystar.svg'}
                alt="star"
              />
            </div>
            <div>
              <img
                onClick={() => this.setState({ rating: 5 })}
                onMouseOver={() => this.setState({ rating: 5 })}
                src={rating > 4 ? 'static/goldstar.svg' : 'static/greystar.svg'}
                alt="star"
              />
            </div>
          </div>
          {user && user.user ? (
            <ButtonComp
              onClick={() => {
                if (rating && review) {
                  this.postReview()
                }
              }}
              button={1}
              width="6rem"
              text="submit"
            />
          ) : (
            <Typography>Not Signed In</Typography>
          )}

          {reviewStatus === 200 ? 'Review Posted SuccessFully' : null}
        </Box>
      </div>
    )
  }
}

export default withStyles(styles)(AddReview)
