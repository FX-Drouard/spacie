import axios from "axios";
import React, { Component } from "react";
import Profil from "./Profil.js";
const data = require("../general/Data.js");

class ProfilButton extends Component {
  constructor(props) {
    super(props);
    this.user = data.getProfile("Fristorm");
    this.token = document.cookie
      .split(";")
      .find((it) => it.includes("token="))
      .split("=")[1];
  }

  gotoProfil() {
    axios
      .get("/api/user/" + this.token)
      .then((res) => {
        this.props.setPage(
          <Profil
            setBody={this.props.setBody}
            setPage={this.props.setPage}
            user={res}
          />
        );
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div id="lien_profil">
        <span onClick={() => this.gotoProfil()}>
          <img src={this.user.photoProfil} alt="photo de profil" />
        </span>
      </div>
    );
  }
}

export default ProfilButton;
