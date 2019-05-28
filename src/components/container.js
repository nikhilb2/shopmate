import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const  SimpleContainer = (props) => {
  const { image, text } = this.props
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {image
          ? <img src={img} alt={img} />
          : null
        }
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}

export default SimpleContainer;
