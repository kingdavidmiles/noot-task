import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import styles from "../style/MyComponent.module.css";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { styled, alpha } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={styles.backg}>
        <Container maxWidth={"lg"}>
          <Box>
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
                  display: { xs: "none", md: "block" },
                }}
                style={{ color: "white" }}
              >
                <FacebookIcon
                  sx={{ fontSize: 15, fontWeight: "bold", mr: 3 }}
                />
                <InstagramIcon
                  sx={{ fontSize: 15, fontWeight: "bold", mr: 3 }}
                />
                <TwitterIcon sx={{ fontSize: 15, fontWeight: "bold", mr: 3 }} />
                <WhatsAppIcon
                  sx={{ fontSize: 15, fontWeight: "bold", mr: 3 }}
                />
              </Item>
              <Item
                elevation={0}
                sx={{ pt: 0, fontWeight: "bold", background: "transparent" }}
                className={styles.floatItemEnd}
              >
                {/* <Button
                  variant="contained"
                  disableElevation
                  startIcon={<DeleteIcon />}
                  sx={{ background: "transparent", color: "white", ml:5 }}
                >
                 0000 - 123456789
                </Button>
                <Button
                  variant="contained"
                  disableElevation
                  startIcon={<DeleteIcon />}
                  sx={{ background: "transparent", color: "white" , mr:5}}
                >
                 0000 - 123456789
                </Button> */}
                <Box sx={{ mr: 5 }} style={{ color: "white" }}>
                  <CallIcon
                    sx={{ fontSize: 20, fontWeight: "bold", mr: 1 }}
                    className={styles.homeIcon}
                  />
                  0000 - 123456789
                </Box>
                <Box style={{ color: "white" }}>
                  <MailOutlineIcon
                    sx={{ fontSize: 20, fontWeight: "bold", mr: 1 }}
                    className={styles.homeIcon}
                  />
                  info@example.com
                </Box>
              </Item>
            </Stack>
          </Box>
        </Container>
      </Toolbar>
    </React.Fragment>
  );
}
