import React, { Component } from 'react';
import '../../../assets/css/login.css'
import Main from '../../../Main.js'
import LoginPage from './LoginPage'
class SignUp extends Component {
    constructor(props) {
        super(props);
    }
    gotoConnection() {
        this.props.setBody(<LoginPage setToken={this.props.setToken} serveur={this.props.serveur} setBody={this.props.setBody} token={this.props.token} />)
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

                <h2 id="titre_con">SignUp</h2>
                <div className="text">
                    <input type="text" name="login" placeholder="login: Fristorm" maxLength="30"
                        alt="le login doit avoir que des lettres et des chiffres" />
                </div>
                <div className="date_naissence">
                    <div className="date">
                        <input type="text" name="prenom" placeholder="Jour" maxlength="2" />
                    </div>
                    <div className="date">
                        <input type="text" name="nom" placeholder="mois" maxLength="2" />
                    </div>
                    <div className="date">
                        <input type="text" name="nom" placeholder="annee" maxLength="2" />
                    </div>
                </div>

                <div className="text">
                    <input type="text" name="Email" placeholder="email : email@domain.tln/" maxLength="30" />
                </div>
                <div className="text">
                    <input type="password" name="Mot de Passe" placeholder="Votre mot de passe" maxlength="30" />
                </div>
                <div className="text">
                    <input type="password" name="Confirmez le mot de passe" placeholder="Confirmez votre mot de passe"
                        maxlength="30" />
                </div>
                <br />
                <div className="h-captcha" data-sitekey="5ecff875-84d2-42d0-939c-32fe8d536fb0"></div>
                <div className="button">
                    <input type="submit" name="Enregistre" value="Envoyer" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="lien">
                        <span onClick={(event) => { this.gotoAccueil(); event.stopPropagation() }}>Accueil</span>
                    </div>
                    <div className="lien">
                        <span onClick={(event) => { this.gotoConnection(); event.stopPropagation() }}>Connexion</span>
                    </div>
                </div>
            </section >

        </div >
    }
}

export default SignUp