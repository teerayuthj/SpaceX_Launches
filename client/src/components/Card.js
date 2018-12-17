import React from "react";
import {
  ItemCard,
  Img,
  LuanchSite,
  Mission,
  Dates,
  LuanchSuccess,
  Null,
  Success,
  Fail
} from "../Styles/Cards";
import { ThemeProvider } from "styled-components";
import { ThemeStyle } from "../Styles/ThemeGlobal";
import Moment from "react-moment";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import Radium from "radium";

const RadiumLink = Radium(NavLink);

export default function Card({
  launch: {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success,
    links: { mission_patch },
    launch_site: { site_name_long }
  }
}) {
  return (
    <ThemeProvider theme={ThemeStyle}>
      <ItemCard>
        <RadiumLink to={`/launch/${flight_number}`}>
          <Img src={mission_patch} alt="" />
          <Mission>{mission_name}</Mission>
          <Dates>
            <Moment format="HH:mm:ss DD-MM-YYYY ">{launch_date_local}</Moment>
          </Dates>
          <LuanchSite>Launch site : {site_name_long}</LuanchSite>
          <LuanchSuccess>
            {launch_success === null ? (
              <Null>Null</Null>
            ) : launch_success ? (
              <Success>Success</Success>
            ) : (
              <Fail>Fail</Fail>
            )}
          </LuanchSuccess>
        </RadiumLink>
      </ItemCard>
    </ThemeProvider>
  );
}
