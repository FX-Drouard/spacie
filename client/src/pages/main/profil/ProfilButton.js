import React, { Component } from 'react';
import Profil from './Profil.js';

class ProfilButton extends Component {
    constructor(props) {
        super(props)
    }

    gotoProfil() {
        // TODO
        this.props.setPage(<Profil setBody={this.props.setBody} serveur={this.props.serveur} setPage={this.setPage} user={{ login: "Palifen", mail: "fristorm@spacie.fr", nickName: "fristorm", creationDate: "2022-02-24", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png", date: { jour: "01", mois: "04", annee: "2000" }, biographie: "etudiant a la sorbonne universite", followers: "100", followings: "500", messages: "5", stars: "70" }} />)
    }

    render() {

        return <div id="lien_profil">

            <span onClick={() => this.gotoProfil()}><img src="https://media.spacie.fr/Profil/Fristorm/pdp.png" alt="photo de profil" /></span>

        </div>

    }

}


export default ProfilButton