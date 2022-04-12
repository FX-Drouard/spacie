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

class Profil extends Component {
  constructor(props) {
    super(props);
    this.token = document.cookie
      .split(";")
      .find((it) => it.includes("token="))
      .split("=")[1];
    this.state = {
      container: null,
      buttonName: "Amis",
      user: null,
    };

    this.date = new Date(this.props.user.creationDate);
  }

  componentWillReceiveProps(props) {
    this.props = props;
  }

  componentWillMount() {
    axios.get("/api/user/token" + this.token).then((res) => {
      this.setState({ user: res });
    });
    axios
      .get("/api/message/" + this.state.user.login)
      .then((res) => {
        this.setState({
          container: <MessageList user={res} setPage={this.props.setPage} />,
          buttonName: "Message",
        });
      })
      .catch((err) => alert(err));
  }

  disconnect() {
    axios
      .delete("/api/user/logout/" + this.token)
      .then((res) => {
        this.props.setBody(<LoginPage setBody={this.props.setBody} />);
      })
      .catch((err) => {
        alert(err);
      });
  }

  setContainer() {
    if (this.buttonName == "Amis") {
      axios
        .get("/api/freind/" + this.props.user.login)
        .then((res) => {
          this.setState({
            container: (
              <ListeAmis
                serveur={this.props.serveur}
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
        .get("/api/message/" + this.props.user.login)
        .then((res) => {
          this.setState({
            container: (
              <MessageList
                serveur={this.props.serveur}
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
              src={this.props.user.photoProfil}
              alt="Photo de Profil"
            />
          </span>
          <div id="info_profil">
            <div className="info_ligne">
              <div id="loginProfil" className="info">
                <h3>Login</h3>
                <p className="breaker">{this.props.user.login}</p>
              </div>
              <div id="emailProfil" className="info">
                <h3>email</h3>
                <p className="breaker">{this.props.user.mail}</p>
              </div>
              <div id="loginProfil" className="info">
                <h3>Nick name</h3>
                <p className="breaker">{this.props.user.nickName}</p>
              </div>
              <div id="creationProfil" className="info">
                <h3>Date de Création</h3>
                <p className="breaker">
                  {this.date.getFullYear() +
                    "/" +
                    (this.date.getMonth() + 1) +
                    "/" +
                    this.date.getDate()}
                </p>
              </div>
            </div>
            <div id="button_profil">
              {this.props.user.nickName == this.state.user ? (
                <div className="buttons" onClick={() => this.disconnect()}>
                  Déconnection
                </div>
              ) : (
                this.token != "" &&
                (this.props.user.ami ? (
                  <SupprimerAmiButton user={this.props.user} />
                ) : (
                  <AjouterButton user={this.props.user} />
                ))
              )}

              {this.props.user.nickName != this.state.user && (
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
              {this.props.user.nickName == "Fristorm" && (
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
