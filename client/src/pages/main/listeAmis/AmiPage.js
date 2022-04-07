import axios from "axios";
import React, { Component } from "react";
import ListeAmis from "./ListeAmis";

class AmiPage extends Component {
  constructor(props) {
    super(props);
    this.resultat = null;
  }

  componentWillMount() {
    axios
      .get("/api/friend/" + this.props.login)
      .then((res) => {
        this.resultat = res;
      })
      .catch((err) => alert(err));
  }

  render() {
    return (
      <div className="millieu">
        <ListeAmis
          serveur={this.props.serveur}
          user={this.resultat}
          setPage={this.props.setPage}
        />
      </div>
    );
  }
}

export default AmiPage;
