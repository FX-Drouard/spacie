import React from 'react';
import Ami from './Ami';

const ListeAmis = (props) => {
    return (
        <div>
            {props.user.map(user => <Ami token={props.token} serveur={props.serveur} user={user} setPage={props.setPage} />)}
        </div>
    );
};

export default ListeAmis;
