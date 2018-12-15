import React from "react";
import classNames from "classnames";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function Item({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) {
  return (
    <div>
      <div>
        <div>
          <h4>
            Mission:&ensp;
            <span
              className={classNames({
                "text-success": launch_success,
                "text-danger": !launch_success
              })}
            >
              {mission_name}
            </span>
          </h4>
          <p>
            Data: <Moment format="DD-MM-YYYY HH:mm">{launch_date_local}</Moment>
          </p>
        </div>
        <div>
          <Link to={`/launch/${flight_number}`}>Launch Details</Link>
        </div>
      </div>
    </div>
  );
}
