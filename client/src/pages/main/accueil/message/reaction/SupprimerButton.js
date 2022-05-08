import axios from "axios";
import React from "react";
import { getLoginFromToken } from "../../../general/token";
import Accueil from "../../Accueil";

const SupprimerButton = (props) => {
  return (
    <div
      className="message_button fa-solid fa-trash-can fa-xl"
      onClick={(event) => {
        axios
          
          .delete("/api/message/" + props.messageID,{login : getLoginFromToken()},{
            headers: {
              authorization: "Bearer " + this.token,
            },
          })
          .then((res) => {
            props.setPage(
              <Accueil
                setPage={this.props.setPage}
                setBody={this.props.setBody}
              />
            );
            props.setMessageResult(res, { color: "green" });
          })
          .catch((err) => props.setMessageResult(err, { color: "red" }));
      }}
    ></div>
  );
};

export default SupprimerButton;
