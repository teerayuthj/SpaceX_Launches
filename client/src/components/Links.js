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
import PropTypes from "prop-types";

const Links = ({
  flight_number,
  mission_name,
  mission_patch,
  launch_date_lacal,
  site_name_long,
  launch_success
}) => {
  return (
    <ThemeProvider theme={ThemeStyle}>
      <Link to={`/launch/${flight_number}`}>
        <ItemCard>
          <Img>{mission_patch}</Img>
          <Mission>{mission_name}</Mission>
          <Dates>
            <Moment format="DD-MM-YYYY HH:mm:ss">{launch_date_lacal}</Moment>
          </Dates>
          <LuanchSite>{site_name_long}</LuanchSite>
          <LuanchSuccess>{launch_success}</LuanchSuccess>
        </ItemCard>
      </Link>
    </ThemeProvider>
  );
};

Links.propTypes = {
  flight_number: PropTypes.string,
  mission_patch: PropTypes.string,
  mission_name: PropTypes.string,
  launch_date_lacal: PropTypes.string,
  site_name_long: PropTypes.string,
  launch_success: PropTypes.string
};

export default Links;
