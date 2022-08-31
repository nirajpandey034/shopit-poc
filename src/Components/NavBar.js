import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import DrawerComponent from './Drawer';

import { useContext } from 'react';
import { MyContext } from './ContextProvider';

function Navbar() {
  const { state } = useContext(MyContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'space-between',
              width: '100vw',
            }}
          >
            <div style={{ display: 'flex', gap: '1rem', marginRight: 'auto' }}>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/about">About</Link>
              <Link to="/contact-us">Contact Us</Link>
            </div>
            <div
              style={{
                marginLeft: 'auto',
                marginRight: '1.5rem',
              }}
            >
              <Link to="/cart">
                {state?.products.length > 0 ? (
                  <Badge badgeContent={state.products.length} color="secondary">
                    <ShoppingBasketIcon />
                  </Badge>
                ) : (
                  <ShoppingBasketIcon />
                )}
              </Link>
            </div>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
