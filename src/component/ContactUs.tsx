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
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemIcon from "@mui/material/ListItemIcon";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import one from "../image/one.png";
import two from "../image/two.png";
import three from "../image/three.png";
import PersonIcon from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";

const ContactUs = () => {
  return (
    <Box className={styles.contactUsBG} sx={{ pb: 8 }}>
      <Container maxWidth={"lg"} sx={{ mt: 8, pb: 8 }}>
        <Box className={styles.centerItems} sx={{ pt: 3, pb: 7 }}>
          <small className={styles.textColor}>OUR CONTACTS</small>

          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: 30 }}>
            Contacts
          </Typography>
          <Typography component="span">
            Massa enim nec dui nunc mattis enim ut tellus
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item sx={{}} md={3} xs={12}>
            <div className={styles.iconCardBorder}>
              <IconButton
                aria-label="delete"
                sx={{ color: "white" }}
                disableRipple
              >
                <CallIcon />
              </IconButton>
            </div>

            <div className={styles.centerItems}>
              <Card elevation={0} className={styles.cardBorder}>
                <CardContent sx={{ mt: 2, mb: 1 }}>
                  <Typography sx={{ fontWeight: 600 }}>Phone</Typography>
                  <Typography sx={{ fontSize: 15 }}>(913) 756-3126 </Typography>
                  <Typography sx={{ fontSize: 15 }}>(921) 557-1203</Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
          {/*  */}
          <Grid item sx={{}} md={3} xs={12}>
            <div className={styles.iconCardBorder}>
              <IconButton
                aria-label="delete"
                sx={{ color: "white" }}
                disableRipple
              >
                <MailOutlineIcon />
              </IconButton>
            </div>

            <div className={styles.centerItems}>
              <Card elevation={0} className={styles.cardBorder}>
                <CardContent sx={{ mt: 2, mb: 1 }}>
                  <Typography sx={{ fontWeight: 600 }}>Email</Typography>
                  <Typography>petopia@example.com</Typography>
                  <Typography>petopia@email.com </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
          {/*  */}
          <Grid item sx={{}} md={3} xs={12}>
            <div className={styles.iconCardBorder}>
              <IconButton
                aria-label="delete"
                sx={{ color: "white" }}
                disableRipple
              >
                <LocationOnIcon />
              </IconButton>
            </div>

            <div className={styles.centerItems}>
              <Card elevation={0} className={styles.cardBorder}>
                <CardContent sx={{ mt: 2, mb: 1 }}>
                  <Typography sx={{ fontWeight: 600 }}>Address</Typography>
                  <Typography sx={{ fontSize: 15 }}>
                    17 Parkman Place,{" "}
                  </Typography>
                  <Typography sx={{ fontSize: 15 }}>
                    2122United States{" "}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
          {/*  */}
          <Grid item sx={{}} md={3} xs={12}>
            <div className={styles.iconCardBorder}>
            <IconButton
                aria-label="delete"
                sx={{ color: "white" }}
                disableRipple
              >
                <ScheduleIcon />
              </IconButton>
            </div>

            <div className={styles.centerItems}>
              <Card elevation={0} className={styles.cardBorder}>
                <CardContent sx={{ mt: 2, mb: 1 }}>
                  <Typography sx={{ fontWeight: 600 }}>Open Hours</Typography>
                  <Typography sx={{ fontSize: 15 }}>
                    Mon - Fri: 7am - 6pm
                  </Typography>
                  <Typography sx={{ fontSize: 15 }}>
                    Saturday: 9am - 4pm
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
