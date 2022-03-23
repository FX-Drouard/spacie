import React, { Component } from 'react';
import LoginButton from '../../login/LoginButton';
import LoginPage from '../../login/LoginPage';
import Accueil from '../accueil/Accueil';
import AmiPage from '../listeAmis/AmiPage';
import NotificationPage from '../notification/NotificationPage';
import ProfilButton from '../profil/ProfilButton';
import Recherche from '../recherche/Recherche';
import HeaderItem from './HeaderItem';

class Header extends Component {
    constructor(props) {
        super(props)
        this.setPage = this.props.setPage
        this.token = document.cookie.split(";").find(it => it.includes("token=")).split("=")[1]
        console.log(this.token)

    }
    render() {
        return (
            <header>
                <div id="logo">
                    <div id="header_main">
                        <div id="logo_image" >
                            <img src="https://media.spacie.fr/default/pages/icon.png" alt="logo" width="128" height="128" />
                        </div >
                        <span id="title">
                            Spacie
                        </span>
                    </div >
                </div>
                <div id="onglet">
                    <HeaderItem onClick={() => this.setPage(<Accueil setBody={this.props.setBody} serveur={this.props.serveur} setPage={this.setPage} />)} image="https://media.spacie.fr/default/pages/svg/home.svg" nom="Acceuil" />
                    <HeaderItem onClick={() => this.setPage(<Recherche setBody={this.props.setBody} serveur={this.props.serveur} setPage={this.setPage} />)} image="https://media.spacie.fr/default/pages/svg/search.svg" nom="Rechercher" />
                    <HeaderItem onClick={() => {
                        this.token != "" ?
                            this.setPage(<NotificationPage serveur={this.props.serveur} setPage={this.setPage} />) :
                            this.props.setBody(<LoginPage setBody={this.props.setBody} serveur={this.props.serveur} />)
                    }} image="https://media.spacie.fr/default/pages/svg/bell.svg" nom="Notification" />

                    <HeaderItem onClick={() => {
                        this.token != "" ?
                            this.setPage(<AmiPage setBody={this.props.setBody} serveur={this.props.serveur} setPage={this.setPage} />) :
                            this.props.setBody(<LoginPage setBody={this.props.setBody} serveur={this.props.serveur} />)
                    }} image="https://media.spacie.fr/default/pages/svg/friendlist.svg" nom="Ami" />


                </div>
                <div id="lien_profil">
                    {console.log("haha", this.token)}
                    {this.token == "" ?
                        <LoginButton serveur={this.props.serveur} setBody={this.props.setBody} />
                        : <ProfilButton setBody={this.props.setBody} serveur={this.props.serveur} setPage={this.setPage} />}
                </div>
            </header>
        );
    }
}

export default Header;