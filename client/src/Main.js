import React, { Component } from 'react';
import Accueil from './main/pages/accueil/Accueil.js';
import Recherche from './main/pages/recherche/Recherche.js';
import NotificationPage from './main/pages/notification/NotificationPage.js';
import LoginButton from './main/pages/login/LoginButton.js';
import Profilbutton from './main/pages/profil/ProfilButton.js'
import Nav from './main/pages/Nav.js';
import ListeAmis from './main/amis/ListeAmis.js'
import ListeAmisConnecte from './main/amis/ListeAmisConnecte.js';
import ListeMessagePrive from './main/pages/messagePrive/ListeMessagePrive.js'
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
                        <div id="header_main">
                            <div id="logo_image" >
                                <img src="https://media.spacie.fr/default/pages/icon.png" alt="logo" width="128" height="128" />
                            </div >
                            <div id="title">
                                <p>Spacie</p>
                            </div>
                        </div >
                    </div>
                    <div id="onglet">
                        <span onClick={() => this.setPage(<Accueil token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}><img src="https://media.spacie.fr/default/pages/svg/home.svg" alt="Acceuil" /></span>
                        <span onClick={() => this.setPage(<Recherche token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}><img src="https://media.spacie.fr/default/pages/svg/search.svg" alt="Recherche" /></span>
                        <span onClick={() => this.setPage(<NotificationPage token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}><img src="https://media.spacie.fr/default/pages/svg/bell.svg" alt="Notification" /></span>
                        <span onClick={() => this.setPage(<ListeAmis token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}><img src="https://media.spacie.fr/default/pages/svg/friendlist.svg" alt="Ami" /></span>
                        <span onClick={() => this.setPage(<ListeMessagePrive token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}><img src="https://media.spacie.fr/default/pages/svg/dm.svg" alt="Message" /></span>
                    </div>
                    <div id="lien_profil">
                        {this.props.token === "" ?
                            <LoginButton setToken={this.props.setToken} serveur={this.props.serveur} setBody={this.props.setBody} />
                            : <Profilbutton token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />}
                    </div>
                </header>
                <div id="corps">
                    <Nav token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} setBody={this.props.setBody} />
                    {this.getPage()}
                    <ListeAmisConnecte token={this.props.token} serveur={this.props.serveur} />
                </div>

            </div>
        )
    }

}


export default Main