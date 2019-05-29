import React from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ButtonComp from './button'

const styles = {
  root: {},
  imageContainer: {
    maxWidth: '940px',
    marginLeft:'auto',
    marginRight: 'auto',
    margin:'2rem',
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
  },
}

const MenBanner = props => {
  const { image, text, caption, classes, buttonText, categories } = props
  return (
      <div
        className={classes.imageContainer}
        style={{ backgroundImage: `url(${image})` }}
      >
      <Typography className={classes.heading} variant="h4">
        {text}
      </Typography>
      <div style={{position:'absolute', marginTop:'6rem',marginLeft:'2rem', height:'150px',display:'flex', flexDirection:'column', flexWrap:'wrap'}}>
      {categories && categories.rows.map(row=>(
        <Typography style={{margin:'0.3rem',marginRight:'5rem', color:'white' }}>{row.name}</Typography>
      ))}
      </div>
      </div>
  )
}

export default withStyles(styles)(MenBanner)
