import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ButtonComp from './button'
import { decoratedImageUrl } from '../utils/request'
const styles = {
  box: {
    width: '220px',
    height: '336px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center'
  },
  box2: {
    width: '300px',
    height: '336px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: '1rem'
  },
  justify: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1.5rem'
  }
}

class ItemCard extends Component {
  state = {
    mouseOver: false
  }
  render() {
    const { classes, title, style, color, image, box } = this.props
    const { elevation, mouseOver } = this.state
    console.log(this.state)
    return (
      <Box
        boxShadow={mouseOver ? 5 : 1}
        bgcolor="#FFFFFF"
        m={1}
        p={1}
        style={style}
        className={box === 1 ? classes.box2 : classes.box}
      >
        <div
          onMouseOver={() => this.setState({ mouseOver: true })}
          onMouseOut={() => this.setState({ mouseOver: false })}
          className={classes.justify}
          style={{
            backgroundImage: `url(${decoratedImageUrl(image)})`,
            width: '120px',
            height: '111px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            marginLeft: 'auto',
            marginRight: 'auto',
            opacity: mouseOver ? 0.2 : 1
          }}
        >
          <div>
            {mouseOver ? (
              <img
                style={{
                  display: 'static',
                  marginTop: '0px'
                }}
                src="static/heart.svg"
                alt="heart"
              />
            ) : null}
          </div>
        </div>

        <div />
        <Typography
          variant="body1"
          style={{ color: color ? color : 'black' }}
          className={classes.title}
        >
          {title}
        </Typography>
        <div className={classes.justify}>
          <ButtonComp
            fontSize=".8rem"
            width="7rem"
            padding="0.5rem"
            text="Buy Now"
            button={1}
          />
        </div>
      </Box>
    )
  }
}

export default withStyles(styles)(ItemCard)
