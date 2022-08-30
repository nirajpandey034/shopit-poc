import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DrawerComponent from "./Drawer";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
              width: "100vw",
            }}
          >
            <div style={{ display: "flex", gap: "1rem", marginRight: "auto" }}>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="#">About</Link>
              <Link to="#">Contact Us</Link>
            </div>
            <div
              style={{
                marginLeft: "auto",
                marginRight:"1.5rem"
              }}
            >
              <Link to="/cart">
                <ShoppingBasketIcon />
              </Link>
            </div>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
