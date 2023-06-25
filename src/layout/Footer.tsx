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
import Link from "@mui/material/Link";
import Logo from "../image/Isolation_Mode.png";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Stack from "@mui/material/Stack";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TextField from "@mui/material/TextField";
const workingHours = [
  { day: "Mon - Fri:", time: "7am – 6pm" },
  { day: "Saturday:", time: "9am – 4pm" },
  { day: "Sunday:", time: "Closed" },
];

const UsefulLinks = [
  { item: "Home", list: "FAQ" },
  { item: "About", list: "Gallery" },
  { item: "Services", list: "Delivery" },
  { item: "Shop", list: "Sales" },
];

const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const footers = [
    {
      title: "Company",
      description: ["Team", "History", "Contact us", "Locations"],
    },
    {
      title: "Features",
      description: [
        "Cool stuff",
        "Random feature",
        "Team feature",
        "Developer stuff",
        "Another one",
      ],
    },
    {
      title: "Resources",
      description: [
        "Resource",
        "Resource name",
        "Another resource",
        "Final resource",
      ],
    },
    {
      title: "Legal",
      description: ["Privacy policy", "Terms of use"],
    },
  ];

  return (
    <>
      <Box style={{ background: "#F8F8F8" }} sx={{ pt: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md={3} xs={12}>
              <Box>
                <img src={Logo} alt="image" />
              </Box>
              <Typography sx={{ fontSize: 12 }}>
                Tristique nulla aliquet enim tortor at auctor urna nunc. Massa
                enim nec dui nunc mattis enim ut tellus. Sed ut perspiciatis
                unde ...
              </Typography>
              <Box sx={{ mr: 5, fontWeight: "bold" }}>
                <CallIcon
                  sx={{
                    fontSize: 30,
                    fontWeight: "bold",
                    mr: 1,
                    color: "#7c58d3",
                  }}
                  className={styles.homeIcon}
                />
                (913) 756-3126
              </Box>
            </Grid>
            {/*  */}
            <Grid item md={3} xs={12}>
              <Box>
                <Typography
                  sx={{ fontWeight: 900, color: "#7c58d3" }}
                  className={styles.centerItems}
                >
                  Working Hours
                </Typography>
              </Box>
              <Box className={styles.centerItem}>
                <Stack
                  spacing={{ xs: 1, sm: 1 }}
                  direction="row"
                  justifyContent="space-between"
                >
                  <Item
                    elevation={0}
                    sx={{
                      pt: 0,
                      fontWeight: "bold",
                      background: "transparent",
                    }}
                    className={styles.floatItemEnd}
                  >
                    <Box style={{ color: "blac" }}>
                      <ul>
                        <li style={{ textAlign: "left", padding: 5 }}>
                          Mon - Fri:
                        </li>
                        <li style={{ textAlign: "left", padding: 5 }}>
                          Saturday:
                        </li>
                        <li style={{ textAlign: "left", padding: 5 }}>
                          Sunday:
                        </li>
                      </ul>
                    </Box>

                    <Box style={{ color: "whi" }}>
                      <ul>
                        <li style={{ textAlign: "left", padding: 5 }}>
                          7am – 6pm
                        </li>
                        <li style={{ textAlign: "left", padding: 5 }}>
                          9am – 4pm
                        </li>
                        <li style={{ textAlign: "left", padding: 5 }}>
                          Closed
                        </li>
                      </ul>
                    </Box>
                  </Item>
                </Stack>
              </Box>
            </Grid>
            {/*  */}
            <Grid item md={3} xs={12}>
              <Box>
                <Typography
                  sx={{ fontWeight: 900, color: "#7c58d3" }}
                  className={styles.centerItems}
                >
                  Useful Links
                </Typography>
              </Box>
              <Box className={styles.centerItem}>
                <Stack
                  spacing={{ xs: 1, sm: 1 }}
                  direction="row"
                  justifyContent="space-between"
                >
                  <Item
                    elevation={0}
                    sx={{
                      pt: 0,
                      fontWeight: "bold",
                      background: "transparent",
                    }}
                    className={styles.floatItemEnd}
                  >
                    <Box style={{ color: "whit" }}>
                      <ul style={{}}>
                        <li style={{ textAlign: "left", padding: 5 }}>Home</li>
                        <li style={{ textAlign: "left", padding: 5 }}>About</li>
                        <li style={{ textAlign: "left", padding: 5 }}>
                          Services
                        </li>
                        <li style={{ textAlign: "left", padding: 5 }}>Shop</li>
                      </ul>
                    </Box>

                    <Box style={{ color: "whit" }}>
                      <ul>
                        <li style={{ textAlign: "left", padding: 5 }}>FAQ</li>
                        <li style={{ textAlign: "left", padding: 5 }}>
                          Gallery
                        </li>
                        <li style={{ textAlign: "left", padding: 5 }}>
                          Delivery
                        </li>
                        <li style={{ textAlign: "left", padding: 5 }}>Sales</li>
                      </ul>
                    </Box>
                  </Item>
                </Stack>
              </Box>
            </Grid>
            {/* Newsletter */}

            <Grid item md={3} xs={12}>
              <Box>
                <Typography sx={{ fontWeight: 900, color: "#7c58d3" }}>
                  Newsletter
                </Typography>
              </Box>
              <Typography sx={{ pt: 2 }}>
                Be first in the queue! Get our latest news straight to your
                inbox.
              </Typography>
              {/*  */}
              {/* <div>
                <Grid container spacing={1} sx={{ mt: 2 }}>
                  <Grid item md={6}>
                    <TextField fullWidth label="fullWidth" id="fullWidth" />
                  </Grid>
                  <Grid item md={6}>
                    <IconButton aria-label="delete" disabled color="primary">
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </div> */}
              <Box sx={{ pt: 2 }}>
                <Stack
                  spacing={{ xs: 1, sm: 8 }}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="baseline"
                >
                  <Item
                    elevation={0}
                    sx={{
                      pt: 0,
                      fontWeight: "bold",
                      background: "transparent",
                    }}
                    style={{ color: "#7c58d3" }}
                  >
                    <FacebookIcon
                      sx={{ fontSize: 25, fontWeight: "bold", mr: 3 }}
                    />
                    <InstagramIcon
                      sx={{ fontSize: 25, fontWeight: "bold", mr: 3 }}
                    />
                    <TwitterIcon
                      sx={{ fontSize: 25, fontWeight: "bold", mr: 3 }}
                    />
                    <WhatsAppIcon
                      sx={{ fontSize: 25, fontWeight: "bold", mr: 3 }}
                    />
                  </Item>
                </Stack>
              </Box>
              {/*  */}
            </Grid>
          </Grid>
          <Box sx={{ pt: 3, pb: 2 }}>
            <Typography sx={{ fontSize: 15 }} className={styles.centerItems}>
              NOOT © All rights reserved Copyrights 2023
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
