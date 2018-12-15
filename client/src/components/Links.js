import React, { Component } from "react";
import { ItemCard, Img, LuanchSite, Mission, Dates } from "../Styles/Card";
import { ThemeProvider } from "styled-components";
import { ThemeStyle } from "../Styles/ThemeGlobal";
import falcon from "../falcon.png";

export class Links extends Component {
  render() {
    return (
      <ThemeProvider theme={ThemeStyle}>
        <ItemCard>
          <Img src={falcon} />

          <Mission>Falcon</Mission>
          <Dates>25-03-2006 05:30</Dates>
          <LuanchSite>
            Cape Canaveral Air Force Station Space Launch Complex 40
          </LuanchSite>
        </ItemCard>
      </ThemeProvider>
    );
  }
}

export default Links;
