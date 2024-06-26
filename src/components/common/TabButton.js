import { Button } from "@mui/material";
import React from "react";
import { palette } from "../../theme/Palette";

const TabButton = ({ title, selected, onClick, sx }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: selected ? palette.dark.main : palette.dark[300],
        borderRadius: "unset",
        background: "none",
        fontWeight: 600,
        fontSize: "16px !important",
        "&:hover": {
          color: selected ? "#000000 !important" : "#FF6F61 !important",
        },
        ...sx,
      }}
    >
      {title}
    </Button>
  );
};

export default TabButton;
