import React from "react";
import Router from "./Router/Router";
import GlobalStateProvider from "./GlobalState/GlobalStateProvider";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './Constants/theme'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStateProvider>
          <Router />
        </GlobalStateProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
