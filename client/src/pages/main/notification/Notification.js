import React from 'react';
import UserInfo from '../general/UserInfo';
import UserInfoDate from '../general/UserInfoDate';

const Notification = (props) => {
    return (
        <div className="notification">
            <UserInfoDate serveur={props.serveur} user={props.message.sender} setPage={props.setPage} date={props.message.date} heure={props.message.heure} />
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