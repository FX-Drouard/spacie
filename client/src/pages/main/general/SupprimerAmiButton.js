import axios from "axios";
import React from "react";
import { getLoginFromToken } from "./token";

const SupprimerAmiButton = (props) => {
  return (
    <div
      className="buttons"
      onClick={() => {
        axios.delete("/api/friend/" + props.login,
        {login : getLoginFromToken()}
        ).catch((err) => alert(err));
      }}
    >
      Supprimer
    </div>
  );
};

export default SupprimerAmiButton;
