import axios from "axios";
import React, { Component } from "react";
import { getLoginFromToken , getToken} from "../general/token";
import ListeAmis from "./ListeAmis";

class AmiPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultat: [],
    };
  }

  componentWillMount() {
    axios
      .get("/api/friend/",
      {login : getLoginFromToken(),  headers: {
        authorization: "Bearer " + getToken(),
      },}
      )
      .then((res) => {
        this.setState({ resultat: res.data });
      })
      .catch(() => this.setState({ resultat: [] }));
  }

  render() {
    return (
      <div className="millieu">
        <ListeAmis
          users={this.state.resultat}
          setPage={this.props.setPage}
        />
      </div>
    );
  }
}

export default AmiPage;
