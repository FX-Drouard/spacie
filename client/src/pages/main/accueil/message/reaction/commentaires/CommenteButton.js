import React, { Component } from "react";
import LoginPage from "../../../../../login/LoginPage.js";
import CommentePage from "./CommentePage.js";
class CommenteButton extends Component {
  constructor(props) {
    super(props);
    this.token = document.cookie
      .split(";")
      .find((it) => it.includes("token="))
      .split("=")[1];
    this.visible = false;
  }

  commentairePublication() {
    this.visible = !this.visible;
    if (this.token === "") {
      this.props.setBody(
        <LoginPage setBody={this.props.setBody} serveur={this.props.serveur} />
      );
      return;
    }
    this.props.setReaction(
      this.visible ? (
        <CommentePage
          setBody={this.props.setBody}
          serveur={this.props.serveur}
          message={this.props.message}
        />
      ) : (
        ""
      )
    );
  }
  render() {
    return (
      <div
        className="message_button fa-solid fa-comment-dots fa-xl"
        onClick={(event) => {
          this.commentairePublication();
        }}
      ></div>
    );
  }
}

export default CommenteButton;
