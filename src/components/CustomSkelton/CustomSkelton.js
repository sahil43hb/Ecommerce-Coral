import { Box, Skeleton } from "@mui/material";
import React from "react";

const CustomSkelton = ({ width, height, sx }) => {
  return (
    <Box>
      <Skeleton
        variant="rounded"
        width={width}
        height={height}
        sx={{ ...sx }}
      />
    </Box>
  );
};

export default CustomSkelton;
