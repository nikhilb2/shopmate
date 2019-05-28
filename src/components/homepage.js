import React, { Component } from 'react'
import NavigationBar from './navBar'
import NavBarMobile from './navBarMobile'
import SaleBox from './saleBox'
import MiniBox from './miniBox'
import RegisterCard from './registerCard'
import Hidden from '@material-ui/core/Hidden'
import SimpleContainer from './container'
import SimpleContainerMobile from './containerMobile'
const text = 'Background and development'
const textMobile = 'All Shoes'
const caption =
  'Convergent the dictates of the costumer: background and development'
const captionMobile = 'Even this white with red'
class Homepage extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#F7F7F7' }}>
        <Hidden only={['sm', 'xs']}>
          <NavigationBar />
        </Hidden>
        <Hidden only={['lg', 'md']}>
          <NavBarMobile />
        </Hidden>
        <Hidden only={['xs']}>
          <SimpleContainer
            image="static/banner.png"
            text={text}
            caption={caption}
            buttonText="View All"
          />
          <SaleBox />
          <MiniBox
            style={{ backgroundColor: '#84E6F1' }}
            color="black"
            colorCaption="#F62F5E"
            title="WOW"
            caption="Check WHAT!"
          />
          <MiniBox
            style={{
              backgroundImage: "url('static/men.png')",
              backgroundSize: 'cover'
            }}
            title="MEN"
            color="white"
          />
          <RegisterCard />
        </Hidden>
        <Hidden only={['xl', 'sm', 'md', 'lg']}>
          <SimpleContainerMobile
            image="static/sale.png"
            text={textMobile}
            caption={captionMobile}
            buttonText="Check Twice"
          />
        </Hidden>
      </div>
    )
  }
}

export default Homepage
