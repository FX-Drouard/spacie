import axios from "axios";
import React from "react";

const SupprimerAmiButton = (props) => {
  return (
    <div
      className="buttons"
      onClick={() => {
        axios.delete("/api/friend/" + props.login).catch((err) => alert(err));
      }}
    >
      Supprimer
    </div>
  );
};

export default SupprimerAmiButton;
