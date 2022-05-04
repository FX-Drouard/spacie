import React, { Component } from "react";
import MessageList from "../accueil/message/MessagesList";
import Popup from "reactjs-popup";
import EditProfil from "./EditProfil";
import DetailProfil from "./DetailProfil";
import LoginPage from "../../login/LoginPage";
import axios from "axios";
import AjouterButton from "../general/AjouterButton";
import ListeAmis from "../listeAmis/ListeAmis";
import SupprimerAmiButton from "../general/SupprimerAmiButton";
const token = require("../general/token.js");
const jwt = require("jsonwebtoken");
const date = require("../general/data.js");

class Profil extends Component {
  constructor(props) {
    super(props);
    this.token =token.getToken()
    this.state = {
      container: null,
      buttonName: "Amis",
      userConnect: null,
      user : null,
      isFriend : false,
    };

  }

  componentWillReceiveProps(props) {
    this.props = props;
  }

  componentWillMount() {
    
    if (this.token != ""){
      const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
      this.setState({userConnect: decodedToken.login})
    }

    axios
    .get("/api/user/" + this.props.login)
    .then((res) => {
      this.setState({user : res.data})
    })
    .catch((err) => {
      alert(err);
    });
    if (this.token != "")
      this.setState({isFriend : this.state.user.amis.filter((ami) => { ami == this.state.userConnect }).length > 0 })
    this.date = date.getDate(this.state.user.creationDate);
    this.setContainer();  
  }

  disconnect() {
    axios
      .delete("/api/user/signout")
      .then((res) => {
        token.setToken("");
        this.props.setBody(<LoginPage setBody={this.props.setBody} />);
      })
      .catch((err) => {
        alert(err);
      });
  }

  setContainer() {
    if (this.buttonName == "Amis") {
      axios
        .get("/api/freind/" + this.state.user.login)
        .then((res) => {
          this.setState({
            container: (
              <ListeAmis
                user={res}
                setPage={this.props.setPage}
              />
            ),
            buttonName: "Messages",
          });
        })
        .catch((err) => alert(err));
    }
    if (this.buttonName == "Messages") {
      axios
        .get("/api/message/" + this.state.user.login)
        .then((res) => {
          this.setState({
            container: (
              <MessageList
                user={res}
                setPage={this.props.setPage}
              />
            ),
            buttonName: "Message",
          });
        })
        .catch((err) => alert(err));
    }
  }

  render() {
    return (
      <div className="millieu">
        <section id="info_user">
          <span className="photoProfil">
            <img
              id="pdp"
              src={this.state.user.photoProfil}
              alt="Photo de Profil"
            />
          </span>
          <div id="info_profil">
            <div className="info_ligne">
              <div id="loginProfil" className="info">
                <h3>Login</h3>
                <p className="breaker">{this.state.user.login}</p>
              </div>
              <div id="emailProfil" className="info">
                <h3>email</h3>
                <p className="breaker">{this.state.user.mail}</p>
              </div>
              <div id="loginProfil" className="info">
                <h3>Nick name</h3>
                <p className="breaker">{this.state.user.nickName}</p>
              </div>
              <div id="creationProfil" className="info">
                <h3>Date de Création</h3>
                <p className="breaker">
                  {this.date}
                </p>
              </div>
            </div>
            <div id="button_profil">
              {this.state.user.login == this.state.userConnect ? (
                <div className="buttons" onClick={() => this.disconnect()}>
                  Déconnection
                </div>
              ) : (
                this.token != "" &&
                (this.state.isFriend? (
                  <SupprimerAmiButton user={this.props.user} />
                ) : (
                  <AjouterButton user={this.props.user} />
                ))
              )}

              {this.state.user.login != this.state.userConnect && (
                <div
                  className="buttons"
                  onClick={() => {
                    this.setContainer();
                  }}
                >
                  {this.state.buttonName}
                </div>
              )}

              <Popup
                trigger={<div className="buttons">Details</div>}
                modal
                closeOnDocumentClick
                closeOnEscape
                contentStyle={{ padding: "10px", width: "500px" }}
              >
                {(close) => (
                  <DetailProfil user={this.props.user} close={close} />
                )}
              </Popup>
              {this.state.user.nickName == this.state.userConnect && (
                <Popup
                  trigger={<div className="buttons display"> Modifier</div>}
                  modal
                  closeOnDocumentClick
                  closeOnEscape
                  contentStyle={{ padding: "10px", width: "500px" }}
                >
                  {(close) => (
                    <EditProfil
                      user={this.props.user}
                      close={close}
                      setBody={this.props.setBody}
                    />
                  )}
                </Popup>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profil;
