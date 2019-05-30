import React, { Component } from 'react'
import NavBarMen from '../components/navBarMen'
import NavigationBar from '../components/navBar'
import NavBarMobile from '../components/navBarMobile'
import SocialIcons from '../components/socialIcons'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Footer2 from '../components/footer2'
import ItemDetailCard from '../components/itemDetailCard'
import Grid from '@material-ui/core/Grid'

import Hidden from '@material-ui/core/Hidden'
const styles = {
  center: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}
class ProductPage extends Component {
  state = {}

  render() {
    const { classes, productDetails } = this.props
    return (
      <div style={{ backgroundColor: '#F7F7F7' }}>
        <Hidden only={['sm', 'xs']} implementation="css">
          <NavBarMen />
          <NavigationBar />
        </Hidden>
        <Hidden only={['lg', 'md']} implementation="css">
          <NavBarMobile />
        </Hidden>
        <Hidden only={['xs']} implementation="css">
          <div className={classes.center}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <ItemDetailCard showProducts={true} productDetails={productDetails} />
                <ItemDetailCard productDetails={productDetails}/>
              </Grid>
            </Grid>
          </div>
          <Footer2 />
        </Hidden>
        <Hidden only={['xl', 'sm', 'md', 'lg']} implementation="css" />
      </div>
    )
  }
}

export default withStyles(styles)(ProductPage)
