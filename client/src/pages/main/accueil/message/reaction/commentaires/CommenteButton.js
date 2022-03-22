import React, { Component } from 'react';
import LoginPage from '../../../../../login/LoginPage.js';
import CommentePage from './CommentePage.js'
class CommenteButton extends Component {
    constructor(props) {
        super(props);
    }

    commentairePublication() {
        if (this.props.token === "") {
            this.props.setBody(<LoginPage setBody={this.props.setBody} serveur={this.props.serveur} setToken={this.props.setToken} />)
            return
        }


    }
    render() {
        return <div className="message_button fa-solid fa-comment-dots fa-xl" onClick={event => { this.commentairePublication() }}></div>
    }
}

export default CommenteButton;