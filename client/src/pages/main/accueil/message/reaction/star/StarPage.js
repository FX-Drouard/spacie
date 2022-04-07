import ProfilList from "../../../../profil/ProfilList";

import React, { Component } from "react";

export default class StarPage extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <ProfilList
        setPage={props.setPage}
        resultat={props.message.stars}
        setBody={props.setBody}
      />
    );
  }
}
