import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    shodow:'none'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menu : {
    display: 'flex',
    flexDirection: 'row',
    width:'50%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  navRightButtons: {
    display: 'flex',
    flexDirection: 'row',
    marginRight:'1rem'
  }
}));

function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleChange(event) {
    setAuth(event.target.checked);
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
            <img src='static/SHOPMATE.svg' alt='shopmate' />
            <div className={classes.menu}>
              <Typography variant="subtitle1" display="block" gutterBottom className={classes.title}>
                Women
              </Typography>
              <Typography variant="subtitle1" display="block" gutterBottom className={classes.title}>
                Men
              </Typography>
              <Typography variant="subtitle1" display="block" gutterBottom className={classes.title}>
                Kids
              </Typography>
              <Typography variant="subtitle1" display="block" gutterBottom className={classes.title}>
                Shoes
              </Typography>
              <Typography variant="subtitle1" display="block" gutterBottom className={classes.title}>
                Brands
              </Typography>
            </div>
            <div className={classes.navRightButtons}>
              <div style={{marginLeft:'2rem'}}><img src='static/search.svg' alt='search' /></div>
              <div style={{marginLeft:'2rem'}}><img src='static/bag.svg' alt='bag' /></div>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuAppBar;
