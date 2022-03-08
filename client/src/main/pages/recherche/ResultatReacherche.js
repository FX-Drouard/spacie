import React, { Component } from 'react';
import MessageList from '../accueil/message/MessagesList'
import ProfilList from '../profil/ProfilList'
class ResultatReacherche extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // (type, resultat) = this.props.serveur.recherche(this.props.recherche)
        let type = "Message"
        if (type === "")
            return <div id="resultat_recherche">Aucun resultat</div>
        if (type === "Message") {
            let resultat = [{ idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }, { idMessage: 1, text: "hoha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }, { idMessage: 1, text: "hahi", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }, { idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }]

            return <div id="resultat_recherche"><MessageList setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} resultat={resultat} />
            </div>
        }
        let resultat = [{ nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }]

        return <ProfilList token={this.props.token} serveur={this.props.serveur} user={this.props.user} setPage={this.props.setPage} resultat={resultat} setBody={this.props.setBody} />

    }
}

export default ResultatReacherche