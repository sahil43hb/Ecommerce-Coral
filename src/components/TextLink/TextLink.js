import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { palette } from "../../theme/Palette";

//Scroll To The Specific Id
const ScrollToHashElement = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return null;
};

const TextLink = ({ text, url, sx }) => {
  return (
    <>
      <ScrollToHashElement />
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
    </>
  );
};

export default TextLink;
