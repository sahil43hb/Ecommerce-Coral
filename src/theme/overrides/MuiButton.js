import { palette } from "../Palette";

export const MuiButton = (theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-sizeSmall": {
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "21.79px",
            padding: "5px, 15px, 5px, 15px",
          },
          "&.MuiButton-sizeMedium": {
            fontSize: "18px",
            lineHeight: "21.09px",
          },
          "&.MuiButton-sizeLarge": {
            height: "72px ",
            fontWeight: 400,
            fontSize: "29px",
            lineHeight: "33.98px",
            padding: "19px, 26px, 19px, 26px !important",
          },
          textTransform: "none",
          zIndex: 4,
          border: "none",
          fontFamily: "Roboto",
        },
        contained: {
          background: palette.black.main,
          color: palette.white.main,
          boxShadow: "none",
          borderRadius: "unset",
          "&:hover": {
            boxShadow: "none",
            background: palette.primary.main,
          },
          "&.Mui-disabled": {
            background: "#4c7ac9",
          },
        },
        outlined: {
          color: palette.primary.main,
          borderRadius: "5px",
          border: "1px solid",
          borderColor: palette.primary.main,
          "&:hover": {
            color: palette.white.main,
            border: "1px solid",
            borderColor: palette.primary.main,
            background: palette.primary.main,
            borderRadius: "5px",
          },
        },
        text: {
          color: palette.black.main,
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "21.09px",
          borderRadius: "unset",
          "&:hover": {
            color: palette.primary.main,
            background: "none",
          },
        },
      },
    },
  };
};
