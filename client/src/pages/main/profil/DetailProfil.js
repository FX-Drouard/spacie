import React, { Component } from "react";

class DetailProfil extends Component {
  componentWillReceiveProps(props) {
    this.props = props;
  }
  render() {
    return (
      <div id="detail_profil">
        <div className="info_ligne">
          <div className="info">
            <h3>Login</h3>
            <p>{this.props.user.login}</p>
          </div>

          <div className="info">
            <h3>Nick name</h3>
            <p>{this.props.user.nickName}</p>
          </div>
        </div>

        <div className="info_ligne">
          <div className="info">
            <h3>Date de Création</h3>
            <p className="breaker">{this.props.user.creationDate}</p>
          </div>
          <div className="info">
            <h3>Date de naissance</h3>
            <p className="breaker">{this.props.user.date}</p>
          </div>
        </div>
        <div className="info_ligne">
          <div className="info">
            <h3>email</h3>
            <p className="breaker">{this.props.user.mail}</p>
          </div>
          <div className="info">
            <h3>Biographie</h3>
            <p className="breaker">{this.props.user.biographie}</p>
          </div>
        </div>
        <div className="info_ligne">
          <div className="info">
            <h3>Amis</h3>
            <p className="breaker">{this.props.user.amis}</p>
          </div>
        </div>
        <div className="info_ligne">
          <div className="info">
            <h3>Messages</h3>
            <p className="breaker">{this.props.user.messages}</p>
          </div>
          <div className="info">
            <h3>Stars</h3>
            <p className="breaker">{this.props.user.stars}</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="buttons"
            onClick={(event) => {
              this.props.close();
            }}
          >
            Close
          </div>
        </div>
      </div>
    );
  }
}

export default DetailProfil;
