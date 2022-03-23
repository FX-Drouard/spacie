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
            let resultat = [{ idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, date: "22/02/2022", heure: "22:22" }, { idMessage: 1, text: "hoha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, date: "22/02/2022", heure: "22:22" },
            { idMessage: 1, text: "hahi", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, date: "22/02/2022", heure: "22:22" },
            { idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, date: "22/02/2022", heure: "22:22" }]
            return <div id="resultat_recherche">
                <MessageList setBody={this.props.setBody} serveur={this.props.serveur} setPage={this.props.setPage} resultat={resultat} />
            </div>
        }
        let resultat = [{ nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }]

        return <ProfilList serveur={this.props.serveur} user={this.props.user} setPage={this.props.setPage} resultat={resultat} setBody={this.props.setBody} />

    }
}

export default ResultatReacherche