import React, { Component } from 'react';
import NavigationBar from './navBar'
import NavBarMobile from './navBarMobile'
import Hidden from '@material-ui/core/Hidden';
import SimpleContainer from './container'
const text = "Background and development"
const caption = "Convergent the dictates of the costumer: background and development"
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
        <SimpleContainer image='static/banner.png' text={text} caption={caption} buttonText='View All'/>
      </div>
    )
  }

}

export default Homepage
