import React, { Component } from "react";
import NewMessage from "./message/NewMessage.js";
import MessageList from "./message/MessagesList.js";
import axios from "axios";
class Accueil extends Component {
  constructor(props) {
    super(props);
    this.token = document.cookie
      .split(";")
      .find((it) => it.includes("token="))
      .split("=")[1];
    this.state = {
      resultat: null,
    };

    axios
      .get("/api/message")
      .then((res) => this.setState({ resultat: res }))
      .catch((err) => alert(err));
    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    this.state = {
      resultat: null,
    };

    axios
      .get("/api/message")
      .then((res) => this.setState({ resultat: res }))
      .catch((err) => alert(err));
  }

  getNewMessageComponent() {
    if (this.props.token !== "") {
      return (
        <NewMessage
          setPage={this.setPage}
          erreur={this.props.erreur}
          setBody={this.props.setBody}
          refrech={this.refresh}
        />
      );
    }
  }

  render() {
    return (
      <div className="millieu">
        {this.getNewMessageComponent()}
        <MessageList
          setBody={this.props.setBody}
          setPage={this.props.setPage}
          resultat={this.resultat}
        />
      </div>
    );
  }
}

export default Accueil;
