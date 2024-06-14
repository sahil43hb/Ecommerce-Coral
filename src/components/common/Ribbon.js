import { Typography } from "@mui/material";
import React from "react";
import { palette } from "../../theme/Palette";

const Ribbon = ({ color, title }) => {
  return (
    <Typography
      variant="Overline"
      sx={{
        width: "52px",
        height: "24px",
        color: palette.white.main,
        background: color,
        py: 0.7,
        px: 1.5,
        textTransform: "uppercase",
      }}
    >
      {title}
    </Typography>
  );
};

export default Ribbon;
