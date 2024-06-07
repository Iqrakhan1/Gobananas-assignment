import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link, useLocation } from "react-router-dom";

const pages = ["Home", "Shop", "Products", "Contact Us"];
const settings = ["Profile", "Account", "Dashboard"];

function Navbar() {
  // State for navigation menu anchor element
  const [anchorElNav, setAnchorElNav] = useState(null);
  // State for user menu anchor element
  const [anchorElUser, setAnchorElUser] = useState(null);

  // Get current location using useLocation hook from react-router-dom
  const location = useLocation();

  // Handlers for opening navigation menu and user menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // Handlers for closing navigation menu and user menu
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    // App bar component
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#ffffff",
        color: "#6a1b9a",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid #ccc", // Add bottom border
      }}>
      {/* Container for the app bar content */}
      <Container maxWidth="xl">
        {/* Toolbar component */}
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between", // Align items to the start and end
          }}>
          {/* Logo and brand name */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ShoppingBagIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#6a1b9a",
                textDecoration: "none",
              }}>
              MART
            </Typography>
          </Box>

          {/* Navigation links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              ml: 10, // Add left margin
            }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase().replace(/ /g, "-")}`}
                sx={{
                  my: 2,
                  mx: 1.5, // Add horizontal spacing between buttons
                  color: "#6a1b9a",
                  display: "block",
                  fontWeight: 700, // Bold font weight
                  borderBottom:
                    location.pathname ===
                    `/${page.toLowerCase().replace(/ /g, "-")}`
                      ? "2px solid #6a1b9a" // Active border
                      : "none",
                }}>
                {page}
              </Button>
            ))}
          </Box>

          {/* User avatar and settings menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                  sx={{ bgcolor: "#6a1b9a" }} // Set profile icon color
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {/* Render each setting as a menu item */}
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Menu icon for mobile view */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            {/* Navigation menu for mobile view */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={`/${page.toLowerCase().replace(/ /g, "-")}`}>
                  {/* Render each page as a menu item */}
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
