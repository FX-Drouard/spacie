import React, { Component } from 'react';
import NewMessage from './message/NewMessage.js';
import MessageList from './message/MessagesList.js';
class Accueil extends Component {
    constructor(props) {
        super(props);
        this.getMessages = this.getMessages.bind(this)
    }

    getMessages() {
        // if (this.props.token === "" && this.props.user == null)
        //     return this.props.serveur.getAleatoireMessages();

        // if (this.props.profil)
        //     return this.props.serveur.getMessageUser(this.props.token);

        // return this.props.serveur.getMessages(this.props.token);
        let resultat = [{ idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, date: "22/02/2022", heure: "22:22" }, { idMessage: 1, text: "hoha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, date: "22/02/2022", heure: "22:22" },
        { idMessage: 1, text: "hahi", sender: { nickName: "stom", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, date: "22/02/2022", heure: "22:22" },
        { idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, date: "22/02/2022", heure: "22:22" }]
        return resultat
    }
    getNewMessageComponent() {
        if (this.props.token != "") {
            return <NewMessage token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} erreur={this.props.erreur} setBody={this.props.setBody} />

        }
    }

    render() {
        return <div className="millieu">
            {this.getNewMessageComponent()}

            <MessageList setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.props.setPage} resultat={this.getMessages()} />

        </div>
    }
}

export default Accueil