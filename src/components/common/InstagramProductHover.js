import { Box, Grid } from "@mui/material";
import React from "react";
import { palette } from "../../theme/Palette";
import InstagramIcon from "@mui/icons-material/Instagram";

const InstagramProductHover = () => {
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
          height: "100%",
          width: "100%",
        }}
      >
        <Grid
          sx={{
            background: palette.dark[300],
            color: palette.white.main,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InstagramIcon
            sx={{ color: palette.white.main, height: "48px", width: "48px" }}
          />
        </Grid>
      </Box>
    </>
  );
};

export default InstagramProductHover;
