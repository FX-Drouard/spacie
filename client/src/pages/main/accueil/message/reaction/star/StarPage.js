import ProfilList from "../../../../profil/ProfilList";

import React, { Component } from "react";

export default class StarPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ProfilList
        setPage={this.props.setPage}
        resultat={this.props.message.stars}
        setBody={this.props.setBody}
      />
    );
  }
}
