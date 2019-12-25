import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchesCard from "./LaunchesCard";
import { Grid, Names } from "../Styles/GridContainer";
import Loading from "./Loading";

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
      details
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <Names>SpaceX Launches</Names>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) console.log(error);

            return (
              <Grid>
                {data.launches.map((launch, index) => (
                  <section key={index}>
                    <LaunchesCard launch={launch} />
                  </section>
                ))}
              </Grid>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launches;
