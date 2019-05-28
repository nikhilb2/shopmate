import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {

  },
  imageContainer: {

  }
};

const  SimpleContainer = (props) => {
  const { image, text } = props
  return (
    <div>
      <div>
        <img style={{width:'100%'}} src={image} alt={text} />
      </div>
    </div>
  );
}

export default  withStyles(styles)(SimpleContainer);
