import React, { Component } from 'react';
import Accueil from './accueil/Accueil.js';
import Recherche from './recherche/Recherche.js';
import NotificationPage from './notification/NotificationPage.js';
import LoginButton from '../login/LoginButton.js';
import Profilbutton from './profil/ProfilButton.js'
import Nav from './Nav.js';
import '../../assets/css/index.css'
import LoginPage from '../login/LoginPage.js';
import ListeAmis from './listeAmis/ListeAmis.js';
import AmiPage from './listeAmis/AmiPage.js';

class Main extends Component {
    constructor(props) {
        super(props)
        this.setPage = this.setPage.bind(this)
        this.state = {
            page: null
        }

    }

    componentWillMount() {
        this.setPage(<Accueil setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)
    }
    setPage(cl) {

        this.setState({ page: cl })
    }

    getPage() {
        return this.state.page
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
                        <span onClick={() => this.setPage(<Accueil setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}><img src="https://media.spacie.fr/default/pages/svg/home.svg" alt="Acceuil" /></span>
                        <span onClick={() => this.setPage(<Recherche token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}><img src="https://media.spacie.fr/default/pages/svg/search.svg" alt="Recherche" /></span>
                        <span onClick={() => {
                            this.props.token != "" ?
                                this.setPage(<NotificationPage token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />) :
                                this.props.setBody(<LoginPage setBody={this.props.setBody} serveur={this.props.serveur} setToken={this.props.setToken} />)
                        }}>
                            <img src="https://media.spacie.fr/default/pages/svg/bell.svg" alt="Notification" />
                        </span>
                        <span onClick={() => {
                            this.props.token != "" ?
                                this.setPage(<AmiPage token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />) :
                                this.props.setBody(<LoginPage setBody={this.props.setBody} serveur={this.props.serveur} setToken={this.props.setToken} />)
                        }}>
                            <img src="https://media.spacie.fr/default/pages/svg/friendlist.svg" alt="Ami" />
                        </span>
                        {/* <span onClick={() => this.setPage(<ListeMessagePrive token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />)}><img src="https://media.spacie.fr/default/pages/svg/dm.svg" alt="Message" /></span> */}
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
                    <aside></aside>
                </div>

            </div>
        )
    }

}


export default Main