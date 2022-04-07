import axios from "axios";
import LoginPage from "../../../../../login/LoginPage";

import React from "react";

const PartagerButton = (props) => {
  let token = document.cookie
    .split(";")
    .find((it) => it.includes("token="))
    .split("=")[1];
  return (
    <div
      className="message_button fa-solid fa-rocket fa-xl"
      onClick={(event) => {
        if (token === "") {
          this.props.setBody(<LoginPage setBody={props.setBody} />);
          return;
        }
        axios
          .post("/api/message/" + token, { message: props.message })
          .then((res) => props.setMessageResult(res, { color: "green" }))
          .catch((err) => props.setMessageResult(err, { color: "red" }));
      }}
    ></div>
  );
};

export default PartagerButton;
