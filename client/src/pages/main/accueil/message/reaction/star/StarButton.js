import axios from "axios";
import React, { Component } from "react";
import LoginPage from "../../../../../login/LoginPage";

class StarButton extends Component {
  constructor(props) {
    super(props);

    this.token = document.cookie
      .split(";")
      .find((it) => it.includes("token="))
      .split("=")[1];
  }

  componentWillMount() {
    if (this.token) {
      axios.get("/api/user/token/" + this.token).then((res) => {
        for (let i in this.props.message.stars) {
          if ((i.login = res)) {
            this.setState({ isLiked: true });
            break;
          }
        }
      });
    }
  }

  aimerPublication() {
    if (this.token === "") {
      this.props.setBody(<LoginPage setBody={this.props.setBody} />);
      return;
    }
    axios
      .post("/api/message/star", {
        messageID: this.props.message.id,
        liked: this.state.isLiked,
      })
      .then((res) => this.setState({ isLiked: res }))
      .catch((err) => alert(err));
  }

  render() {
    return (
      <div
        className="message_button fa-solid fa-star fa-xl"
        onClick={(event) => {
          this.aimerPublication();
        }}
        style={{ color: this.state.isLiked ? "green" : "#b0c9da" }}
      ></div>
    );
  }
}

export default StarButton;
