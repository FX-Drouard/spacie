import React from "react";
import UserInfoDate from "../general/UserInfoDate";

const Notification = (props) => {
  return (
    <div className="notification">
      <UserInfoDate
        user={props.notification.sender}
        setPage={props.setPage}
        date={props.notification.date}
        heure={props.notification.heure}
      />
      <div className="message_textuel">{props.notification.text}</div>
      {props.notification.isFriendDemande && (
        <div className="notification_button">
          <div className="buttons" onClick={console.log("")}>
            Annuler
          </div>
          <div className="buttons" onClick={console.log("")}>
            Accepter
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
