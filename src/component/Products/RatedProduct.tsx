import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import PinkDog from "../../image/pink.png";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Pet6 from "../../image/pet6.png";
import Pet7 from "../../image/pet7.png";
import Pet8 from "../../image/pet8.png";
export default function RatedProduct() {
  const stars = Array(5).fill(null);

  const list = [
    {
      title: "Detachable Gravity ",
      subTitle: "Bowl Food Feeder",
      image: Pet6,
      amount: "$30.12",
    },
    {
      title: "Dog Collar for Small, ",
      subTitle: "Medium, Large Dogs",
      image: Pet7,
      amount: "$16.88",
    },
    {
      title: "Pink Embossed ",
      subTitle: "Spiked Collar",
      image: Pet8,
      amount: "$34.98",
    },
  ];
  return (
    <Box>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {list.map((item, index) => (
          <Grid item md={12} key={index} sx={{ mt: 0, mb: 1 }}>
            <List
              sx={{ width: "437px", bgcolor: "background.paper" }}
            >
              <ListItem alignItems="flex-start" sx={{ fontWeight: "bold" }}>
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src={item.image}
                    sx={{ width: 95, height: 60, mr: 3, my: 2 }}
                    variant="square"
                  />
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
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{
                          display: "inline",
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                        component="small"
                        color="text.primary"
                      >
                        {item.subTitle}
                      </Typography>

                      <div style={{ display: "flex" }}>
                        {stars.map((_, index) => (
                          <Typography
                            key={index}
                            style={{ color: "yellow", marginRight: "5px" }}
                            sx={{ fontWeight: "bold" }}
                          >
                            <StarIcon
                              sx={{ fontWeight: "bold", fontSize: 15 }}
                            />
                          </Typography>
                        ))}
                      </div>
                      <Typography
                        style={{ color: "#7C58D3" }}
                        sx={{ fontWeight: "bold", fontSize: 15 }}
                      >
                       {item.amount}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              {/* <Divider variant="inset" component="li" /> */}
            </List>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
