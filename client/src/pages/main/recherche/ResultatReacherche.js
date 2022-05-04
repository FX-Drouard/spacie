import axios from "axios";
import React, { Component } from "react";
import MessageList from "../accueil/message/MessagesList";
import ProfilList from "../profil/ProfilList";
class ResultatReacherche extends Component {
  constructor(props) {
    super(props);
    this.state = {
      container: null,
    };
  }

  componentWillMount() {
    if (!this.props.recherche) return;
    if (this.props.recherche[0] == "@") {
      axios
        .get("/api/user/"+this.props.recherche.substring(1))
        .then((res) => {
          this.setState({
            container: (
              <ProfilList
                setPage={this.props.setPage}
                resultat={res}
                setBody={this.props.setBody}
              />
            ),
          });
        })
        .catch((err) => this.setState({ container: <div>{err}</div> }));

      return;
    }
    let root  = "/api/message/"
    if (this.props.recherche[0] == "#") {
      root += "hashtags/"
      this.props.recherche = this.props.recherche.substring(1); 
    }
     
    axios
      .get(root + this.props.recherche )
      .then((res) => {
        this.setState({
          container: (
            <MessageList
              setPage={this.props.setPage}
              resultat={res}
              setBody={this.props.setBody}
            />
          ),
        });
      })
      .catch((err) => this.setState({ container: <div>{err}</div> }));
  }

  render() {
   
    return this.state.container;
  }
}

export default ResultatReacherche;
