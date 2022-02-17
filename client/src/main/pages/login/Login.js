import React, { Component } from 'react';

import LoginPage from './LoginPage.js'

class LoginButton extends Component {
    constructor(props) {
        super(props);
    }

    connecte() {
        this.props.setBody("login", <LoginPage setBody={this.props.setBody} serveur={this.props.serveur} setToken={this.props.setToken} />);
    }

    render() {
        return <div id="lien_profil">
            <a onClick={() => this.connecte()}><img src="https://media.spacie.fr/default/pages/sign-in-alt-solid.svg" alt="Login"
                title="Connexion" /></a>
        </div>
    }
}


export default LoginButton

