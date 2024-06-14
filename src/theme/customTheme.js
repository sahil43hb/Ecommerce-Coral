import { createTheme } from "@mui/material";
import { typography } from "./typography";
import { palette } from "./Palette";
import { customTypography } from "./customTypography";
import { overrides } from "./overrides";

const themeOption = {
  typography: {
    ...typography,
    ...customTypography,
  },
  palette,
};
export const theme = createTheme(themeOption);
theme.components = overrides(theme);
