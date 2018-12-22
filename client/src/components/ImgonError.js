import React, { Component } from "react";
import ErrorLogo from "../img/ErrorLogo.png";
import spacex from "../img/space-x-logo.jpg";
import { Img } from "../Styles/Cards";

class ImgonError extends Component {
  constructor(props) {
    super(props);

    this.state = { imageError: true };
  }

  render() {
    const { Src } = this.props;
    return (
      <div>
        <Img
          alt=""
          src={Src ? Src : spacex}
          onError={e => {
            if (this.state.imageError) {
              this.setState({
                imageError: false
              });
              e.target.src = { ErrorLogo };
            }
          }}
        />
      </div>
    );
  }
}

export default ImgonError;
