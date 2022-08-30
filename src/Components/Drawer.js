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
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function DrawerComponent() {
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
              <Link to="#">About</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="#">Contact Us</Link>
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
          <ShoppingBasketIcon style={{ color: 'white' }} />
        </IconButton>
      </div>
    </>
  );
}
export default DrawerComponent;
