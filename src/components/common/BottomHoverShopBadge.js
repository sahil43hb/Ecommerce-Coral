import { Box, Button, Grid, IconButton, Stack } from "@mui/material";
import React from "react";
import { palette } from "../../theme/Palette";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LockIcon from "@mui/icons-material/Lock";

const BottomHoverShopBadge = () => {
  return (
    <>
      <Box
        className="hoverBadge"
        sx={{
          opacity: 0,
          visibility: "hidden",
          transition: "opacity 0.5s ease-in-out",
          position: "absolute",
          bottom: "0px",
          width: "100%",
        }}
      >
        <Grid
          sx={{
            background: palette.black.main,
            color: palette.white.main,
            height: "52px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
          }}
        >
          <Stack direction="row">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{}}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{}}
            >
              <FavoriteBorderIcon />
            </IconButton>
          </Stack>
          <Button
            variant="text"
            startIcon={<LockIcon />}
            sx={{
              color: "#FFFFFF !important",
              "&:hover": {
                color: "#FF6F61 !important",
                background: "none",
              },
            }}
          >
            Shop Now
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default BottomHoverShopBadge;
