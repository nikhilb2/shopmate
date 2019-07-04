import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import theme from '../theme'
import SearchBox from './searchBox'
import Work from '@material-ui/icons/WorkOutlineRounded'
import Button from '@material-ui/core/Button'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    shodow: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  navRightButtons: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '1rem'
  }
}))

const MenuAppBar = props => {
  const classes = useStyles()
  const {
    bgcolor,
    color,
    searchBox,
    onChange,
    categories,
    clearProducts,
    departments,
    selectDepartmentName,
    getCategoriesByDepartment
  } = props
  //console.log(props)
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: bgcolor ? bgcolor : theme.palette.primary.main,
          color: color ? color : 'black'
        }}
        elevation={0}
      >
        <Toolbar>
          <Link href="/">
            <Button onClick={() => clearProducts()} color="primary">
              <img src="static/SHOPMATE.svg" alt="shopmate" />
            </Button>
          </Link>
          <div className={classes.menu}>
            <div style={{ flexGrow: 1 }} />
            {departments &&
              departments.map((item, i) => (
                <div style={{ flexGrow: 1 }}>
                  {i < 6 ? (
                    <div>
                      <Link
                        key={item.category_id}
                        href={{
                          pathname: '/category',
                          query: { depId: item.department_id }
                        }}
                      >
                        <Button
                          style={{ textTransform: 'none' }}
                          color={color ? color : 'black'}
                          className={classes.title}
                          onClick={() => {
                            clearProducts()
                            selectDepartmentName(item.name)
                            getCategoriesByDepartment(item.department_id)
                          }}
                        >
                          {item.name}
                        </Button>
                      </Link>
                    </div>
                  ) : null}
                </div>
              ))}
          </div>
          {searchBox ? (
            <SearchBox onChange={onChange} />
          ) : (
            <div className={classes.navRightButtons}>
              <div style={{ marginLeft: '2rem' }}>
                <img src="static/search.svg" alt="search" />
              </div>
              <div style={{ marginLeft: '2rem' }}>
                <img src="static/bag.svg" alt="bag" />
              </div>
            </div>
          )}
          {searchBox ? (
            <Work color="primary" style={{ margin: '1rem' }} />
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MenuAppBar
