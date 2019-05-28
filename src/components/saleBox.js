import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const styles = {
  box: {
    margin:'1rem'
  }
}


class SaleBox extends Component {
  render() {
    const { classes } = this.props
    return (
    <Box
      boxShadow={1}
      bgcolor="#FFFFFF"
      m={1}
      p={1}
      className={classes.box}
    >
    <Grid container spacing={2}>
       <Grid item>
         <ButtonBase className={classes.image}>
           <img className={classes.img} alt="complex" src="static/sumka.png" />
         </ButtonBase>
       </Grid>
       <Grid item xs={12} md container style={{marginTop:'auto', marginBottom:'auto'}}>
         <Grid item xs container direction="column" spacing={2}>
           <Grid item xs>
             <Typography gutterBottom variant="subtitle1" style={{margin:'2rem'}}>
               Vera Bradley
             </Typography>
             <Typography variant="body2" gutterBottom style={{marginLeft:'2rem'}}>
               Full resolution 1920x1080 • JPEG
               Full resolution 1920x1080 • JPEG
               Full resolution 1920x1080 • JPEG
               Full resolution 1920x1080 • JPEG
               Full resolution 1920x1080 • JPEG
             </Typography>
             <Typography variant="body2" color="textSecondary" style={{marginLeft:'2rem'}}>
               ID: 1030114
             </Typography>
           </Grid>
         </Grid>
       </Grid>
     </Grid>
    </Box>
    )
  }

}

export default withStyles(styles)(SaleBox)
