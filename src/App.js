import React from "react";
import Router from "./Router/Router";
import GlobalStateProvider from "./GlobalState/GlobalStateProvider";

function App() {
  return (
    <GlobalStateProvider>
      <Router />
    </GlobalStateProvider>
  );
}

export default App;
