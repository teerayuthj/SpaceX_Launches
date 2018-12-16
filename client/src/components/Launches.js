import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
//import Item from "./Item";
import Mission from "./Mission";
import Links from "./Links";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery($flight_number: Int!) {
    launches(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_date_local
      launch_success
      links {
        mission_patch
      }
      launch_site {
        site_name_long
      }
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h1>Launches</h1>
        <Mission />
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            const {
              mission_name,
              launch_date_local,
              launch_success,
              links: { mission_patch },
              launches_site: { site_name_long }
            } = data.launches;

            return (
              <Links
                mission_patch={mission_patch}
                mission_name={mission_name}
                launch_date_lacal={launch_date_local}
                site_name_long={site_name_long}
                launch_success={launch_success}
              />
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launches;
