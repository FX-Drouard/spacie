import React, { Component } from 'react';
import Accueil from './main/pages/accueil/Accueil.js';
import Recherche from './main/pages/Recherche.js';
import Notification from './main/pages/Notification.js';
import LoginButton from './main/pages/login/Login.js';
import Profil from './main/pages/profil/Profil.js'
import Nav from './main/pages/Nav.js';
import ListeAmis from './main/amis/ListeAmis.js'
import ListeAmisConnecte from './main/amis/ListeAmisConnecte.js';
import ListeMessagePrive from './main/pages/ListeMessagePrive.js'


class Main extends Component {
    constructor(props) {
        super(props)
        this.setPage = this.setPage.bind(this)
        // this.props.serveur = new Serveur()
        this.state = {
            page: "0"
        }
        this.pages = []
        this.setPage(<Accueil token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)
    }

    setPage(cl) {
        this.pages.push(cl)
        this.setState({ page: this.pages.indexOf(cl) })
    }

    getPage() {
        return this.pages[this.state.page]
    }

    render() {
        return (
            <div >
                <header>
                    <div id="logo">
                        <div id="header"><div id="logo" >
                            <img src="https://media.spacie.fr/default/pages/icon.png" alt="logo" width="128" height="128" /></div >
                            <div id="title">
                                <p>Spacie</p>
                            </div>
                        </div >
                    </div>
                    <div id="onglet">
                        <span id="onglet_recherche" onClick={() => this.setPage(<Accueil token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}>Accueil</span>
                        <span id="onglet_publication" onClick={() => this.setPage(<Recherche token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}>Recherche</span>
                        <span id="onglet_notification" onClick={() => this.setPage(<Notification token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}>Notification</span>
                        <span id="onglet_amis" onClick={() => this.setPage(<ListeAmis token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}>Amis</span>
                        <span id="onglet_amis" onClick={() => this.setPage(<ListeMessagePrive token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}>Message</span>
                    </div>
                    <div id="lien_profil">
                        {this.props.token === "" ? <LoginButton setToken={this.props.setToken} serveur={this.props.serveur} setBody={this.props.setBody} /> : <Profil token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />}
                    </div>
                </header>
                <div id="corps">
                    <nav>
                        <Nav serveur={this.props.serveur} />
                    </nav>
                    <div className="message">
                        {this.getPage()}
                    </div>
                    <aside>
                        <ListeAmisConnecte token={this.props.token} serveur={this.props.serveur} />
                    </aside>

                </div>
            </div>
        )
    }

}


export default Main