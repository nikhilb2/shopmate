import React from 'react';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  button:{
    padding: '.7rem',
    paddingLeft:'1.5rem',
    paddingRight:'1.5rem',
    backgroundColor:'#FFFFFF',
    color:'#F62F5E',
    borderRadius:'2.5rem',
    width:'13rem'
  },
  text: {
    textAlign: 'center',
    fontSize:'1.2rem'
  }
}
const ButtonComp = (props) => {
  const { classes, text } = props
  return (
    <div className={classes.button}>
           <Typography className={classes.text}>{text}</Typography>
    </div>
  )
}

export default withStyles(styles)(ButtonComp)
