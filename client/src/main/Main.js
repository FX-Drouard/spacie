import React, { Component } from 'react';
import Accueil from './Accueil.js';
import Recherche from './Recherche.js';
import Notification from './Notification.js';
import Login from '../login/Login.js';
import Profil from '../profil/Profil.js'
import Nav from './Nav.js';
import ListeAmis from './ListeAmis.js'
import ListeAmisConnecte from './ListeAmisConnecte.js';
import Serveur from '../../../serveur/Serveur.js';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: "",
            page: <Accueil token={this.state.token} seveur={this.serveur} setPage={this.setPage} />
        }
        this.setToken = this.setToken.bind(this)
        this.setPage = this.setPage.bind(this)
        this.serveur = new Serveur()
    }

    setPage(cl) {
        this.setState({ page: cl })
    }

    setToken(tkn) {
        this.setState({ token: tkn })
    }



    render() {
        return (
            <div>
                <header>
                    <div id="logo">
                        <script type="text/javascript" src="js/header.js"></script>
                    </div>
                    <div id="onglet">
                        <span id="onglet_recherche" onClick={() => this.setPage(<Accueil token={this.state.token} seveur={this.serveur} setPage={this.setPage} />)}>Accueil</span>
                        <span id="onglet_publication" onClick={() => this.setPage(<Recherche token={this.state.token} seveur={this.serveur} setPage={this.setPage} />)}>Recherche</span>
                        <span id="onglet_notification" onClick={() => this.setPage(<Notification token={this.state.token} seveur={this.serveur} setPage={this.setPage} />)}>Notification</span>
                        <span id="onglet_amis" onClick={() => this.setPage(<ListeAmis token={this.state.token} seveur={this.serveur} setPage={this.setPage} />)}>Amis</span>
                    </div>
                    <div id="lien_profil">
                        {this.state.token === "" ? <Login token={this.setToken} /> : <Profil token={this.state.token} seveur={this.serveur} />}
                    </div>

                </header>

                <div id="corps">
                    <nav>
                        <Nav seveur={this.serveur} />
                    </nav>
                    <div className="message">
                        {this.state.page}
                    </div>
                    <aside>
                        <ListeAmisConnecte token={this.state.token} seveur={this.serveur} />
                    </aside>

                </div>
            </div>
        )
    }

}