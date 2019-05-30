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
    justifyContent:'center'
  },
  justifyRow: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '4rem',
    marginRight: '4rem'
  },
  holder:{
    minHeight: '189px',
    minWidth: '180px',
    marginBottom: '2rem',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  imgThumb: {
    maxWidth:'90px',
    maxHeight:'95px',
    marginRight: '1rem'
  }
}

class ItemCard extends Component {
  state = {
    selectedImage:null,
    image1Click: true,
    image2Click: false
  }

  render() {
    const { classes, title, style, color, image, box, bgcolor, productDetails } = this.props
    const { selectedImage, image1Click, image2Click } = this.state
    console.log(productDetails)
    return (
      <Box
        boxShadow={0}
        bgcolor={bgcolor? bgcolor : "#FFFFFF"}
        m={0}
        p={1}
        style={style}
        className={box === 1 ? classes.box2 : classes.box}
      >
        <div className={classes.justifyCol}>
          <div className={classes.holder} style={{backgroundImage:`url(${selectedImage ? decoratedImageUrl(selectedImage) : productDetails && decoratedImageUrl(productDetails.image)})`}}>

          </div>
          <div className={classes.justifyRow} >
            {productDetails && <img onClick={() => this.setState({selectedImage:productDetails.image, image1Click:true, image2Click:false})} className={classes.imgThumb} style={image1Click ? {borderStyle:'solid', borderWidth:'2px', borderColor:theme.palette.secondary.main} : null} src={decoratedImageUrl(productDetails.image)} alt={productDetails.name} />}
            {productDetails && <img onClick={() => this.setState({selectedImage:productDetails.image_2,image1Click:false, image2Click:true})} className={classes.imgThumb} style={image2Click ? {borderStyle:'solid', borderWidth:'2px', borderColor:theme.palette.secondary.main} : null} src={decoratedImageUrl(productDetails.image_2)} alt={productDetails.image_2} />}
          </div>
        </div>
        <div className={classes.justifyRow} style={{marginTop:'1rem'}}>
          <div>
            <Typography style={{textAlign:'left', color:'#a4a4a4', fontSize:'1rem', marginTop:'.5rem'}}>Home->all cat -> men </Typography>
            <Typography style={{textAlign:'left', color:'yellow', fontSize:'1.5rem', marginTop:'.5rem'}}>★★★★★ </Typography>
            <Typography style={{textAlign:'left', fontSize:'1.5rem', marginTop:0}}>{productDetails && productDetails.name} </Typography>
            <Typography style={{textAlign:'left', fontSize:'.5rem', flexWrap:'wrap', marginTop:0}}>{productDetails && productDetails.description} </Typography>
            <Typography style={{textAlign:'left', fontSize:'1.5rem', marginTop:'.5rem', color:theme.palette.secondary.main}}><strike>£{productDetails && productDetails.price}</strike></Typography>
            <Typography style={{textAlign:'left', fontSize:'1.5rem', marginTop:'.5rem', color:theme.palette.secondary.main}}><strong>£{productDetails && productDetails.discounted_price}</strong></Typography>
            <Typography style={{textAlign:'left', color:'#a4a4a4', fontSize:'1rem', marginTop:'.5rem'}}>Quantity</Typography>
            <div style={{display:'flex'}}><PlusMinus /></div>
            <ButtonComp
              button={1}
              style={{ width: '2rem' }}
              text="Add to cart"
            />
          </div>
        </div>
      </Box>
    )
  }
}

export default withStyles(styles)(ItemCard)
