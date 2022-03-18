import React, { Component } from 'react';
// import '../../../assets/css/login.css'
import LoginPage from './LoginPage.js'

class LoginButton extends Component {
    constructor(props) {
        super(props);
    }

    connecte() {
        this.props.setBody(<LoginPage setBody={this.props.setBody} serveur={this.props.serveur} setToken={this.props.setToken} />);
    }

    render() {
        return <div id="lien_profil">
            <span onClick={() => this.connecte()}><img src="https://media.spacie.fr/default/pages/svg/sign-in-alt-solid.svg" alt="Login"
                title="Connexion" /></span>
        </div>
    }
}


export default LoginButton

