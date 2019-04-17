import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./utils/theme";
import Home from "./components/pages/home";
import axios from "axios";

const theme = createMuiTheme(themeFile);

axios.defaults.baseURL =
  "https://us-central1-twitterape-da2b6.cloudfunctions.net/api";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Home />
      </MuiThemeProvider>
    );
  }
}

export default App;
