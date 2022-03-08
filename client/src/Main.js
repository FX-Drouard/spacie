import React, { Component } from 'react';
import Accueil from './main/pages/accueil/Accueil.js';
import Recherche from './main/pages/recherche/Recherche.js';
import Notification from './main/pages/Notification.js';
import LoginButton from './main/pages/login/LoginButton.js';
import Profilbutton from './main/pages/profil/ProfilButton.js'
import Nav from './main/pages/Nav.js';
import ListeAmis from './main/amis/ListeAmis.js'
import ListeAmisConnecte from './main/amis/ListeAmisConnecte.js';
import ListeMessagePrive from './main/pages/ListeMessagePrive.js'
import './assets/css/index.css'

class Main extends Component {
    constructor(props) {
        super(props)
        this.setPage = this.setPage.bind(this)
        // this.props.serveur = new Serveur()
        this.state = {
            page: "0"
        }
        this.pages = <Accueil setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />
    }

    setPage(cl) {
        this.pages = cl
        this.setState({ page: Math.random() * 100 })
    }

    getPage() {
        return this.pages
    }

    render() {
        return (
            <div id="mainPage">
                <header>
                    <div id="logo">
                        <div id="header_main"><div id="logo" >
                            <img src="https://media.spacie.fr/default/pages/icon.png" alt="logo" width="128" height="128" /></div >
                            <div id="title">
                                <p>Spacie</p>
                            </div>
                        </div >
                    </div>
                    <div id="onglet">
                        <span id="onglet_recherche" onClick={() => this.setPage(<Accueil token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}><img src="https://media.spacie.fr/default/pages/svg/home.svg" alt="Acceuil" /></span>
                        <span id="onglet_publication" onClick={() => this.setPage(<Recherche token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}><img src="https://media.spacie.fr/default/pages/svg/search.svg" alt="Recherche" /></span>
                        <span id="onglet_notification" onClick={() => this.setPage(<Notification token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}><img src="https://media.spacie.fr/default/pages/svg/bell.svg" alt="Notification" /></span>
                        <span id="onglet_amis" onClick={() => this.setPage(<ListeAmis token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}><img src="https://media.spacie.fr/default/pages/svg/friendlist.svg" alt="Ami" /></span>
                        <span id="onglet_amis" onClick={() => this.setPage(<ListeMessagePrive token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}><img src="https://media.spacie.fr/default/pages/svg/dm.svg" alt="Message" /></span>
                    </div>
                    <div id="lien_profil">
                        {this.props.token === "" ?
                            <LoginButton setToken={this.props.setToken} serveur={this.props.serveur} setBody={this.props.setBody} />
                            : <Profilbutton token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />}
                    </div>
                </header>
                <div id="corps">
                    <Nav serveur={this.props.serveur} />
                    {this.getPage()}
                    <ListeAmisConnecte token={this.props.token} serveur={this.props.serveur} />
                </div>

            </div>
        )
    }

}


export default Main