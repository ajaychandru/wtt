import  React from "react";
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
import styles from "./Appbar.module.css"
import HikingIcon from '@mui/icons-material/Hiking';

const pages = [{ title: "World", href: "/category/world" }, { title: "Tech", href: "/category/tech" }, { title: "Travel", href: "/category/travel" }];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className={styles.navbar} elevation={4} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HikingIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            WTT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
          
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Button sx={{color:"black"}} href={page.href}>{page.title}</Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <HikingIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            WTT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                href={page.href}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton color="inherit" onClick={handleOpenUserMenu} elevation={1}>
                <Avatar alt="Remy Sharp" src="data:image/png;base64,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" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
