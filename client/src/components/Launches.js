import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
//import Item from "./Item";
import Mission from "./Mission";
import Links from "./Links";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
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

            return (
              <Fragment>
                {data.launches.map(launch => (
                  <Links key={launch.flight_number} launch={launch} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launches;
