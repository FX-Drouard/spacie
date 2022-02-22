import React, { Component } from 'react';

class Jaime extends Component {
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
        return <input type="button" onClick={event => { this.aimerPublication() }} id="aimer" name="Star" value="Star" style={{ color: this.isLiked ? "green" : "" }} />

    }
}

export default Jaime
