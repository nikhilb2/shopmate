import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import ButtonComp from './button'

const styles = {
  box: {
    margin: '1rem'
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
        style={{ margin: '1.8rem' }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="static/sumka.png"
              />
            </ButtonBase>
          </Grid>
          <Grid
            item
            xs={12}
            md
            container
            style={{ marginTop: 'auto', marginBottom: 'auto' }}
          >
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  style={{ margin: '2rem', fontSize: '1.3rem' }}
                >
                  Vera Bradley
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ margin: '2rem', fontSize: '1rem', width: '90%' }}
                >
                  Carry the day in style with this extra large tote crafted in
                  our chic B.B. Collection textured PVC. Featuring colorful faux
                  leather trim, this tote offers a roomy interior plus just
                  enough perfectly placed.
                </Typography>
                <div style={{ margin: '2rem' }}>
                  <ButtonComp text="Shop now" button={1} />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    )
  }
}

export default withStyles(styles)(SaleBox)
