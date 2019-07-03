import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import ButtonComp from './button'
import { decoratedImageUrl } from '../utils/request'
import Link from 'next/link'
import CardActionArea from '@material-ui/core/CardActionArea'
import theme from '../theme'

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
    const {
      classes,
      title,
      style,
      color,
      image,
      box,
      id,
      price,
      discounted_price
    } = this.props
    const { elevation, mouseOver } = this.state
    return (
      <Link href={id ? { pathname: '/product', query: { prodId: id } } : '/'}>
        <Card
          bgcolor="#FFFFFF"
          m={1}
          p={1}
          style={style}
          className={box === 1 ? classes.box2 : classes.box}
        >
          <CardActionArea
            style={{ position: 'absolute' }}
            className={box === 1 ? classes.box2 : classes.box}
          />
          <div
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
          />

          <Typography
            variant="body1"
            style={{ color: color ? color : 'black' }}
            className={classes.title}
          >
            {title}
          </Typography>
          <Typography
            style={{
              fontSize: '1',
              color: theme.palette.secondary.main
            }}
          >
            {discounted_price > 0 ? <strike>£{price}</strike> : `£${price}`}
          </Typography>
          {discounted_price > 0 ? (
            <Typography
              style={{
                fontSize: '1',
                color: theme.palette.secondary.main
              }}
            >
              <strong>£{discounted_price}</strong>
            </Typography>
          ) : null}
          <div className={classes.justify}>
            <ButtonComp
              fontSize=".8rem"
              width="7rem"
              padding="0.5rem"
              text="Buy Now"
              button={1}
            />
          </div>
        </Card>
      </Link>
    )
  }
}

export default withStyles(styles)(ItemCard)
