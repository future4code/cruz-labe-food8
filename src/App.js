import React from "react";
import Router from "./Router/Router";
import GlobalStateProvider from "./GlobalState/GlobalStateProvider";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './Constants/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStateProvider>
        <Router />
      </GlobalStateProvider>
    </ThemeProvider>
  );
}

export default App;
