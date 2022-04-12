import axios from "axios";

import React, { Component } from "react";

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
            .post("/api/friend/ajouter/" + this.props.login)
            .then(() => this.setState({ color: "green" }))
            .catch((err) => alert(err));
        }}
      >
        Ajouter
      </div>
    );
  }
}
