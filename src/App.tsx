import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import { Color } from "constants/Color";
import { HomePage } from "pages/HomePage";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Color.WHITE,
      contrastText: Color.DARK_PRIMARY,
    },
    secondary: {
      main: Color.GREEN_TERTIARY,
      contrastText: Color.DARK_PRIMARY,
    },
    success: {
      main: Color.GREEN_PRIMARY,
      contrastText: Color.WHITE,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
