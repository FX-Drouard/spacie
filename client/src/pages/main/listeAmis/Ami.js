import React from "react";
import SupprimerAmiButton from "../general/SupprimerAmiButton";
import UserInfo from "../general/UserInfo";

import React, { Component } from 'react'
import axios from "axios";
import { getLoginFromToken } from "../general/token";

export default class Ami extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : null,
    }
  }

  componentWillMount() {
    axios
    .get("/api/user/" + getLoginFromToken())
    .then((res) => {
      this.setState({user : res.data})
    })
    .catch((err) => {
      alert(err);
    });
  
  }

  render() {
    return (
      <div className="ami">
      <UserInfo user={this.state.user} setPage={this.props.setPage} />
      <div className="ami_button">
        <SupprimerAmiButton login={this.props.user} />
      </div>
    </div>
    )
  }
}




