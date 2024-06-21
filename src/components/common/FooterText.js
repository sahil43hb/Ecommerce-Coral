import { Box, Typography } from "@mui/material";
import React from "react";
import { palette } from "../../theme/Palette";

const FooterText = ({ array }) => {
  const HoverSx = {
    display: "block",
    "&:hover": {
      color: palette.primary.main,
      background: "none",
    },
  };
  return (
    <Box sx={{ pt: 1.8 }}>
      {array.map((data) => (
        <Typography variant="a2-regular" key={data.id} sx={{ ...HoverSx }}>
          {data.name}
        </Typography>
      ))}
    </Box>
  );
};

export default FooterText;
