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
    flexDirection: 'column'
  },
  justifyRow: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '4rem',
    marginRight: '4rem'
  },
  holder:{
    marginTop:'auto',
    marginBottom:'auto',
  }
}

class ItemCard extends Component {
  state = {
    mouseOver: false
  }
  render() {
    const { classes, title, style, color, image, box, bgcolor } = this.props
    const { elevation, mouseOver } = this.state
    console.log(this.state)
    return (
      <Box
        boxShadow={0}
        bgcolor={bgcolor? bgcolor : "#FFFFFF"}
        m={0}
        p={1}
        style={style}
        className={box === 1 ? classes.box2 : classes.box}
      >
        <div className={classes.justifyRow}>
          <div className={classes.holder} >
            <img src="static/sumka.png" alt="sumka" />
          </div>
        </div>
        <div className={classes.justifyRow} style={{marginTop:'1rem'}}>
          <div>
            <Typography style={{textAlign:'left', color:'#a4a4a4', fontSize:'1rem', marginTop:'.5rem'}}>Home->all cat -> men </Typography>
            <Typography style={{textAlign:'left', color:'yellow', fontSize:'1.5rem', marginTop:'.5rem'}}>★★★★★ </Typography>
            <Typography style={{textAlign:'left', fontSize:'1.5rem', marginTop:0}}>Title </Typography>
            <Typography style={{textAlign:'left', fontSize:'1.5rem', marginTop:'.5rem', color:theme.palette.secondary.main}}>£15 </Typography>
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
