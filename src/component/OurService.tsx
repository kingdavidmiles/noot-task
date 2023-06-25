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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CardActionArea } from "@mui/material";
import Service1 from "../image/Service.png";
import Service2 from "../image/Service-2.png";
import Service3 from "../image/Service-4.png";
import Service4 from "../image/Service-6.png";
import Service5 from "../image/Service-1.png";
import Service6 from "../image/Service-5.png";
const list = [
  {
    title: "Walking & Sitting",
    content:
      "Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi ",
    avater: Service1,
    hour: "from $15 / hour",
    to: "",
  },
  {
    title: "Pet Grooming",
    content:
      "Et odio pellentesque diam volutpat commodo sed egestas egestas  pellentesque nec nam  ",
    avater: Service2,
    hour: "From $39 / complex",
    to: "",
  },
  {
    title: "Pet Training",
    content:
      "Aliquam ut porttitor leo a diam sollicitudin tempor  sit amet est placerat ",
    avater: Service3,
    hour: "From $27 / hour",
    to: "",
  },
  {
    title: "Pet Taxi",
    content:
      "Maecenas ultricies mi eget mauris pharetra et ultrices consectetur adipiscing elit",
    avater: Service4,
    hour: "From $22  / trip",
    to: "",
  },
  {
    title: "Pet Taxi",
    content:
      "Turpis massa sed elementum tempus egestas sed sed risus aliquam  urna cursus eget n",
    avater: Service5,
    hour: "From $22  / trip",
    to: "",
  },
  {
    title: "Health & Wellness",
    content:
      "Amet porttitor eget dolor morbi non arcu risus quis varius blandit aliquam etiam",
    avater: Service6,
    hour: "From $39/ visit",
    to: "",
  },
];
const OurService = () => {
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
  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <div className={styles.OurServiceBgBanner}>
      <div className={styles.centerItems}>
        <Typography className={styles.textColor}>our service</Typography>

        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          All Pet Care Services
        </Typography>
      </div>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        {list.map((item, index) => (
          <Grid item md={4} key={index} sx={{ mt: 0, mb: 1 }}>
            <Card className={styles.cardBg} elevation={0}>
              <CardActionArea>
                <List>
                  <ListItem>
                    <ListItemAvatar sx={{ mr: 1 }}>
                      <Avatar
                        variant="square"
                        sx={{
                          width: 50,
                          height: 50,
                          bgcolor: "transparent",
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
                              fontSize: 20,
                              fontWeight: 500,
                            }}
                          >
                            {item.title}
                          </Typography>
                        </React.Fragment>
                      }
                      secondary={secondary ? "Secondary text" : null}
                    />
                  </ListItem>
                </List>
                <CardContent>
                  <Typography variant="body2">{item.content}</Typography>

                  <Typography
                    gutterBottom
                    component="div"
                    sx={{
                      mt: 3,
                      fontSize: 14,
                      fontWeight: 700,
                      textTransform: "capitalize",
                    }}
                  >
                    {item.hour}
                  </Typography>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mr: 8, textTransform: "capitalize" }}
                    className={styles.buttonGap}
                  >
                    Get Service
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OurService;
