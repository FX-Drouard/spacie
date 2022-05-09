import axios from "axios";
import React from "react";
import { getLoginFromToken, getToken } from "./token";

const SupprimerAmiButton = (props) => {
  console.log(props.login)
  return (
    <div
      className="buttons"
      onClick={() => {
        axios.delete("/api/friend/" + props.login,
        {login : getLoginFromToken(),headers: {
          authorization: "Bearer " + getToken(),
        },}
        ).catch((err) => alert(err));
      }}
    >
      Supprimer
    </div>
  );
};

export default SupprimerAmiButton;
