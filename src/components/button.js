import React from 'react';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  button:{
    padding: '1rem',
    paddingLeft:'1.5rem',
    paddingRight:'1.5rem',
    backgroundColor:'#FFFFFF',
    color:'#F62F5E',
    borderRadius:'2.5rem',
    width:'10rem'
  },
  text: {
    textAlign: 'center'
  }
}
const ButtonComp = (props) => {
  const { classes } = props
  return (
    <div className={classes.button}>
           <Typography className={classes.text}>View All</Typography>
    </div>
  )
}

export default withStyles(styles)(ButtonComp)
