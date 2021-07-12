import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { StyledToolbar, LeftBar } from './Styled';
import RedditIcon from '@material-ui/icons/Reddit';
import { useHistory } from 'react-router-dom';
import { goToFeed, goToLogin, goToSignUp } from '../../routes/coordinator';


const Header = () => {
  const history = useHistory()
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar position="static">
        <StyledToolbar>
          <LeftBar>
          <Button onClick={()=>goToFeed(history)}>
          <RedditIcon />
            LabEddit
          </Button>
          </LeftBar>
          {auth && (
            <div>
              <IconButton 
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose, ()=>goToLogin(history)}>Login</MenuItem>
                <MenuItem onClick={handleClose, ()=>goToSignUp(history)}>SignUp</MenuItem>
              </Menu>
            </div>
          )}
        </StyledToolbar>
      </AppBar>
  );
}


export default Header