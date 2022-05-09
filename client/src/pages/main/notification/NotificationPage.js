import axios from "axios";
import React, { Component } from "react";
import { getLoginFromToken } from "../general/token";
import NotificationList from "./NotificationList";
import { getToken } from "../general/token";

export default class NotificationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultat: [],
    };
    
  }
  componentWillMount() {
    axios
      .get("/api/notification/",{login : getLoginFromToken(),headers: {
        authorization: "Bearer " + getToken(),
      }},
      )
      .then((res) => {
        this.setState({ resultat: res.data });
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
          setPage={this.props.setPage}
          resultat={this.state.resultat}
        />
      </div>
    );
  }
}
