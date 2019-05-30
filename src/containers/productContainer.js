import React from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

import theme from '../theme'
import ItemCard from '../components/itemCard'
import FilterBox from '../components/filterBox'

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

const ProductContainer = props => {
  const { classes, products, searchMessage } = props
  return (
    <div style={{ width: '100%' }}>
      <div className={classes.container}>
        <div className={classes.content}>
          <FilterBox />
        </div>
        <div
          style={{
            position: 'absolute',
            marginLeft: '35%',
            marginTop: '-2rem'
          }}
        >
          { products && products.count > 0 ? searchMessage : 'no result' }
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
            products.rows.map((item, i) => (
              <div style={{ display: 'flex' }}>
                {i < 6 ? (
                  <ItemCard
                    style={{ marginRight: '2rem', marginBottom: '2rem' }}
                    title={item.name}
                    image={item.thumbnail}
                  />
                ) : null}
              </div>
            ))}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}
      >
        {products &&
          products.rows.map((item, i) => (
            <div style={{ display: 'flex', marginBottom: '-5rem' }}>
              {i > 6 && i < 10 ? (
                <ItemCard box={1} title={item.name} image={item.thumbnail} />
              ) : null}
            </div>
          ))}
      </div>
    </div>
  )
}

export default withStyles(styles)(ProductContainer)
