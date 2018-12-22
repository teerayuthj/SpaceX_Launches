import React from "react";
import PropTypes from "prop-types";

const Youtube = props => {
  return (
    <iframe
      width="640"
      height="390"
      src={props.VideoLink}
      frameBorder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="SpaceX"
    />
  );
};

Youtube.propTypes = {
  VideoLink: PropTypes.string.isRequired
};

export default Youtube;
