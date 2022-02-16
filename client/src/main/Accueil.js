import React, { Component } from 'react';
import NewMessage from './NewMessage.js';
import MessageList from './MessageList.js';
class Accueil extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div class="message">
            {
                this.props.token != "" ?
                    <NewMessage token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} /> : ""}
            <MessageList token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />
        </div>
    }
}

export default Nav