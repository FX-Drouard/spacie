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
        return [{ idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }, { idMessage: 1, text: "hoha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }, { idMessage: 1, text: "hahi", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }, { idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }]
    }
    getNewMessageComponent() {
        if (this.props.token != "") {
            return <NewMessage token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} erreur={this.props.erreur} />

        }
    }

    render() {
        return <div className="millieu">
            {this.getNewMessageComponent()}

            <MessageList setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.props.setPage} resultat={this.getMessages()} />
            <footer>hamid</footer>
        </div>
    }
}

export default Accueil