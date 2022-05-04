import axios from "axios";
import LoginPage from "../../../../../login/LoginPage";
import React from "react";
const token = require("../../../../general/token.js");
const RepostButton = (props) => {
  let token = token.getToken();
  return (
    <div
      className="message_button fa-solid fa-rocket fa-xl"
      onClick={(event) => {
        if (token === "") {
          this.props.setBody(<LoginPage setBody={props.setBody} />);
          return;
        }
        axios
          .post("/api/message/repost/"+ props.message.id)
          .then((res) => props.setMessageResult(res, { color: "green" }))
          .catch((err) => props.setMessageResult(err, { color: "red" }));
      }}
    ></div>
  );
};

export default RepostButton;
