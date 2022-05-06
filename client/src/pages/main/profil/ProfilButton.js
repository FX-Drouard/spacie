import axios from "axios";
import React, { Component } from "react";
import Profil from "./Profil.js";
import {getToken,getLoginFromToken} from "../general/token.js"

class ProfilButton extends Component {
  constructor(props) {
    super(props);

    this.token = getToken()
    this.state = { login: null };
  }
  componentWillMount() {
    
    this.setState({login: getLoginFromToken()})
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
            user={this.state.login}
          />
        );
  }

  render() {
    if(!this.state.user)
       return(<div></div>)
    return (
      <div id="lien_profil">
        <span onClick={() => this.gotoProfil()}>
          <img src={this.state.user.image} alt="photo de profil" />
        </span>
      </div>
    );
  }
}

export default ProfilButton;
