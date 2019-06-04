import React from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ButtonComp from './button'
import Button from '@material-ui/core/Button'
import Link from 'next/link'

const styles = {
  root: {},
  imageContainer: {
    maxWidth: '940px',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: '2rem',
    height: '336px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  },
  imageContainer2: {
    maxWidth: '940px',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: '2rem',
    height: '336px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  },
  heading: {
    position: 'absolute',
    margin: '3rem',
    marginTop: '1.5rem',
    width: '50%'
  }
}

const CategoryBanner = props => {
  const {
    image,
    text,
    caption,
    classes,
    buttonText,
    categories,
    banner
  } = props
  return (
    <div
      className={banner ? classes.imageContainer2 : classes.imageContainer}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Typography className={classes.heading} variant="h4">
        {text}
      </Typography>
      <div
        style={{
          position: 'absolute',
          marginTop: '6rem',
          marginLeft: '2rem',
          height: '150px',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap'
        }}
      >
        {categories &&
          categories.rows.map(row => (
            <Link
              key={row.category_id}
              href={{ pathname: '/category', query: { catId: row.category_id } }}
            >
              <Button
                color="primary"
                style={{
                  margin: '0.3rem',
                  marginRight: '5rem',
                  color: 'white'
                }}
              >
                {row.name}
              </Button>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default withStyles(styles)(CategoryBanner)
