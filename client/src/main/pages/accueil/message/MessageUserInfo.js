import React, { Component } from 'react';
import Profil from '../../profil/Profil.js'
class MessageUserInfo extends Component {
    constructor(props) {
        super(props);
        this.sender = this.props.message.sender
    }

    gotoProfil() {
        this.props.setPage(<Profil user={this.sender} />)
    }

    render() {
        return <div className="userName">
            <span className="photoProfil" onClick={(event) => this.gotoProfil()}><img src={this.sender.photoProfil} alt="pdp"
                width="40" height="40" /></span>
            <span className="name" onClick={(event) => this.gotoProfil()}>
                {this.sender.nickName}
            </span>
        </div>

    }
}

export default MessageUserInfo