import Message from '../../Message';
import React, { Component } from 'react'

class Commentaires extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <section id="messages">
                {this.props.resultat.map(e => <Message setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} message={{ idMessage: 1, text: "hoho", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }} />)}
            </section>)
    }


}

export default Commentaires