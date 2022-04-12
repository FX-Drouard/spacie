import axios from "axios";
import React, { Component } from "react";
import Profil from "./Profil.js";

class ProfilButton extends Component {
  constructor(props) {
    super(props);

    this.token = document.cookie
      .split(";")
      .find((it) => it.includes("token="))
      .split("=")[1];
    this.state = { login: null };
  }
  componentWillMount() {
    axios
      .get("/api/user/token/" + this.token)
      .then((res) => this.setState({ login: res }));
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
          <img src={this.state.login.photoProfil} alt="photo de profil" />
        </span>
      </div>
    );
  }
}

export default ProfilButton;
