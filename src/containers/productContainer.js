import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'

import theme from '../theme'
import ItemCard from '../components/itemCard'
import FilterBox from '../components/filterBox'
import ButtonComp from '../components/button'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  }
}

class ProductContainer extends Component {
  state = {}

  render() {
    const {
      classes,
      products,
      searchMessage,
      categories,
      departments,
      getMoreProducts,
      searchMoreProducts,
      clearProducts,
      searchInitiated,
      loadingProducts,
      getCategoriesByDepartment,
      categoriesInSelectedDept,
      getProducts,
      getMoreProductsInCategory,
      selectedDepartmentName,
      selectDepartmentName,
      loadingCategories
    } = this.props

    const { skip, limit, param } = this.state
    //console.log(products)
    return (
      <div style={{ width: '100%' }}>
        <div className={classes.container}>
          <Hidden only={['xl', 'sm', 'xs']} implementation="css">
            <div className={classes.content}>
              <FilterBox
                productCount={products ? products.count : 0}
                categories={categories}
                departments={departments}
                clearProducts={clearProducts}
                getCategoriesByDepartment={getCategoriesByDepartment}
                categoriesInSelectedDept={categoriesInSelectedDept}
                getProducts={getProducts}
                selectedDepartmentName={selectedDepartmentName}
                selectDepartmentName={selectDepartmentName}
                loadingCategories={loadingCategories}
              />
            </div>
          </Hidden>
          <div
            style={{
              position: 'absolute',
              marginLeft: '35%',
              marginTop: '-2rem'
            }}
          >
            {products && products.count > 0 ? searchMessage : 'no result'}
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              margin: 'auto',
              marginTop: 0
            }}
          >
            {products &&
              products.rows.slice(0, 6).map((item, i) => (
                <div style={{ display: 'flex' }} key={item.product_id}>
                  <ItemCard
                    style={{ marginRight: '2rem', marginBottom: '2rem' }}
                    title={item.name}
                    image={item.thumbnail}
                    id={item.product_id}
                    price={item.price}
                    discounted_price={item.discounted_price}
                  />
                </div>
              ))}
          </div>
        </div>
        <Hidden only={['xl', 'sm']} implementation="css">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around'
            }}
          >
            {products &&
              products.rows.slice(6).map((item, i) => (
                <div
                  style={{ display: 'flex', margin: '2rem' }}
                  key={item.product_id}
                >
                  <ItemCard
                    box={1}
                    title={item.name}
                    image={item.thumbnail}
                    id={item.product_id}
                    price={item.price}
                    discounted_price={item.discounted_price}
                  />
                </div>
              ))}
          </div>
        </Hidden>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {loadingProducts ? (
            <img
              style={{ width: '5%' }}
              src="static/loading.gif"
              alt="loading"
            />
          ) : null}
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}
        >
          {!loadingProducts && products.count > products.rows.length ? (
            <ButtonComp
              button={1}
              fontSize="1rem"
              width="fit-content"
              onClick={() => {
                getMoreProductsInCategory()
              }}
              text="Load More"
            />
          ) : null}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ProductContainer)
