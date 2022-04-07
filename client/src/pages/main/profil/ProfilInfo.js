import React, { Component } from "react";
import UserInfo from "../general/UserInfo";
import AjouterButton from "../general/AjouterButton";
import SupprimerAmiButton from "../general/SupprimerAmiButton";
class ProfilInfo extends Component {
  constructor(props) {
    super(props);
    this.token = document.cookie
      .split(";")
      .find((it) => it.includes("token="))
      .split("=")[1];
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
