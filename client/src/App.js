import React, { Component } from "react";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import SpaceXlogo from "./SpaceXlogo.png";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, AppWarp, ThemeStyle } from "./Styles/ThemeGlobal";
import Links from "./components/Links";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <React.Fragment>
            <ThemeProvider theme={{ fontFamily: "Roboto" }}>
              <ThemeProvider theme={ThemeStyle}>
                <AppWarp>
                  <GlobalStyle />
                  <div>
                    <Links />
                    <a href="/">
                      <img
                        src={SpaceXlogo}
                        alt="SpaceX"
                        style={{
                          width: 300,
                          display: "block",
                          margin: "auto",
                          marginBottom: "10px"
                        }}
                      />
                    </a>
                    <Route exact path="/" component={Launches} />
                    <Route
                      exact
                      path="/launch/:flight_number"
                      component={Launch}
                    />
                  </div>
                </AppWarp>
              </ThemeProvider>
            </ThemeProvider>
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
