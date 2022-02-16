import React, { Component } from 'react';
import NewMessage from './message/NewMessage.js';
import MessageList from './message/MessagesList.js';
class Accueil extends Component {
    constructor(props) {
        super(props);
    }

    getNewMessageComponent() {
        if (this.props.token != "") {
            return <NewMessage token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} erreur={this.props.erreur} />

        }
    }

    render() {
        return <div class="message">
            {this.getNewMessageComponent()}
            <MessageList token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />
        </div>
    }
}

export default Accueil