import React, { Component } from 'react';
import ListeAmis from './ListeAmis';

class AmiPage extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        let user = { login: "Palifen", mail: "fristorm@mail.spacie.fr", nickName: "fristorm", creationDate: "2022-02-24", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }
        let resultat = [user, user, user, user, user, user]


        return (
            <div className="millieu">
                <ListeAmis serveur={this.props.serveur} user={resultat} setPage={this.props.setPage} />
            </div>
        );
    }
}

export default AmiPage;