import React, { Component } from 'react';
import ProfilList from './profil/ProfilList';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.token = document.cookie.split(";").find(it => it.includes("token=")).split("=")[1]
    }

    render() {

        let user = { login: "Palifen", mail: "fristorm@mail.spacie.fr", nickName: "fristorm", creationDate: "2022-02-24", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }
        let resultat = [user, user, user, user, user, user]


        return <nav>
            {this.token ?
                <ProfilList serveur={this.props.serveur} setPage={this.props.setPage} setBody={this.props.setBody} resultat={resultat} />
                : ""
            }
        </nav>
    }
}

export default Nav