import React from "react";
import { Divider as MuiDivider } from "@mui/material";
import { palette } from "../../theme/Palette";

const Divider = ({ variant, type, sx }) => {
  return (
    <div>
      <MuiDivider
        variant={variant}
        sx={{
          borderColor: type === "dark" ? palette.stock.main : "",
          ...sx,
        }}
      />
    </div>
  );
};

export default Divider;
