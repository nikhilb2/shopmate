import React from 'react';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/styles';

const styles = {
  margin:{
    margin: 'auto'
  }
}
const ButtonComp = (props) => {
  return (
    <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="Add"
          className={classes.margin}
        >
          Extended
    </Fab>
  )
}

export default ButtonComp
