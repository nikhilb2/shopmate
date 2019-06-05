import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import SignInPopper from './signInPopper'
import Link from 'next/link'

const MainMenu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }
  const { menuItems, color } = props
  return (
    <div>
      <Button
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon color={color ? color : 'secondary'} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems
          ? menuItems.rows.map(item => (
              <Link
                key={item.category_id}
                href={{
                  pathname: '/category',
                  query: { catId: item.category_id }
                }}
              >
                <MenuItem onClick={handleClose}>{item.name}</MenuItem>
              </Link>
            ))
          : null}
      </Menu>
    </div>
  )
}

export default MainMenu
