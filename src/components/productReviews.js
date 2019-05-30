import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ButtonComp from './button'
import { decoratedImageUrl } from '../utils/request'
import theme from '../theme'
import PlusMinus from './plusMinus'

const styles = {
  box: {
    width: '880px',
    height: '552px',
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
    maxWidth: '90px',
    maxHeight: '95px',
    marginRight: '1rem'
  },
  stars: {
    display: 'flex',
    width: 'fit-content'
  }
}

class ProductReivews extends Component {
  state = {

  }





  render() {
    const {
      classes,
      bgcolor,
      style

    } = this.props
    const { selectedImage, image1Click, image2Click, ratingInt } = this.state
    return (
      <Box
        boxShadow={0}
        bgcolor={bgcolor ? bgcolor : '#FFFFFF'}
        m={0}
        p={1}
        style={style}
        className={classes.box}
      >

      </Box>
    )
  }
}

export default withStyles(styles)(ProductReivews)
