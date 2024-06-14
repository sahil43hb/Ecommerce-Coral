import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { palette } from "../../theme/Palette";

const BottomHoverProductsBadge = ({ category, products }) => {
  return (
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
        <Typography variant="h6">{category}</Typography>
        <Typography variant="h6">{products} Products</Typography>
      </Grid>
    </Box>
  );
};

export default BottomHoverProductsBadge;
