import React, { Component } from "react";
import Main from "./pages/main/Main.js";
import axios from "axios";
// import Serveur from '../../../serveur/Serveur.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.setBody = this.setBody.bind(this);
    // this.serveur = new Serveur()
    this.state = {
      page: null,
    };
    document.cookie = "token=0";

    this.token = document.cookie
      .split(";")
      .find((it) => it.includes("token="))
      .split("=")[1];
  }

  componentWillMount() {
    this.setBody(<Main setBody={this.setBody} />);
  }
  setBody(cl) {
    this.setState({ page: cl });
  }
  getBody() {
    return this.state.page;
  }
  render() {
    return this.getBody();
  }
}

export default App;
