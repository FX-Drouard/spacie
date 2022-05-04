import React, { Component } from "react";
import NewMessage from "./message/NewMessage.js";
import MessageList from "./message/MessagesList.js";
import axios from "axios";
const token = require("../general/token.js");
class Accueil extends Component {
  constructor(props) {
    super(props);
    this.token = token.getToken()
    this.state = {
      resultat: [],
    };
    this.refresh = this.refresh.bind(this);
  }

  componentWillMount() {
    this.refresh();
  }

  componentWillReceiveProps(props) {
    this.props = props;
    this.refresh();
  }

  refresh() {
    axios
      .get("/api/message")
      .then((res) => this.setState({ resultat: res }))
      .catch((err) =>{ 
        this.setState({ resultat: [] });
        alert(err);
      });
  }

  getNewMessageComponent() {
    if (this.token !== "") {
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
          resultat={this.state.resultat}
        />
      </div>
    );
  }
}

export default Accueil;
