import { Box, Skeleton } from "@mui/material";
import React from "react";

const CustomSkelton = ({ width, height, sx }) => {
  return (
    <Skeleton variant="rounded" width={width} height={height} sx={{ ...sx }} />
  );
};

export default CustomSkelton;
