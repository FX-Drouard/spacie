import axios from "axios";
import React, { Component } from "react";
import NotificationList from "./NotificationList";
const token = require("../general/token.js");
export default class NotificationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultat: [],
    };
    this.token = token.getToken();
  }
  componentWillMount() {
    axios
      .get("/api/notification/" + this.token)
      .then((res) => {
        this.setState({ resultat: res });
      })
      .catch((err) => this.setState({ resultat: [] }));
  }
  componentWillReceiveProps(props) {
    this.componentWillMount(props)
  }

  render() {
    return (
      <div className="millieu">
        <NotificationList
          setBody={this.props.setBody}
          serveur={this.props.serveur}
          setPage={this.props.setPage}
          resultat={this.state.resultat}
        />
      </div>
    );
  }
}
