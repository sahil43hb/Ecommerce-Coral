export const MuiContainer = (theme) => {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-maxWidthXs": {
            maxWidth: "400px",
          },
          "&.MuiContainer-maxWidthSm": {
            maxWidth: "600px",
          },
          "&.MuiContainer-maxWidthMd": {
            maxWidth: "900px",
          },
          "&.MuiContainer-maxWidthLg": {
            maxWidth: "1320px",
          },
          "&.MuiContainer-maxWidthXl": {
            maxWidth: "1536px",
          },
        },
      },
    },
  };
};
