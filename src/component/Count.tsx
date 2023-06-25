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
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Shoppingbag from "../image/shopping-bag.png";
import CanneFood from "../image/canned-food.png";
import PetBag from "../image/petbag.png";
import PetBags from "../image/petsbag.png";

const list = [
  { title: "120 +", subTitle: "Sutisfide Cliens", avater: PetBags },
  { title: "20 + ", subTitle: "Years Experience ", avater: PetBag },
  { title: "70 +", subTitle: "Brands Available ", avater: CanneFood },
  { title: "200 +", subTitle: "Products for pets ", avater: Shoppingbag },
];
const Count = () => {
  const theme = {
    spacing: [0, 2, 3, 5, 8],
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div className={styles.countBgBanner}>
      <Grid container spacing={1} sx={{ mt: 8 }}>
        {list.map((item, index) => (
          <Grid item md={3} key={index} sx={{ mt: 2, mb: 4 }}>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
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
                      <Typography  sx={{ fontSize:40, fontWeight:800,color:"white" }}>
                        {item.title}
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{
                          fontSize: 16,
                          color: "white",
                        }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.subTitle}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Count;
