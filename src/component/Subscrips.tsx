import { border, Box, Container, style } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import styles from "../style/MyComponent.module.css";
import Group9 from "../image/Group 9.png";
import vector from "../image/Vector.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const Subscribe = () => {
  return (
    <>
      <div className={styles.subscribBg}>
        {/* mobile view only */}
        <Container
          maxWidth={"sm"}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <Box sx={{ pt: 6 }}>
            <small style={{ color: "white" }}>
              Get 20% Off Your First Purchase When You Use Petco Credit Card
            </small>
          </Box>
          <div>
            <Grid container spacing={2} sx={{ mt: 2, pb: 8 }}>
              <Grid item md={6}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                />
              </Grid>
              <Grid item md={6}>
                <Button
                  variant="contained"
                  sx={{ mt: 0, background: "#FFDA47", color: "black" }}
                  size="large"
                  style={{ height: "50px" }}
                >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
        {/* mobile display ends here */}
        <Grid container spacing={2}>
          <Grid
            item
            md={3}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <img
              src={Group9}
              alt="dog"
              style={{ width: "100%" }}
              className={styles.dog}
            />
          </Grid>

          <Grid
            item
            md={6}
            xs={12}
            sx={{
              p: 5,
              display: { xs: "none", md: "block" },
            }}
          >
            <Typography className={styles.subTextTitle}>
              Get 20% Off Your First Purchase When You Use Petco Credit Card
            </Typography>
            <Typography className={styles.subTextsubTitle}>
              Sapien nec sagittis aliquam malesuada bibendum arcu vitae
              elementum. Ligula ullamcorper malesuada proin libero nunc
              consequat interdum varius sit.
            </Typography>

            {/* sub here */}
            <div className={styles.centerItem}>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item md={6}>
                  <TextField
                    style={{
                      width: "100%",
                    }}
                    label="your email"
                    className={styles.textfied}
                  />
                </Grid>
                <Grid item md={6}>
                  <Button
                    variant="contained"
                    sx={{ mt: 0, background: "#FFDA47", color: "black" }}
                    size="large"
                    style={{ height: "50px" }}
                  >
                    Subscribe
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/*  */}
          </Grid>
          <Grid
            item
            md={3}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <img
              src={vector}
              alt="dog"
              style={{ width: "70%" }}
              className={styles.pet}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Subscribe;
