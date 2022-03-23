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
import Header from './header/Header.js';

class Main extends Component {
    constructor(props) {
        super(props)
        this.setPage = this.setPage.bind(this)
        this.state = {
            page: null
        }

    }

    componentWillMount() {
        this.setPage(<Accueil setBody={this.props.setBody} serveur={this.props.serveur} setPage={this.setPage} />)
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
                <Header serveur={this.props.serveur} setPage={this.setPage} setBody={this.props.setBody} />
                <div id="corps">
                    <Nav serveur={this.props.serveur} setPage={this.setPage} setBody={this.props.setBody} />
                    {this.getPage()}
                    <aside></aside>
                </div>

            </div>
        )
    }

}


export default Main