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
            <a onClick={(event) => this.gotoProfil()}><img src={this.sender.photoProfil} alt="pdp"
                width="40" height="40" /></a>
            <a onClick={(event) => this.gotoProfil()}>
                <p>{this.sender.nickName}</p>
            </a>
        </div>

    }
}

export default MessageUserInfo