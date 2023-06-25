import * as React from "react";

import Grid from "@mui/material/Grid";

import Paper from "@mui/material/Paper";
import styles from "../../style/MyComponent.module.css";
import { styled, alpha } from "@mui/material/styles";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PersonIcon from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import List from "../../core/LatestBlog";

const LatestBlog = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className={styles.OurServiceBgBanner}>
      <Box className={styles.centerItems} sx={{ pt: 3 }}>
        <small className={styles.textColor}>our Blog</small>

        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: 30 }}>
          Latest Post
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ mt: 0 }}>
        {List.map((item, index) => (
          <Grid item md={4} xs={12} key={index} sx={{ mt: 0, mb: 1 }}>
            <Card elevation={0}>
              <CardContent>
                <div className={styles.badge}>
                  {/* chip */}
                  <Chip
                    label={item.badge}
                    size="small"
                    style={{ background: "rgba(255, 218, 71, 1)" }}
                  />
                </div>
                {/* image */}
                <img
                  src={item.image}
                  alt="img"
                  style={{ width: "100%", borderRadius: "5px" }}
                />
                {/*  */}
                <Box sx={{ width: 900 }}>
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row">
                    <Item elevation={0} sx={{ pt: 0, fontWeight: "bold" }}>
                      <PersonIcon
                        sx={{ fontSize: 15, fontWeight: "bold" }}
                        style={{ color: "purple" }}
                      />
                      by Corabelle Durrad
                    </Item>
                    <Item elevation={0} sx={{ pt: 0, fontWeight: "bold" }}>
                      <CalendarMonthIcon
                        sx={{ fontSize: 15 }}
                        style={{ color: "purple" }}
                      />{" "}
                      02.01.2022
                    </Item>
                  </Stack>
                </Box>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: "bolds" }}
                >
                  {item.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LatestBlog;
