import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import ButtonComp from './button'
import theme from '../theme'
import { getCartId } from '../utils/auth'
import { fetchRequest } from '../utils/request'

const styles = {
  typography: {
    padding: theme.spacing(2)
  }
}

class ShoppingCartPopper extends Component {
  state = {
    anchorEl: null,
  }


  render() {
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : null
    const { type, text, classes, countItems } = this.props
    //console.log(this.props);
    return (
      <div>
        <Button
          style={{
            color: theme.palette.secondary.main,
            textTransform: 'none',
            padding: 1,
            margin: 0
          }}
          onClick={(event) => this.setState({anchorEl: event.currentTarget})}
        >
          {text} {countItems}
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={() => this.setState({anchorEl: null})}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <div>
            Something will pop
            Something will pop
            Something will pop
            Something will pop
            Something will pop
          </div>
        </Popover>
      </div>
    )
  }

}

export default ShoppingCartPopper
