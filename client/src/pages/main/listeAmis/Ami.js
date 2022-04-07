import React from "react";
import SupprimerAmiButton from "../general/SupprimerAmiButton";
import UserInfo from "../general/UserInfo";

const Ami = (props) => {
  return (
    <div className="ami">
      <UserInfo user={props.user} setPage={props.setPage} />
      <div className="ami_button">
        <SupprimerAmiButton user={props.user} />
      </div>
    </div>
  );
};

export default Ami;
