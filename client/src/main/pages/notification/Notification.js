import React from 'react';
import MessageUserInfo from '../accueil/message/MessageUserInfo';

const Notification = (props) => {
    return (
        <div className="notification">
            <div className="message_user_info">
                <MessageUserInfo token={props.token} serveur={props.serveur} user={props.message.sender} setPage={props.setPage} />
                <p className="message_date">{props.message.date} {props.message.heure}</p>
            </div>
            <div className="message_textuel">{props.message.text}</div>
            <div className="notification_button">
                <div className="buttons" onClick={
                    console.log("")
                }>Consulter</div>
            </div>
        </div>


    );
};

export default Notification;