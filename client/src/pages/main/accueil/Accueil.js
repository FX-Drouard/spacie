import React, { Component } from 'react';
import NewMessage from './message/NewMessage.js';
import MessageList from './message/MessagesList.js';
const data = require('../general/Data.js')
class Accueil extends Component {
    constructor(props) {
        super(props);
        this.token = document.cookie.split(";").find(it => it.includes("token=")).split("=")[1]
    }

    getNewMessageComponent() {
        if (this.props.token !== "") {
            return <NewMessage serveur={this.props.serveur} setPage={this.setPage} erreur={this.props.erreur} setBody={this.props.setBody} />
        }
    }

    render() {
        return <div className="millieu">
            {this.getNewMessageComponent()}
            <MessageList setBody={this.props.setBody} serveur={this.props.serveur} setPage={this.props.setPage} resultat={data.getMessages()} />

        </div>
    }
}

export default Accueil