import React, { Component } from 'react'
import NavigationBar from '../components/navBar'
import NavBarMen from '../components/navBarMen'
import NavBarMobile from '../components/navBarMobile'
import SaleBox from '../components/saleBox'
import MiniBox from '../components/miniBox'
import RegisterCard from '../components/registerCard'
import Hidden from '@material-ui/core/Hidden'
import MenBanner from '../components/menBanner'
import BannerMobile from '../components/bannerMobile'
import CBContainer from './cardBoxCont'
import ProductContainer from './productContainer'
import SubsContainer from './subscriptionContainer'
import Footer from '../components/footer'
import ItemCard from '../components/itemCard'
import FilterBox from '../components/filterBox'
import { decoratedUrl } from '../utils/request'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Subscribe from '../components/subscribe'
import SocialIcons from '../components/socialIcons'
import Footer2 from '../components/footer2'
import { getCartId } from '../utils/auth'
import { fetchRequest } from '../utils/request'

const text = 'Background and development'
const textMobile = 'All Shoes'
const caption =
  'Convergent the dictates of the costumer: background and development'
const captionMobile = 'Even this white with red'
const styles = {
  brandBanner: {
    backgroundColor: '#1D1E1F',
    paddingTop: '5rem',
    height: '30rem'
  }
}
class MensPage extends Component {
  state = {
    keyword: '',
    showSignIn: 'hidden',
    cartItems: []
  }

  searchProducts(keyword) {
    fetch(decoratedUrl(`products/search?query_string=${keyword}`))
      .then(response => response.json())
      .then(result => {
        this.setState({ productSearch: result, keyword })
      })
  }

  render() {
    const {
      classes,
      categories,
      products,
      countItems,
      totalItems,
      cartItems,
      amount,
      user
    } = this.props
    const { productSearch, keyword, showSignIn } = this.state
    console.log('this.props')
    console.log(this.props)
    return (
      <div style={{ backgroundColor: '#F7F7F7' }}>
        <Hidden only={['sm', 'xs']} implementation="css">
          <NavBarMen
            totalItems={totalItems}
            cartItems={cartItems}
            amount={amount}
            user={user}
          />
          <NavigationBar
            onChange={keyword => this.searchProducts(keyword)}
            bgcolor="#323232"
            color="primary"
            searchBox={true}
          />
        </Hidden>
        <Hidden only={['lg', 'md']} implementation="css">
          <NavBarMobile />
        </Hidden>
        <Hidden only={['xs']} implementation="css">
          <MenBanner
            image="static/menban.png"
            text="Categories"
            categories={categories}
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ProductContainer
              products={
                productSearch && keyword.length > 0 ? productSearch : products
              }
              searchMessage={
                productSearch && productSearch.count > 0
                  ? `${productSearch.count} ${
                      productSearch.count > 1 ? 'matches' : 'match'
                    } found`
                  : null
              }
              productSearchCount={
                productSearch && productSearch.count > 0 ? true : false
              }
              keywordInput={key => this.keywordInput(key)}
            />
          </div>
          <div className={classes.brandBanner}>
            <MenBanner image="static/brand.png" />
          </div>
          <div
            style={{
              backgroundColor: '#EFEFEF',
              height: '4rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                marginTop: 'auto',
                marginBottom: 'auto',
                marginRight: '2rem'
              }}
              onClick={() => this.setState({ showSignIn: '' })}
            >
              <Typography style={{ fontWeight: 'bold' }}>
                SUBSCRIBE FOR SHOP NEWS, UPDATES AND SPECIAL OFFERS
              </Typography>
            </div>
            <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              <Subscribe />
            </div>
          </div>
          <Footer2 />
        </Hidden>
        <Hidden only={['xl', 'sm', 'md', 'lg']} implementation="css">
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

export default withStyles(styles)(MensPage)
