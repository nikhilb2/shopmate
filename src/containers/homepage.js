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
import Box from '@material-ui/core/Box'
import PaymentForm from '../components/paymentForm'
import Typography from '@material-ui/core/Typography'
import ButtonComp from '../components/button'

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
      stripeChargeResponse
    } = this.props
    //console.log(this.props);
    return (
      <div style={{ backgroundColor: '#F7F7F7' }}>
        {orderStatus ? (
          stripeChargeResponse ? (
            <Box
              bgcolor="#eeefef"
              color="text.primary"
              boxShadow={4}
              p={2}
              position="fixed"
              top={0}
              left="35%"
              zIndex="modal"
              style={{
                top: '30%',
                width: '50%'
              }}
            >
              <Typography variant="h5" style={{ textAlign: 'center' }}>
                {stripeChargeResponse.status}
              </Typography>
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                Amount: £{stripeChargeResponse.amount / 100}
              </Typography>
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                Reciept:{' '}
                <a
                  href={stripeChargeResponse.receipt_url}
                  alt="Reciept"
                  target="_blank"
                >
                  click to open
                </a>
              </Typography>
              <div>
                <ButtonComp
                  fontSize="1rem"
                  width="3rem"
                  text="Ok"
                  onClick={clearOrderStatus}
                  button={1}
                />
              </div>
            </Box>
          ) : (
            <Box
              bgcolor="#eeefef"
              color="text.primary"
              boxShadow={4}
              p={2}
              position="fixed"
              top={0}
              left="35%"
              zIndex="modal"
              style={{
                top: '30%',
                width: '50%'
              }}
            >
              <Typography variant="h5" style={{ textAlign: 'center' }}>
                Payment details
              </Typography>
              <PaymentForm
                saveStripeToken={saveStripeToken}
                stripeCharge={stripeCharge}
              />
              <ButtonComp
                fontSize="1rem"
                width="3rem"
                text="Cancel"
                onClick={clearOrderStatus}
                button={1}
              />
            </Box>
          )
        ) : null}
        <NavBarMen
          cartItems={newCartItems ? newCartItems : cartItems}
          totalItems={
            newTotalItems || newTotalItems === 0 ? newTotalItems : totalItems
          }
          amount={newAmount ? newAmount : amount}
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
