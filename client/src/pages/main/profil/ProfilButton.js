import axios from "axios";
import React, { Component } from "react";
import Profil from "./Profil.js";
const token = require("../general/token.js");
const jwt = require("jsonwebtoken");

class ProfilButton extends Component {
  constructor(props) {
    super(props);

    this.token = token.getToken();
    this.state = { login: null };
  }
  componentWillMount() {
    
    this.setState({login: token.getLoginFromToken(this.token)})
    axios
    .get("/api/user/info/" + this.state.login)
    .then((res) => {
      this.setState({user : res.data})
    })
    .catch((err) => {
      alert(err);
    });
  }

  gotoProfil() {
        this.props.setPage(
          <Profil
            setBody={this.props.setBody}
            setPage={this.props.setPage}
            user={login}
          />
        );
  }

  render() {
    if(!this.state.user)
       return(<div></div>)
    return (
      <div id="lien_profil">
        <span onClick={() => this.gotoProfil()}>
          <img src={this.state.user.photoProfil} alt="photo de profil" />
        </span>
      </div>
    );
  }
}

export default ProfilButton;
