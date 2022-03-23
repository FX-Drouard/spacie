import React, { Component } from 'react';

import Main from '../main/Main.js'
import SignUp from './SignUp.js'
import '../../assets/css/login.css'


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.login = ""
        this.password = ""
        this.state = { messageErreur: "login et mot de passe sont incorrects" }
    }

    connecte() {
        let result = this.props.serveur.post("/auth/login/", { login: this.login, password: this.password })
        if (result.etat == "200") {
            this.props.setBody(<Main serveur={this.props.serveur} setBody={this.props.setBody} />)
            return
        }
        this.setState({ messageErreur: result.message })

    }

    gotoSignIn() {
        this.props.setBody(<SignUp setToken={this.props.setToken} serveur={this.props.serveur} setBody={this.props.setBody} />)
    }

    gotoAccueil() {
        this.props.setBody(<Main setToken={this.props.setToken} serveur={this.props.serveur} setBody={this.props.setBody} token="" />)
    }

    getErreur() {
        return <div className="erreur" ><span>{this.state.messageErreur}</span></div>
    }
    render() {
        return <div id="login">
            <header>
                <div id="header_login">
                    <div id="logo" >
                        <img src="https://media.spacie.fr/default/pages/icon.png" alt="logo" width="128" height="128" />
                    </div >
                    <div id="title"><p>Spacie</p></div>
                </div >
            </header>
            <section id="block_con">

                <h2 id="titre_con">Log in</h2>

                {this.getErreur()}

                <div className="text">
                    <input type="text" name="Login" placeholder="Login" maxLength="30" onChange={event => this.login = event.target.value} />
                </div>
                <div className="text">
                    <input type="password" name="password" placeholder="password" maxLength="30" onChange={event => this.password = event.target.value} />
                </div>
                <div className="button">
                    <input type="button" onClick={() => this.connecte()} name="Connexion" value="Connexion" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="lien">
                        <span onClick={(event) => { this.gotoAccueil(); event.stopPropagation(); }}>Accueil</span>
                    </div>
                    <div className="lien">
                        <span href="" onClick={(event) => { this.gotoSignIn(); event.stopPropagation(); }}>Inscription</span>
                    </div>

                </div>

            </section>
            <footer>
                <p>Copyright © 2022 Spacie - Tous droits réservés.</p>

            </footer>
        </div>
    }

}

export default LoginPage