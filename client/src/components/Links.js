import React from "react";
import {
  ItemCard,
  Img,
  LuanchSite,
  Mission,
  Dates,
  LuanchSuccess
} from "../Styles/Card";
import { ThemeProvider } from "styled-components";
import { ThemeStyle } from "../Styles/ThemeGlobal";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function Links({
  launch: {
    flight_number,
    mission_name,
    launch_date_lacal,
    launch_succes,
    mission_patch,
    site_name_long
  }
}) {
  return (
    <ThemeProvider theme={ThemeStyle}>
      <ItemCard>
        <Link to={`/launch/${flight_number}`} />
        <Img>{mission_patch}</Img>
        <Mission>{mission_name}</Mission>
        <Dates>
          <Moment format="DD-MM-YYYY HH:mm:ss">{launch_date_lacal}</Moment>
        </Dates>
        <LuanchSite>{site_name_long}</LuanchSite>
        <LuanchSuccess>{launch_succes}</LuanchSuccess>
      </ItemCard>
    </ThemeProvider>
  );
}
