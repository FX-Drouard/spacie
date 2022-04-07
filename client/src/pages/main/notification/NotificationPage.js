import axios from "axios";
import React, { Component } from "react";
import NotificationList from "./NotificationList";

export default class NotificationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultat: [],
    };
    this.token = document.cookie
      .split(";")
      .find((it) => it.includes("token="))
      .split("=")[1];
    axios
      .get("/api/notification/" + this.token)
      .then((res) => {
        this.setState({ resultat: res });
      })
      .catch((err) => alert(err));
  }

  componentWillReceiveProps(props) {
    axios
      .get("/api/notification/" + this.token)
      .then((res) => {
        this.setState({ resultat: res });
      })
      .catch((err) => alert(err));
  }

  render() {
    return (
      <div className="millieu">
        <NotificationList
          setBody={this.props.setBody}
          serveur={this.props.serveur}
          setPage={this.props.setPage}
          resultat={this.resultat}
        />
      </div>
    );
  }
}
