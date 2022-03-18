import React, { Component } from 'react';

class MessageDate extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <p className="message_date"> {this.props.date} {this.props.heure}</p>

    }
}

export default MessageDate