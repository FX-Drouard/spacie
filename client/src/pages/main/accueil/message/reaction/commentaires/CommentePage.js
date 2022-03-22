import React, { Component } from 'react';
import NewMessage from '../../NewMessage';
import Commentaires from './Commantaires';
class CommentePage extends Component {
    constructor(props) {
        super(props);

    }
    getCommentsOfMessage() {
        // return this.props.serveur.getCommentsOfMessage(this.props.message);
        return [{ idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }, { idMessage: 1, text: "hoha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }, { idMessage: 1, text: "hahi", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }, { idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }]
    }
    render() {
        return <div className="commentaires">
            <NewMessage token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} erreur={this.props.erreur} message={this.props.message} />
            <Commentaires setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} resultat={this.getCommentsOfMessage()} />
        </div>

    }


}

export default CommentePage;