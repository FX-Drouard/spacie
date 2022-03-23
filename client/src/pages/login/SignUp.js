import React, { Component } from 'react';
import '../../assets/css/login.css'
import Main from '../main/Main.js'
import LoginPage from './LoginPage'
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { messageErreur: "login et mot de passe sont incorrects" }
        this.login = ""
        this.jour = 0
        this.mois = 0
        this.annee = 0
        this.email = ""
        this.motDePasse = ""
        this.confPassword = ""
    }
    gotoConnection() {
        this.props.setBody(<LoginPage setToken={this.props.setToken} serveur={this.props.serveur} setBody={this.props.setBody} token={this.props.token} />)
    }

    gotoAccueil() {
        this.props.setBody(<Main setToken={this.props.setToken} serveur={this.props.serveur} setBody={this.props.setBody} token="" />)
    }

    getErreur() {
        return <div className="erreur" style={{ color: "white", backgroundColor: "red", maxLength: "30px", fontWeight: "bold" }}><span>{this.state.messageErreur}</span></div>
    }

    signUp() {

        const regEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")
        const regNum = new RegExp("[0-9]+")
        if (this.motDePasse == "" || this.confPassword == "" || this.login == "" || this.annee == "" || this.jour == "" || this.mois == "" || this.email == "") {
            this.setState({ messageErreur: "un des champs est vide, veuillez remplir tout les champs" })
            return;
        }
        if (!(regNum.test(this.annee) && regNum.test(this.jour) && regNum.test(this.mois))) {
            this.setState({ messageErreur: "date de date naissence invalide" })
            return;
        }

        if (!regEmail.test(this.email)) {
            this.setState({ messageErreur: "date de date naissence invalide" })
            return;
        }
        if (this.motDePasse != this.confPassword) {
            this.setState({ messageErreur: "le mot de passe de confirmation est different du mot de passe" })
            return;
        }



        this.props.serveur.post("/api/auth/signup",
            {
                login: this.login,
                date: { jour: this.jour, mois: this.mois, annee: this.annee },
                email: this.email,
                motDePasse: this.motDePasse
            }
        ).then((res) => {
            this.props.setBody(<Main serveur={this.props.serveur} setBody={this.props.setBody} />)
        }
        ).catch((err) => {
            this.setState({ messageErreur: err.message })
        })

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
                {this.getErreur()}
                <div className="text">
                    <input type="text" name="login" placeholder="login: Fristorm" maxLength="30"
                        alt="le login doit avoir que des lettres et des chiffres" onChange={event => this.login = event.target.value} />
                </div>
                <div className="date_naissence">
                    <div className="date">
                        <input type="number" name="prenom" placeholder="Jour" maxLength="2" onChange={event => this.jour = event.target.value} ref={this.jour} />
                    </div>
                    <div className="date">
                        <input type="number" name="nom" placeholder="mois" maxLength="2" onChange={event => this.mois = event.target.value} />
                    </div>
                    <div className="date">
                        <input type="number" name="nom" placeholder="annee" maxLength="2" onChange={event => this.annee = event.target.value} />
                    </div>
                </div>

                <div className="text">
                    <input type="email" name="Email" placeholder="email : email@domain.tln/" maxLength="30" onChange={event => this.email = event.target.value} />
                </div>
                <div className="text">
                    <input type="password" name="Mot de Passe" placeholder="Votre mot de passe" maxLength="30" onChange={event => this.motDePasse = event.target.value} />
                </div>
                <div className="text">
                    <input type="password" name="Confirmez le mot de passe" placeholder="Confirmez votre mot de passe"
                        maxLength="30" onChange={event => this.confPassword = event.target.value} />
                </div>
                <br />
                <div className="h-captcha" data-sitekey="5ecff875-84d2-42d0-939c-32fe8d536fb0"></div>
                <div className="button">
                    <input type="submit" name="Enregistre" value="Envoyer" onClick={() => this.signUp()} />
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