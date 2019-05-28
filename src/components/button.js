import React from 'react';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  buttonPrimary:{
    padding: '.7rem',
    paddingLeft:'1.5rem',
    paddingRight:'1.5rem',
    backgroundColor:'#FFFFFF',
    color:'#F62F5E',
    borderRadius:'2.5rem',
    width:'13rem'
  },
  buttonSecondary:{
    padding: '.7rem',
    paddingLeft:'1.5rem',
    paddingRight:'1.5rem',
    backgroundColor:'#F62F5E',
    color:'#FFFFFF',
    borderRadius:'2.5rem',
    width:'13rem'
  },
  text: {
    textAlign: 'center',
    fontSize:'1.2rem'
  }
}
const ButtonComp = (props) => {
  const { classes, text, button } = props
  return (
    <div>
      { button === 1
        ? <div className={classes.buttonSecondary}>
             <Typography className={classes.text}>{text}</Typography>
          </div>
        : <div className={classes.buttonPrimary}>
           <Typography className={classes.text}>{text}</Typography>
          </div>
      }

    </div>
  )
}

export default withStyles(styles)(ButtonComp)
