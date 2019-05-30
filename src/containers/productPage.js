import React, { Component } from 'react'
import NavBarMen from '../components/navBarMen'
import NavigationBar from '../components/navBar'
import NavBarMobile from '../components/navBarMobile'
import SocialIcons from '../components/socialIcons'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Footer2 from '../components/footer2'
import Hidden from '@material-ui/core/Hidden'
const styles = {

}
class ProductPage extends Component {
  state = {

  }




  render() {

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


          <Footer2 />
        </Hidden>
        <Hidden only={['xl', 'sm', 'md', 'lg']} implementation="css">

        </Hidden>
      </div>
    )
  }
}

export default withStyles(styles)(ProductPage)
