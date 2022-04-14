import React, { Component } from "react";
import CommenteButton from "./reaction/commentaires/CommenteButton";
import StarButton from "./reaction/star/StarButton.js";
import RepostButton from "./reaction/partage/RepostButton";
import UserInfoDate from "../../general/UserInfoDate";
import SupprimerButton from "./reaction/SupprimerButton";
import ModifierButton from "./reaction/modifier/ModifierButton";
import StarPage from "./reaction/star/StarPage";
import axios from "axios";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reaction: null,
      messageResult: null,
      styleMessage: null,
      userName: null,
    };

    this.setReaction = this.setReaction.bind(this);

    this.clickedStar = false;
    this.setMessageResult = this.setMessageResult.bind(this);
  }
  componentWillMount() {
    axios
      .get("/api/user/token/" + this.token)
      .then((res) => this.setState({ userName: res.login }));
  }

  componentWillReceiveProps(props) {
    this.props = props;
  }

  getNombreStars() {
    return this.props.message.stars;
  }
  getNombreCommentaires() {
    return this.props.message.commentaires;
  }
  getNombrePartages() {
    return this.props.message.shars;
  }
  getReaction() {
    return this.state.reaction;
  }
  setReaction(reaction) {
    this.setState({ reaction: reaction });
  }
  setMessageResult(message, style) {
    this.setState({ messageResult: message, styleMessage: style });
  }
  getMessageResul() {
    if (this.state.messageResult)
      return (
        <div style={this.state.styleMessage}>{this.state.messageResult}</div>
      );
    return;
  }
  render() {
    return (
      <article className="message">
        <UserInfoDate
          user={this.props.message.sender}
          setPage={this.props.setPage}
          date={this.props.message.date}
          heure={this.props.message.heure}
        />
        <div className="message_textuel">{this.props.message.text}</div>
        {this.props.message.image && (
          <img
            style={{ width: "100%" }}
            src={this.props.message.image}
            alt=""
          ></img>
        )}
        <div className="message_buttons">
          <div className="reaction_message">
            <StarButton
              setPage={this.props.setPage}
              message={this.props.message}
              setBody={this.props.setBody}
            />
            <span
              onClick={() => {
                this.clickedStar = !this.clickedStar;

                this.setReaction(
                  this.clickedStar ? (
                    <StarPage
                      message={this.props.message}
                      setBody={this.props.setBody}
                      setPage={this.props.setPage}
                    />
                  ) : null
                );
              }}
            >
              {this.getNombreStars()}
            </span>
          </div>

          {!this.props.comment ? (
            <div className="reaction_message">
              <CommenteButton
                setBody={this.props.setBody}
                message={this.props.message}
                setReaction={this.setReaction}
              />
              <span>{this.getNombreCommentaires()} </span>
            </div>
          ) : (
            ""
          )}

          <div className="reaction_message">
            {this.userName === this.props.message.sender.nickName ? (
              <SupprimerButton
                setBody={this.props.setBody}
                setPage={this.props.setPage}
                messageID={this.props.message.id}
                setMessageResult={this.setMessageResult}
              />
            ) : !this.props.comment ? (
              <RepostButton
                setBody={this.props.setBody}
                message={this.props.message}
                setPage={this.props.setPage}
                setMessageResult={this.setMessageResult}
              />
            ) : (
              ""
            )}
            {this.userName !== this.props.message.sender.nickName &&
              !this.props.comment && <span>{this.getNombrePartages()} </span>}
          </div>

          <div className="reaction_message">
            {this.userName === this.props.message.sender.nickName && (
              <ModifierButton
                setBody={this.props.setBody}
                message={this.props.message}
                setReaction={this.setReaction}
              />
            )}
          </div>
        </div>
        {this.getMessageResul()}
        {this.getReaction()}
      </article>
    );
  }
}

export default Message;
