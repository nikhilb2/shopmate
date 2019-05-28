import React, { Component } from 'react';
import NavigationBar from './navBar'
import NavBarMobile from './navBarMobile'
import Hidden from '@material-ui/core/Hidden';
import SimpleContainer from './container'
const text = "Background and development"
const textMobile = "All Shoes"
const caption = "Convergent the dictates of the costumer: background and development"
const captionMobile = "Even this white with red"
class Homepage extends Component {
  render() {
    return (
      <div>
      <Hidden only={['sm','xs']}>
        <NavigationBar />
      </Hidden>
      <Hidden only={['lg','md']}>
        <NavBarMobile />
      </Hidden>
      <Hidden only={['xs']}>
        <SimpleContainer image='static/banner.png' text={text} caption={caption} buttonText='View All'/>
      </Hidden>
      <Hidden only={['xl','sm','md']}>
        <SimpleContainer image='static/sale.png' text={textMobile} caption={captionMobile} buttonText='View All'/>
      </Hidden>
      </div>
    )
  }

}

export default Homepage
