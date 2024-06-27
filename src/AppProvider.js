import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/customTheme";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppProvider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position="top-right"
          autoClose="2000"
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Provider store={store}>{children}</Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
