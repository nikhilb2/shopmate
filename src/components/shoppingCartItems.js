import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { decoratedImageUrl } from '../utils/request'
import Typography from '@material-ui/core/Typography'
import PlusMinus from './plusMinus'
import Button from '@material-ui/core/Button'
import Close from '@material-ui/icons/Close'
import Color from './colorAttribute'
import Size from './sizeAttribute'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    boxShadow: 'none',
    border: 0
  },
  table: {
    minWidth: 650
  },
  imageThumbHolder: {
    width: '96px',
    height: '96px'
  },
  nameAndImage: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-start'
  },
  tableCell: {
    borderBottomWidth: 0
  },
  titleTableCell: {
    borderBottomWidth: '1px'
  },
  attribute: {
    display: 'flex',
    marginLeft: '1rem'
  }
}))

const CartItems = props => {
  const classes = useStyles()
  const { cartItems, addToCart, removeFromCart, reduceQuantity } = props
  //console.log('cartItems')
  //console.log(cartItems)
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.titleTableCell}>Item</TableCell>
            <TableCell className={classes.titleTableCell} align="right">
              Quantity
            </TableCell>
            <TableCell className={classes.titleTableCell} align="right">
              Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody shadow={0}>
          {cartItems.map((row, i) => (
            <TableRow key={row.name + i}>
              <TableCell
                component="th"
                scope="row"
                className={classes.tableCell}
              >
                <div className={classes.nameAndImage}>
                  <div className={classes.imageThumbHolder}>
                    <img
                      style={{ width: '86px', margin: '.5rem' }}
                      src={decoratedImageUrl(row.image)}
                      alt={row.name}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: 'auto',
                      textAlign: 'left',
                      marginBottom: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography style={{ marginLeft: '.5rem', margin: '1rem' }}>
                      {row.name}
                    </Typography>
                    {row.attributes !== 'none' ? (
                      <div className={classes.attribute}>
                        <div
                          style={{ marginTop: 'auto', marginBottom: 'auto' }}
                        >
                          <Color color={row.attributes.split(' ')[0]} />
                        </div>
                        <div
                          style={{ marginTop: 'auto', marginBottom: 'auto' }}
                        >
                          <Size size={row.attributes.split(' ')[1]} />
                        </div>
                      </div>
                    ) : null}
                    <Button
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        marginLeft: '.5rem',
                        textTransform: 'none'
                      }}
                      onClick={() => removeFromCart(row.item_id)}
                    >
                      <Close /> Remove
                    </Button>
                  </div>
                </div>
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                <PlusMinus
                  addToCart={() => addToCart(row.product_id)}
                  quantity={row.quantity}
                  itemId={row.item_id}
                  upddateBag={true}
                  reduceQuantity={reduceQuantity}
                />
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                <Typography>£{row.price}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default CartItems
