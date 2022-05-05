import axios from "axios";
import React, { Component } from "react";
import NewMessage from "../../NewMessage";
import Commentaires from "./Commantaires";
class CommentePage extends Component {
  constructor(props) {
    super(props);

    this.refresh = this.refresh.bind(this);
    this.refresh()
  }
  refresh() {
    axios
      .get("/api/message/commentaire/" + this.props.message.id)
      .then((res) => this.setState({ resultat: res }))
      .catch((err) => this.setState({ resultat: [] }));
  }
  render() {
    return (
      <div className="commentaires">
        <NewMessage
          setPage={this.setPage}
          erreur={this.props.erreur}
          messageID={this.props.message.id}
          refresh={this.refresh}
        />
        <Commentaires
          setBody={this.props.setBody}
          setPage={this.setPage}
          resultat={this.state.resultat}
        />
      </div>
    );
  }
}

export default CommentePage;
