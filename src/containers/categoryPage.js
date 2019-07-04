import React, { Component } from 'react'
import NavigationBar from '../components/navBar'
import NavBarMen from '../components/navBarMen'
import NavBarMobile from '../components/navBarMobile'
import SaleBox from '../components/saleBox'
import MiniBox from '../components/miniBox'
import RegisterCard from '../components/registerCard'
import Hidden from '@material-ui/core/Hidden'
import CategoryBanner from '../components/categoryBanner'
import BannerMobile from '../components/bannerMobile'
import CBContainer from './cardBoxCont'
import ProductContainer from './productContainer'
import SubsContainer from './subscriptionContainer'
import Footer from '../components/footer'
import ItemCard from '../components/itemCard'
import { decoratedUrl } from '../utils/request'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Subscribe from '../components/subscribe'
import SocialIcons from '../components/socialIcons'
import Footer2 from '../components/footer2'
import { getCartId } from '../utils/auth'
import { fetchRequest } from '../utils/request'
import { withRouter } from 'next/router'
import OrderStatus from './orderStatus'

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
class CategoryPage extends Component {
  state = {
    skip: 1,
    limit: 9
  }
  /*
  searchProducts(keyword) {
    fetch(decoratedUrl(`products/search?query_string=${keyword}`))
      .then(response => response.json())
      .then(result => {
        this.setState({ newProducts: result, keyword })
      })
  }

  componentDidMount() {
    this.checkParam()
  }

  checkParam() {
    const { query } = this.props.router

    if (query.catId) {
      this.setState({
        param: { name: 'inCategory', id: query.catId, ogName: 'catId' }
      })
    }
    if (query.depId) {
      this.setState({
        param: { name: 'inDepartment', id: query.deptId, ogName: 'depId' }
      })
    }
    //console.log(this.props)
  }

  async getMoreProducts() {
    const updateParams = await this.checkParam()
    const { newProducts, skip, limit, param } = this.state
    if (param.name === 'inCategory' || param.name === 'inDepartment') {
      const getMoreProducts = await fetchRequest(
        `products/${param.name}/${param.id}?page=${skip}&limit=${limit}`,
        {
          method: 'GET'
        }
      )
      if (newProducts) {
        let prod = newProducts.rows
        prod.push(...getMoreProducts.rows)
        this.setState({
          newProducts: {
            rows: prod,
            count: getMoreProducts.count
          },
          skip: skip + 1
        })
        //console.log('getMoreProducts')
        //console.log(getMoreProducts)
      } else {
        let prod = this.props.products.rows
        prod.push(...getMoreProducts.rows)
        this.setState({
          newProducts: {
            rows: prod,
            count: getMoreProducts.count
          },
          skip: skip + 1
        })
      }
    } else {
      const getMoreProducts = await fetchRequest(
        `products?page=${skip}&limit=${limit}`,
        {
          method: 'GET'
        }
      )
      if (newProducts) {
        let prod = newProducts.rows
        prod.push(...getMoreProducts.rows)
        this.setState({
          newProducts: {
            rows: prod,
            count: getMoreProducts.count
          },
          skip: skip + 1
        })
        //console.log('getMoreProducts')
        //console.log(getMoreProducts)
      } else {
        let prod = this.props.products.rows
        prod.push(...getMoreProducts.rows)
        this.setState({
          newProducts: {
            rows: prod,
            count: getMoreProducts.count
          },
          skip: skip + 1
        })
      }
    }
  }

  clearProducts() {
    this.setState({ newProducts: null, skip: 2 })
  }
  */

  render() {
    const {
      classes,
      categories,
      products,
      countItems,
      totalItems,
      cartItems,
      amount,
      user,
      departments,
      addToCart,
      newCartItems,
      newTotalItems,
      newAmount,
      removeFromCart,
      reduceQuantity,
      productSearch,
      keyword,
      newProducts,
      getMoreProducts,
      searchProducts,
      searchMoreProducts,
      searchInitiated,
      clearProducts,
      orderStatus,
      clearOrderStatus,
      placeOrder,
      stripeChargeResponse,
      saveStripeToken,
      stripeCharge,
      setStripe,
      loadingProducts,
      getCategoriesByDepartment,
      categoriesInSelectedDept,
      getProducts,
      getMoreProductsInCategory,
      selectDepartmentName,
      selectedDepartmentName,
      loadingCategories
    } = this.props
    //console.log(newProducts)
    //console.log('searchInitiated')
    //console.log(loadingProducts)
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
            onChange={searchProducts}
            bgcolor="#323232"
            color="primary"
            searchBox={true}
            categories={categories}
            clearProducts={clearProducts}
            selectDepartmentName={selectDepartmentName}
            departments={departments}
            getCategoriesByDepartment={getCategoriesByDepartment}
          />
        </Hidden>
        <Hidden only={['lg', 'md']} implementation="css">
          <NavBarMobile categories={categories} back={true} />
        </Hidden>
        <Hidden only={['xs']} implementation="css">
          {!searchInitiated ? (
            <CategoryBanner
              image="static/menban.png"
              text="Categories"
              categories={categories}
              clearProducts={clearProducts}
            />
          ) : null}

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {searchInitiated ? (
              <ProductContainer
                getMoreProducts={searchMoreProducts}
                loadingProducts={loadingProducts}
                products={newProducts ? newProducts : products}
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
                categories={categories}
                departments={departments}
                clearProducts={clearProducts}
                getCategoriesByDepartment={getCategoriesByDepartment}
                categoriesInSelectedDept={categoriesInSelectedDept}
                getProducts={getProducts}
                getMoreProductsInCategory={getMoreProductsInCategory}
                selectedDepartmentName={selectedDepartmentName}
                selectDepartmentName={selectDepartmentName}
                loadingCategories={loadingCategories}
              />
            ) : (
              <ProductContainer
                getMoreProducts={getMoreProducts}
                loadingProducts={loadingProducts}
                products={newProducts ? newProducts : products}
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
                categories={categories}
                departments={departments}
                clearProducts={clearProducts}
                getCategoriesByDepartment={getCategoriesByDepartment}
                categoriesInSelectedDept={categoriesInSelectedDept}
                getProducts={getProducts}
                getMoreProductsInCategory={getMoreProductsInCategory}
                selectedDepartmentName={selectedDepartmentName}
                selectDepartmentName={selectDepartmentName}
                loadingCategories={loadingCategories}
              />
            )}
          </div>
          <div className={classes.brandBanner}>
            <CategoryBanner image="static/brand.png" />
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
          {products &&
            products.rows.map((item, i) => (
              <div key={item.product_id}>
                {i < 10 ? (
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

export default withRouter(withStyles(styles)(CategoryPage))
