import React from "react";
import { CardMedia as Image } from "@mui/material";

const CardMedia = ({ image, sx }) => {
  return <Image component="img" image={image} alt="not" sx={{ ...sx }} />;
};

export default CardMedia;
