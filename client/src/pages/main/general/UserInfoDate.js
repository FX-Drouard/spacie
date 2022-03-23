import React from 'react';
import MessageDate from '../accueil/message/MessageDate';
import UserInfo from './UserInfo';

const UserInfoDate = (props) => {
    return (
        <div className="message_user_info">
            <UserInfo serveur={props.serveur} user={props.user} setPage={props.setPage} />
            <MessageDate date={props.date} heure={props.heure} />
        </div>
    );
};

export default UserInfoDate;