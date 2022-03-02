import React, { Component } from 'react';
import Profil from '../../profil/Profil.js'
class MessageUserInfo extends Component {
    constructor(props) {
        super(props);

    }

    gotoProfil() {
        this.props.setPage(<Profil user={this.props.user} />)
    }

    render() {
        return <div className="userName">
            <span className="photoProfil" onClick={(event) => this.gotoProfil()}><img src={this.props.user.photoProfil} alt="pdp"
                width="40" height="40" /></span>
            <span className="name" onClick={(event) => this.gotoProfil()}>
                {this.props.user.nickName}
            </span>
        </div>

    }
}

export default MessageUserInfo