import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { MyContext } from './ContextProvider';

function DrawerComponent({ cartCount }) {
  const { state } = useContext(MyContext);
  const [openDrawer, setOpenDrawer] = useState(false);
  let navigate = useNavigate();
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className="drawer"
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/shop">Shop</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about">About</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact-us">Contact Us</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100vw',
        }}
      >
        <Typography variant="h5" style={{ alignSelf: 'center' }}>
          ShopIt
        </Typography>
        <IconButton onClick={() => navigate('/cart')}>
          {state?.products.length > 0 ? (
            <Badge badgeContent={state?.products.length} color="secondary">
              <ShoppingBasketIcon style={{ color: 'white' }} />
            </Badge>
          ) : (
            <ShoppingBasketIcon style={{ color: 'white' }} />
          )}
        </IconButton>
      </div>
    </>
  );
}
export default DrawerComponent;
