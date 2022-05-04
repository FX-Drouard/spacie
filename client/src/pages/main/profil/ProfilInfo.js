import React, { Component } from "react";
import UserInfo from "../general/UserInfo";
import AjouterButton from "../general/AjouterButton";
import SupprimerAmiButton from "../general/SupprimerAmiButton";
const token = require("../general/token.js");
class ProfilInfo extends Component {
  constructor(props) {
    super(props);
    this.token = token.getToken();
  }

  render() {
    return (
      <div className="profil_info">
        <div className="user_info">
          <UserInfo user={this.props.user} setPage={this.props.setPage} />
          {this.token != "" &&
            (this.props.user.ami ? (
              <SupprimerAmiButton user={this.props.user} />
            ) : (
              <AjouterButton user={this.props.user} />
            ))}
        </div>
      </div>
    );
  }
}

export default ProfilInfo;
