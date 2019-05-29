import React, { Component } from 'react'
import NavigationBar from '../components/navBar'
import NavBarMen from '../components/navBarMen'
import NavBarMobile from '../components/navBarMobile'
import SaleBox from '../components/saleBox'
import MiniBox from '../components/miniBox'
import RegisterCard from '../components/registerCard'
import Hidden from '@material-ui/core/Hidden'
import Banner from '../components/banner'
import BannerMobile from '../components/bannerMobile'
import CBContainer from './cardBoxCont'
import SubsContainer from './subscriptionContainer'
import Footer from '../components/footer'

const text = 'Background and development'
const textMobile = 'All Shoes'
const caption =
  'Convergent the dictates of the costumer: background and development'
const captionMobile = 'Even this white with red'
class MensPage extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#F7F7F7' }}>
        <Hidden only={['sm', 'xs']}>
          <NavBarMen />
          <NavigationBar bgcolor="#323232" color="white" searchBox={true} />
        </Hidden>
        <Hidden only={['lg', 'md']}>
          <NavBarMobile />
        </Hidden>
        <Hidden only={['xs']}>
          <Banner
            image="static/banner.png"
            text={text}
            caption={caption}
            buttonText="View All"
          />
          <SaleBox />
          <CBContainer />
          <SubsContainer />
          <Footer />
        </Hidden>
        <Hidden only={['xl', 'sm', 'md', 'lg']}>
          <BannerMobile
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

export default MensPage
