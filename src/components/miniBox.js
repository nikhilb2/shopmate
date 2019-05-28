import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  box: {
    width: '18.75rem',
    height: '19.5rem'
  }

}

const MiniBox = (props) => {
  const { bCol, style, classes } = this.props
  return (
    <Box
       boxShadow={0}
       bgcolor={bCol}
       m={1}
       p={1}
       style={style}
       className={classes.box}
     >

     </Box>
  )
}

export default withStyles(styles)(MiniBox)
