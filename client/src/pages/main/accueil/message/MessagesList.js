import React, { Component } from 'react';
import Message from './Message.js'
class MessageList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="messages">
                {this.props.resultat.map((e, index) => <Message key={index} setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.props.setPage} message={e} />)}

            </section>)
    }
}

export default MessageList