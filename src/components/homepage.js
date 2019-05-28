import React, { Component } from 'react';
import NavigationBar from './navBar'
import NavBarMobile from './navBarMobile'
import SaleBox from './saleBox'
import Hidden from '@material-ui/core/Hidden';
import SimpleContainer from './container'
import SimpleContainerMobile from './containerMobile'
const text = "Background and development"
const textMobile = "All Shoes"
const caption = "Convergent the dictates of the costumer: background and development"
const captionMobile = "Even this white with red"
class Homepage extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#F7F7F7'}}>
      <Hidden only={['sm','xs']}>
        <NavigationBar />
      </Hidden>
      <Hidden only={['lg','md']}>
        <NavBarMobile />
      </Hidden>
      <Hidden only={['xs']}>
        <SimpleContainer image='static/banner.png' text={text} caption={caption} buttonText='View All'/>
        <SaleBox />
      </Hidden>
      <Hidden only={['xl','sm','md','lg']}>
        <SimpleContainerMobile image='static/sale.png' text={textMobile} caption={captionMobile} buttonText='Check Twice'/>
      </Hidden>
      </div>
    )
  }

}

export default Homepage
