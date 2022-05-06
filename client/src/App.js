import React, { Component } from "react";
import Main from "./pages/main/Main.js";
import {setToken} from "./pages/main/general/token.js";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.setBody = this.setBody.bind(this);
    // const host = location.hostname;
    axios.defaults.baseURL = 'http://spacie.fr/api/';
  
    this.state = {
      page: null,
    };
    setToken({token : "",login : ""});
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
