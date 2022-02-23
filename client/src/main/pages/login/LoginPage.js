import React, { Component } from 'react';

import Main from '../../../Main.js'
import SignIn from './SignIn.js'
import '../../../assets/css/login.css'


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.login = ""
        this.password = ""
    }

    connecte() {
        let token = this.props.serveur.getConnection(this.login, this.password)
        if (token === "") return
        this.props.setToken(token);
        this.props.setBody(<Main setToken={this.props.setToken} serveur={this.props.serveur} setBody={this.props.setBody} token={token} />)
    }

    gotoSignIn() {
        this.props.setBody(<SignIn setToken={this.props.setToken} serveur={this.props.serveur} setBody={this.props.setBody} />)
    }

    gotoAccueil() {
        this.props.setBody(<Main setToken={this.props.setToken} serveur={this.props.serveur} setBody={this.props.setBody} token="" />)
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
                <div className="text">
                    <input type="text" name="Login" placeholder="Login" maxLength="30" ref={this.login} />
                </div>
                <div className="text">
                    <input type="password" name="password" placeholder="password" maxLength="30" ref={this.password} />
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