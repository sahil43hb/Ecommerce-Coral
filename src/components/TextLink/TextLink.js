import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { palette } from "../../theme/Palette";

const TextLink = ({ text, url, sx }) => {
  return (
    <Link to={url} style={{ textDecoration: "none" }}>
      <Typography
        variant="subtitle1"
        sx={{
          color: palette.dark.main,
          ":hover": {
            transition: "0.5s ease-in-out",
            color: palette.primary.main,
          },
          ...sx,
        }}
      >
        {text}
      </Typography>
    </Link>
  );
};

export default TextLink;
