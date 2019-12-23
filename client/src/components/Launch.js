import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { Containers } from "../Styles/Details";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
      details
    }
  }
`;

export class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
      <Fragment>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading)
              return <div style={{ textAlign: "center" }}>Loading...</div>;
            if (error) console.log(error);

            const {
              mission_name,
              flight_number,
              launch_year,
              launch_success,
              rocket: { rocket_id, rocket_name, rocket_type },
              details
            } = data.launch;

            return (
              <Containers>
                <h1>
                  <span>Mission: {mission_name}</span>
                </h1>

                <h4>Launch Detail</h4>
                <ul>
                  <li>Flight Number: {flight_number}</li>
                  <li>Launch Yaer: {launch_year}</li>
                  <li>
                    Launch Successful:
                    <span>{launch_success ? "Yes" : "No"}</span>
                  </li>
                </ul>
                <p>Detail : {details}</p>

                <h4>Rocket Detail</h4>

                <ul>
                  <li>Rocket ID: {rocket_id}</li>
                  <li>Rocket Name: {rocket_name}</li>
                  <li>Rocket Type: {rocket_type}</li>
                </ul>

                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Back
                </Link>
              </Containers>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launch;
