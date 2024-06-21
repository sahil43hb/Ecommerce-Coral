import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../../assets/images/logo.svg";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Grid, Stack } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { headerData } from "../../utilities/data/navbar-data";
import CardMedia from "../common/CardMedia";
import { buttonSx, flexDisplay } from "../../utilities/Contants";
import TextLink from "../common/TextLink";
import Divider from "./../common/Divider";

export default function TopAppBar() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ background: "none", boxShadow: "none" }}
        >
          <Grid
            sx={{
              ...flexDisplay,
              alignItems: "center",
              pt: 1,
            }}
          >
            <Box>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <SearchIcon />
              </IconButton>
            </Box>
            <Box>
              <CardMedia sx={{ height: "34px", width: "180px" }} image={logo} />
            </Box>
            <Stack direction="row" spacing={2}>
              <Button
                variant="text"
                sx={{ ...buttonSx }}
                startIcon={<PersonIcon />}
              >
                Account
              </Button>
              <Button
                variant="text"
                sx={{ ...buttonSx }}
                startIcon={<LockIcon />}
              >
                Shoping
              </Button>
            </Stack>
          </Grid>
          <Divider type="dark" sx={{ pt: 0.6 }} />
          <Box sx={{ ...flexDisplay, pt: 2 }}>
            {headerData.map((data, index) => (
              <TextLink key={index} text={data.name} url={data.url} />
            ))}
          </Box>
        </AppBar>
      </Box>
    </Container>
  );
}
