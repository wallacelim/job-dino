import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import { Color } from "constants/Color";
import { HomePage } from "pages/HomePage";
import {ProfilePage} from "pages/ProfilePage";

import "./App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif", "Roboto"].join(","),
  },
  palette: {
    primary: {
      main: Color.WHITE,
      contrastText: Color.DARK_PRIMARY,
    },
    secondary: {
      main: Color.GREEN_SECONDARY,
      contrastText: Color.WHITE,
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
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
