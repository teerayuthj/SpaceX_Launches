import React from "react";
import {
  ItemCard,
  Img,
  LuanchSite,
  Mission,
  Dates,
  LuanchSuccess,
  Success,
  Fail
} from "../Styles/Card";
import { ThemeProvider } from "styled-components";
import { ThemeStyle } from "../Styles/ThemeGlobal";
import Moment from "react-moment";
import { Link } from "react-router-dom";

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
      <ItemCard component={Link} to={`/launch/${flight_number}`}>
        <Img src={mission_patch} alt="" />
        <Mission>{mission_name}</Mission>
        <Dates>
          <Moment format="HH:mm:ss DD-MM-YYYY ">{launch_date_local}</Moment>
        </Dates>
        <LuanchSite>{site_name_long}</LuanchSite>
        <LuanchSuccess>{launch_success ? <Success /> : <Fail />}</LuanchSuccess>
      </ItemCard>
    </ThemeProvider>
  );
}
