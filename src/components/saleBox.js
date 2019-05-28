import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

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
      boxShadow={0}
    </Box>
    )
  }

}

export default withStyles(styles)(SaleBox)
