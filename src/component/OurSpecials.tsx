import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
import { useTheme } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import FolderIcon from "@mui/icons-material/Folder";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Dog from "../image/pet-accessories-still-life-concept-with-chew-ball.png";
import Dog2 from "../image/charls.png";
import Dog3 from "../image/pet.png";
const list = [
  { title: "120 +", subTitle: "Sutisfide Cliens", icon: "" },
  { title: "20 + ", subTitle: "Years Experience ", icon: "" },
  { title: "70 +", subTitle: "Brands Available ", icon: "" },
  { title: "200 +", subTitle: "Products for pets ", icon: "" },
];
const OurSpecials = () => {
  //   const theme = {
  //     spacing: [0, 2, 3, 5, 8],
  //   };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const theme = useTheme();
  return (
    <div className={styles.OurSpecialsBgBanner}>
      <Grid container spacing={2} sx={{ mt: 8 }}>
        <Grid item md={8} xs={12}>
          <Card style={{ background: "rgba(252, 220, 181, 1)" }} elevation={0}>
            <CardActionArea>
              <List>
                <ListItem>
                  <Button
                    variant="contained"
                    size="large"
                    className={styles.buttonfloatRight}
                  >
                    Up to 40% Off
                  </Button>
                </ListItem>
              </List>
              <CardContent sx={{ mx: 4 }}>
                <Grid container spacing={1} sx={{ mt: 0 }}>
                  <Grid item md={6} xs={12}>
                    <Typography variant="h4">Сheck Out</Typography>
                    <Typography variant="h4">Our Specials</Typography>
                    <Typography component="div" sx={{ mr: 8, pt: 1 }}>
                      Massa placerat duis ultricies lacus. Aliquet bibendum enim
                      facilisis gravida neque convallis
                    </Typography>
                    <Button
                      endIcon={<ArrowForwardIcon />}
                      sx={{ mr: 8, textTransform: "capitalize" }}
                      className={styles.buttonGap}
                    >
                      shop
                    </Button>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <img src={Dog} alt="god" className={styles.imageWidth} />
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/*  */}

        {/*  */}
        <Grid item md={4} xs={12}>
          <Grid
            container
            sx={{
              // Default styles applied to all screen sizes
              display: "pt:0",

              // Styles applied only on extra-small screens (xs)
              "@media (max-width: 600px)": {
                display: "pt:6",
              },
            }}
          >
            <Grid item md={8} xs={8}>
              <Card style={{ background: "#ffe84e" }} elevation={0}>
                <CardContent>
                  <Typography
                    component="div"
                    sx={{ fontSize: 20, fontWeight: 600 }}
                  >
                    Luxury Fashion Collection
                  </Typography>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mr: 8, textTransform: "capitalize", mt: 1 }}
                    className={styles.buttonGap}
                  >
                    shop
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4} xs={4}>
              <CardMedia
                component="img"
                src={Dog3}
                alt="Live from space album cover"
                className={styles.cardT}
              />
            </Grid>
          </Grid>
          {/*  */}
          <Grid container sx={{ mt: 3 }}>
            <Grid item md={8} xs={8}>
              <Card style={{ background: "#ffe84e" }} elevation={0}>
                <CardContent>
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{ mb: 2, fontWeight: 600 }}
                  >
                    Shop What’s Trending
                  </Typography>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mr: 8, textTransform: "capitalize" }}
                    className={styles.buttonGap}
                  >
                    shop
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4} xs={4}>
              <CardMedia
                component="img"
                src={Dog2}
                alt="Live from space album cover"
                className={styles.cardT}
              />
            </Grid>
          </Grid>
        </Grid>
        {/*  */}

        {/*  */}
      </Grid>
    </div>
  );
};

export default OurSpecials;
