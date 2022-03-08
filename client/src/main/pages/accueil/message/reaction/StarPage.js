import React, { Component } from 'react';

class Star extends Component {
    constructor(props) {
        super(props);
        // this.isLiked = this.props.serveur.isLiked(this.props.idMessage, this.props.token)
        this.isLiked = true;
    }

    aimerPublication() {
        if (this.props.token === "")
            return
        this.isLiked = this.props.serveur.likeMessage(this.props.idMessage, this.props.token)
    }

    render() {
        return <div className="message_button" onClick={event => { this.aimerPublication() }} style={{ color: this.isLiked ? "green" : "" }} ><img src="https://media.spacie.fr/default/pages/svg/star.svg" alt="Star" /></div>

    }
}

export default Star
