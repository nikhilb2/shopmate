import React, { Component } from 'react'
import NavigationBar from '../components/navBar'
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
import NavBarMen from '../components/navBarMen'
import BannerMobileMini from '../components/bannerMobileMini'
import ItemCard from '../components/itemCard'
import OrderStatus from './orderStatus'

const text = 'Background and development'
const textMobile = 'All Shoes'
const caption =
  'Convergent the dictates of the costumer: background and development'
const captionMobile = 'Even this white with red'
class Homepage extends Component {
  render() {
    const {
      totalItems,
      cartItems,
      amount,
      user,
      products,
      categories,
      addToCart,
      newCartItems,
      newTotalItems,
      newAmount,
      removeFromCart,
      reduceQuantity,
      clearProducts,
      orderStatus,
      clearOrderStatus,
      stripeToken,
      saveStripeToken,
      placeOrder,
      stripeCharge,
      stripeChargeResponse,
      setStripe,
      departments,
      selectDepartmentName,
      getCategoriesByDepartment
    } = this.props
    //console.log('home')
    //console.log(this.props)
    return (
      <div style={{ backgroundColor: '#F7F7F7' }}>
        <OrderStatus
          orderStatus={orderStatus}
          stripeChargeResponse={stripeChargeResponse}
          saveStripeToken={saveStripeToken}
          stripeCharge={stripeCharge}
          clearOrderStatus={clearOrderStatus}
          setStripe={setStripe}
        />
        <NavBarMen
          cartItems={newCartItems ? newCartItems : cartItems}
          totalItems={
            newTotalItems || newTotalItems === 0 ? newTotalItems : totalItems
          }
          amount={newAmount || newAmount === 0 ? newAmount : amount}
          bgcolor="#efefef"
          placeOrder={placeOrder}
          user={user}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          reduceQuantity={reduceQuantity}
          orderStatus={orderStatus}
          clearOrderStatus={clearOrderStatus}
        />

        <Hidden only={['sm', 'xs']} implementation="css">
          <NavigationBar
            categories={categories}
            clearProducts={clearProducts}
            departments={departments}
            selectDepartmentName={selectDepartmentName}
            getCategoriesByDepartment={getCategoriesByDepartment}
          />
        </Hidden>
        <Hidden only={['lg', 'md']} implementation="css">
          <NavBarMobile categories={categories} />
        </Hidden>
        <Hidden only={['xs']} implementation="css">
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
        <Hidden only={['xl', 'sm', 'md', 'lg']} implementation="css">
          <BannerMobile
            image="static/sale.png"
            text={textMobile}
            caption={captionMobile}
            buttonText="Check Twice"
          />
          <BannerMobileMini
            bgcolor="#FE5C07"
            text="Autumn"
            caption="will come again"
          />
          {products &&
            products.rows.map((item, i) => (
              <div>
                {i < 6 ? (
                  <ItemCard
                    title={item.name}
                    image={item.thumbnail}
                    id={item.product_id}
                    style={{ width: '100%', margin: 0, marginBottom: '1.5rem' }}
                  />
                ) : null}
              </div>
            ))}
        </Hidden>
      </div>
    )
  }
}

export default Homepage
