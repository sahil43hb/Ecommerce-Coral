import { palette } from "../Palette";

export const MuiTextField = (theme) => {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.MuiTextField-sizeSmall": {
            // Custom styles for small size
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            padding: "4px 12px",
          },
          "&.MuiTextField-sizeMedium": {
            // Custom styles for medium size
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            padding: "6px 14px",
          },
          "&.MuiTextField-sizeLarge": {
            // Custom styles for large size
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "28px",
            padding: "8px 16px",
          },
          fontFamily: "Roboto",
          zIndex: 4,
          border: "none",
          textTransform: "none",
        },
        outlined: {
          // Styles for outlined variant
          borderRadius: "5px",
          borderColor: palette.black.main,
          "&:hover": {
            borderColor: palette.primary.main,
          },
          "&.Mui-disabled": {
            borderColor: "#4c7ac9",
          },
        },
        filled: {
          // Styles for filled variant
          backgroundColor: "#627177",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#525f65",
          },
          "&.Mui-disabled": {
            backgroundColor: "#4c7ac9",
          },
        },
        standard: {
          // Styles for standard variant
          borderBottomColor: palette.black.main,
          "&:hover": {
            borderBottomColor: palette.primary.main,
          },
          "&.Mui-disabled": {
            borderBottomColor: "#4c7ac9",
          },
        },
        input: {
          // Common styles for input element
          color: palette.black.main,
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "18.75px",
          padding: "6px",
          "&::placeholder": {
            color: palette.stock.main,
            opacity: 1,
          },
          "&.Mui-disabled": {
            color: "#4c7ac9",
          },
        },
      },
    },
  };
};
