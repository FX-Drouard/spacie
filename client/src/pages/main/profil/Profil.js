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
import {getToken,testToken,getLoginFromToken,setToken}  from "../general/token.js";
const date = require("../general/date.js");

class Profil extends Component {
  constructor(props) {
    super(props);
    this.token = getToken()
    this.state = {
      container: null,
      buttonName: "Amis",
      userConnect: null,
      user : this.props.user,
      isFriend : false,
      messages : [],
    };
    this.date = date.getDate(this.state.user.dateCreation);


  }

  componentWillReceiveProps(props) {
    this.props = props;
  }

  componentDidMount() {
    
    if (testToken(this.token)){
     
      this.setState({userConnect: getLoginFromToken()});

    }
   
    if (testToken(this.token)){
      console.log(this.state.user)
      let isFriend = false
      for (let ami in this.state.user.amis) {
        if (ami == this.state.userConnect) {
          isFriend = true
        }
      }
      this.setState({isFriend : isFriend})
      }
    this.setContainer();  
  }

  disconnect() {
    axios
      .delete("/api/user/signout", {login : this.state.userConnect,headers: {
        authorization: "Bearer " + this.token,
      },})
      .then((res) => {
        setToken(res.data);
        this.props.setBody(<LoginPage setBody={this.props.setBody} />);
      })
      .catch((err) => {
        alert(err);
      });
  }

  setContainer() {

    if (this.buttonName == "Amis") {
      console.log(this.state.user.amis)
      for (let idAmis in this.state.user.amis) { 
        axios
        .get("/api/friend/" + idAmis)
        .then((res) => {
          this.state.amis.push(res)
          this.setState({
            amis : this.state.amis
          });
        })
        .catch((err) => alert(err));
      }
    
      this.setState({
        container: (
          <ListeAmis
            user={this.state.user}
            setPage={this.props.setPage}
          />
        ),
        buttonName: "Messages",
      });
    }
    if (this.buttonName == "Messages") {
        for (let idMessage in this.state.user.messages) { 
          axios
          .get("/api/message/" + idMessage)
          .then((res) => {
            this.state.messages.push(res)
            this.setState({
              messages : this.state.messages
            });
          })
          .catch((err) => alert(err));
        }
      
          this.setState({
            container: (
              <MessageList
                setPage={this.props.setPage}
                setBody={this.props.setBody}
                resultat={this.state.messages}
              />
            ),
            buttonName: "Message",
          });
       
    }
  }

  render() {
    return (
      <div className="millieu">
        <section id="info_user">
          <span className="photoProfil">
            <img
              id="pdp"
              src={this.state.user.photo}
              alt="Photo de Profil"
            />
          </span>
          <div id="info_profil">
            <div className="info_ligne">
              <div id="loginProfil" className="info">
                <h3>Login</h3>
                <p className="breaker">{this.state.user._id}</p>
              </div>
              <div id="emailProfil" className="info">
                <h3>email</h3>
                <p className="breaker">{this.state.user.email}</p>
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
              {this.state.user._id == this.state.userConnect ? (
                <div className="buttons" onClick={() => this.disconnect()}>
                  Déconnection
                </div>
              ) : (
                testToken(this.token) &&
                (this.state.isFriend? (
                  <SupprimerAmiButton user={this.state.user._id} />
                ) : (
                  <AjouterButton user={this.state.user._id} />
                ))
              )}

              {this.state.user._id != this.state.userConnect && (
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
                  <DetailProfil user={this.state.user} close={close} />
                )}
              </Popup>
              {this.state.user._id == this.state.userConnect && (
                <Popup
                  trigger={<div className="buttons display"> Modifier</div>}
                  modal
                  closeOnDocumentClick
                  closeOnEscape
                  contentStyle={{ padding: "10px", width: "500px" }}
                >
                  {(close) => (
                    <EditProfil
                      user={this.state.user}
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
