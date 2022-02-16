import React, { Component } from 'react';

class MessageDate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // return  <p className="message_date">{this.props.serveur.getInfoMessage(this.props.idMessage).getDate()}</p>
        return <p className="message_date">Le 02/02/2022 à 22:22</p>

    }
}

export default MessageDate