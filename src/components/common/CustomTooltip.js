import { Tooltip } from "@mui/material";
import React from "react";

const CustomTooltip = ({ title, children }) => {
  return (
    <Tooltip title={title} placement="top">
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
