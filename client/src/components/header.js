import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { QUERY_SINGLE_STYLIST } from "../utils/queries";
import Auth from "../utils/auth";

const settings = ["Profile", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let { userId } = useParams();

  const { data } = useQuery(QUERY_SINGLE_STYLIST, {
    variables: { userId: userId },
  });

  const user = data?.user || [];

  return (
    <AppBar position="static" color="warning">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              }}
            >
              <MenuItem>
                <Link to="/about">
                  <Typography textAlign="center">About Us</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/stylists">
                  <Typography textAlign="center">Stylists</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/services">
                  <Typography textAlign="center">Services</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                {Auth.loggedIn() ? (
                  <>
                    <Link to="/profile">
                      <Button sx={{ my: 2, color: "white", display: "block" }}>
                        <Typography textAlign="center">Profile</Typography>
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button sx={{ my: 2, color: "white", display: "block" }}>
                        <Typography textAlign="center">
                          Login / Signup
                        </Typography>
                      </Button>
                    </Link>
                  </>
                )}
              </MenuItem>
            </Menu>
          </Box>
          <Link to="/">
            <h4 className="hairTours" style={{ color: "white" }}>
              Hair Tours
            </h4>
          </Link>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="justify-space-between mx-5"
          >
            <div className="row">
              <Link to="/about">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  <Typography textAlign="center">About Us</Typography>
                </Button>
              </Link>
              <Link to="/stylists">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  <Typography textAlign="center">Stylists</Typography>
                </Button>
              </Link>
              <Link to="/services">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  <Typography textAlign="center">Services</Typography>
                </Button>
              </Link>
            </div>
            <div className="row align-center">
              {Auth.loggedIn() ? (
                <>
                  <Link to="/profile">
                    <Button sx={{ my: 2, color: "white", display: "block" }}>
                      <Typography textAlign="center">Profile</Typography>
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button sx={{ my: 2, color: "white", display: "block" }}>
                      <Typography textAlign="center">Login / Signup</Typography>
                    </Button>
                  </Link>
                </>
              )}
              <Avatar
                alt="Profile Photo"
                src={user.profilePhoto}
                sx={{ width: 50, height: 50 }}
              />
            </div>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
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
};
export default ResponsiveAppBar;
