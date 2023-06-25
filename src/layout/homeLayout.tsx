import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Paper from "@mui/material/Paper";
import styles from "../style/MyComponent.module.css";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../image/Group.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingFast from "../image/shipping-fast.png";
import ShoppingFast1 from "../image/shipping-fast1.png";
import ShoppingFast2 from "../image/shipping-fast2.png";
import ShoppingFast3 from "../image/shipping-fast3.png";
import Link from '@mui/material/Link';
const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const theme = createTheme();

const pages = ["Home", "Service", "Shop", "Blog", "Pages"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const list = [
  {
    title: "Trust & Safety",
    subTitle: "Velit euismod pellentes",
    avater: ShoppingFast,
  },
  {
    title: "Discounts ",
    subTitle: "Bibendum ut tristique ",
    avater: ShoppingFast1,
  },
  {
    title: "Support",
    subTitle: "Egestas quis ipsum velit ",
    avater: ShoppingFast2,
  },
  {
    title: "Guarantee",
    subTitle: "Convallis tellus id interdum ",
    avater: ShoppingFast2,
  },
];
export default function HomeLayout() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: "",
    color: theme.palette.text.secondary,
  }));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Blog" sections={sections} />
      {/* <Box sx={{ flexGrow: 1 }}>
      
   
      </Box> */}
      <div className={styles.bannerImage}>
        <Container maxWidth="lg">
          <AppBar
            position="static"
            elevation={0}
            className={styles.appBarColor}
          >
            <Toolbar disableGutters>
              {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
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
                  textDecoration: "none",
                }}
              >
                <img src={logo} alt="logo" />
              </Typography>

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
                  textDecoration: "none",
                }}
              >
                patopia
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 5,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              ></Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 5,
                  display: { xs: "none", md: "flex" },
                }}
              ></Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 5,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              ></Typography>
              <Typography
                variant="h6"
                sx={{
                  mr: 5,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              ></Typography>

              <Box
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                className={styles.color}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="primary"
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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" sx={{ mr: 2 }}>
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img src={logo} alt="logo" />
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {/* {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))} */}
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    mr: 4,
                    textTransform: "capitalize",
                  }}
                >
                  home
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    mr: 4,
                    textTransform: "capitalize",
                  }}
                >
                  Service
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    mr: 4,
                    textTransform: "capitalize",
                  }}
                >
                  Shop
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#DCFF02",
                    display: "block",
                    mr: 4,
                    textTransform: "capitalize",
                  }}
                >
                  Blog
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#DCFF02",
                    display: "block",
                    textTransform: "capitalize",
                  }}
                >
                  Pages
                </Button>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Button
                  variant="contained"
                  disableElevation
                  startIcon={<ShoppingCartIcon />}
                  sx={{
                    background: "white",
                    color: "#a078f1f6",
                    textTransform: "capitalize",
                  }}
                >
                  (1 item)
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

          {/* main content start here */}
          <Box className={styles.appBarTop}>
            <Typography
              variant="h6"
              className={styles.textColor}
              sx={{ fontSize: 12, ml: 2 }}
            >
              WE CARE FOR YOUR PETS
            </Typography>

            <Box>
              <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                  <Item elevation={0} sx={{background:"transparent"}}>
                    <Typography  variant="h6" className={styles.toolbarFont}>
                      We Help You Care for Animals with Nutrition
                    </Typography>
                  </Item>

                  <Typography>
                    All offers are subject to availability. Ut tortor pretium
                    viverra suspendisse potenti nullam ac tortor vitae.
                    Consectetur a erat nam at. Potenti nullam ac tortor vitae
                    purus faucibus ornare.
                  </Typography>
                  {/*  */}
                  <Grid container spacing={1} sx={{pb:8}}>
                    {list.map((item, index) => (
                      <Grid item md={6} key={index}>
                        <List
                          sx={{
                           
                            
                          }}
                        >
                          <ListItem>
                            <ListItemAvatar sx={{ mr: 2 }}>
                              <Avatar
                                variant="square"
                                sx={{
                                  width: 50,
                                  height: 50,
                                  bgcolor: "#a078f13c",
                                  borderRadius: "5px",
                                }}
                              >
                                <img src={item.avater} alt="image" />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <React.Fragment>
                                  <Typography
                                    sx={{
                                      display: "inline",
                                      fontWeight: "bold",
                                      fontSize: 16,
                                    }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                  >
                                    {item.title}
                                  </Typography>
                                </React.Fragment>
                              }
                              secondary={item.subTitle}
                            />
                          </ListItem>
                        </List>
                      </Grid>
                    ))}
                  </Grid>
                  {/* list */}
                </Grid>
              </Grid>
            </Box>
          </Box>
          
        </Container>
        
   
      </div>
      <main>
        
      </main>
    </ThemeProvider>
  );
}
