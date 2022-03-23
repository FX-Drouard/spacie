import React from 'react';
import UserInfo from '../general/UserInfo';

const Ami = (props) => {
    return (
        <div className="ami">
            <UserInfo serveur={props.serveur} user={props.user} setPage={props.setPage} />
            <div className="ami_button">
                <div className="buttons" onClick={
                    console.log("")
                }>Bloquer</div>
            </div>
        </div>

    );
};

export default Ami;