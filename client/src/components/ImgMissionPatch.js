import React, { Component } from "react";
import PropTypes from "prop-types";
import spacexlogo from "../img/spacexlogo.jpg";

class ImgMissionPatch extends Component {
  constructor(props) {
    super(props);

    this.state = { ImgLoadError: true };
  }

  render() {
    return (
      <img
        alt=""
        src={this.props.src}
        onError={e => {
          if (this.state.ImgLoadError) {
            this.setState({
              ImgLoadError: false
            });
            e.target.src = { spacexlogo };
          }
        }}
      />
    );
  }
}

ImgMissionPatch.propTypes = {
  src: PropTypes.string
};

export default ImgMissionPatch;
