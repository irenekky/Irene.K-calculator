import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <React.Fragment>
        <div className="w3-container">
        <h3 className="w3-center w3-text-white">Irene .K Calculator</h3></div>
      
      <div className="component-display">
        
        <div>{this.props.value}</div>
      </div>
      </React.Fragment>
    );
  }
}
