import React, { Component } from 'react';

import Main from '../../../Main.js'
import SignIn from './SignIn.js'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.login = ""
        this.password = ""
    }

    connecte() {
        let token = this.props.serveur.getConnection(this.login, this.password)
        if (token === "") return

        this.props.setToken(token);
        this.props.setBody("main", <Main setToken={this.props.setToken} serveur={this.props.serveur} setBody={this.props.setBody} token={token} />)

    }

    gotoSignIn() {
        this.props.setBody("login", <SignIn setToken={this.props.setToken} serveur={this.props.serveur} setBody={this.props.setBody} token={this.props.token} />)
    }

    gotoAccueil() {
        this.props.setBody("main", <Main setToken={this.props.setToken} serveur={this.props.serveur} setBody={this.props.setBody} token={this.props.token} />)
    }

    render() {
        return <div>

            <header>
                <div id="header">
                    <div id="logo" >
                        <img src="https://media.spacie.fr/default/pages/icon.png" alt="logo" width="128" height="128" />
                    </div >
                    <div id="title"><p>Spacie</p></div>
                </div >
            </header>
            <section>
                <div id="block_con">
                    <h2 id="titre_con">Log in</h2>
                    <div className="text">
                        <input type="text" name="Login" placeholder="Login" maxlength="30" ref={this.login} />
                    </div>
                    <div className="text">
                        <input type="password" name="password" placeholder="password" maxlength="30" ref={this.password} />
                    </div>
                    <div className="button">
                        <input type="button" onClick={() => this.connecte()} name="Connexion" value="Connexion" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div id="lien">
                            <a href="" onClick={() => this.gotoSignIn()}>Inscription</a>
                        </div>
                        <div id="lien">
                            <a href="" onClick={() => this.gotoAccueil()}>Accueil</a>
                        </div>
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