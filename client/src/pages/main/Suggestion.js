import axios from "axios";
import React, { Component } from "react";
import ProfilList from "./profil/ProfilList";
const token = require("../general/token.js");
class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.token = token.getToken()
    this.state = {
      resultat: [],
    };
  }
  componentWillMount() {
    axios
      .get("/api/user/info")
      .then((res) => {
        this.setState({ resultat: res.data.slice(0, 5) });
      })
      .catch((err) => {
        this.setState({ resultat: [] });
      });
  }
  render() {
    if (this.token != "0")
      return (
        <div id="suggestion_profil">
          <ProfilList
            serveur={this.props.serveur}
            setPage={this.props.setPage}
            setBody={this.props.setBody}
            resultat={this.state.resultat}
          />

          <div
            className="buttons"
            onClick={() => {
              axios
                .get("/api/user")
                .then((res) => {
                  this.setState({ resultat: res.data.slice(0, 5) });
                })
                .catch((err) => {
                  this.setState({ resultat: [] });
                  alert(err);
                });
            }}
          >
            Suggerer
          </div>
        </div>
      );

    return <div id="suggestion_profil"></div>;
  }
}

export default Suggestion;
