import axios from "axios";

import React, { Component } from "react";
import { getLoginFromToken } from "./token";

export default class AjouterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null,
    };
  }
  render() {
    return (
      <div
        className="buttons"
        style={{ backgroundColor: this.state.color }}
        onClick={() => {
          axios
            .post("/api/friend/" + this.props.login,
            {login : getLoginFromToken()}
            )
            .then(() => this.setState({ color: "green" }))
            .catch((err) => alert(err));
        }}
      >
        Ajouter
      </div>
    );
  }
}
