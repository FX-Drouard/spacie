import React, { Component } from 'react'
import UserInfo from '../general/UserInfo';
import LoginPage from '../../login/LoginPage'
class ProfilInfo extends Component {
    constructor(props) {
        super(props)
    }

    ajouter() {
        if (this.props.token === "") {
            this.props.setBody(<LoginPage setBody={this.props.setBody} serveur={this.props.serveur} setToken={this.props.setToken} />);
            return
        }
    }

    render() {
        return <div className="profil_info">
            <div className="user_info">
                <UserInfo token={this.props.token} serveur={this.props.serveur} user={this.props.user} setPage={this.props.setPage} />
                <div className="buttons" onClick={() => this.ajouter()}>Ajouter</div>
            </div>
        </div>
    }
}

export default ProfilInfo

