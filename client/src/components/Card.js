import React from "react";
import {
  ItemCard,
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
import { Link } from "react-router-dom";
import ImgonError from "./ImgonError";

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
        <Link
          to={`/launch/${flight_number}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <ImgonError Src={mission_patch} />
          <Mission>{mission_name}</Mission>
          <Dates>
            Time:{" "}
            <Moment format="HH:mm, DD-MM-YYYY">{launch_date_local}</Moment>
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
        </Link>
      </ItemCard>
    </ThemeProvider>
  );
}
