import React, { Component } from 'react';
import Message from './Message.js'
class MessageList extends Component {
    constructor(props) {
        super(props);
    }

    getMessages() {
        if (this.props.token === "" && this.props.user == null)
            return this.props.serveur.getAleatoireMessages();

        if (this.props.profil)
            return this.props.serveur.getMessageUser(this.props.token);

        return this.props.serveur.getMessages(this.props.token);
    }

    render() {
        return (
            <section id="liste_commentaire">
                {/* {
                    this.getMessages().map((message) => <Message token={this.props.token} serveur={this.props.serveur} setPage={this.setPage}  message={message} />)
                } */}

                <Message token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} message={{ idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }} />
                <Message token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} message={{ idMessage: 1, text: "hoho", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }} />

            </section>)
    }
}

export default MessageList