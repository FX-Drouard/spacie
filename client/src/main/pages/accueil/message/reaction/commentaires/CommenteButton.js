import React, { Component } from 'react';
import LoginPage from '../../../../login/LoginPage.js';
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
        this.props.setReaction(<CommentePage setBody={this.props.setBody} serveur={this.props.serveur} setToken={this.props.setToken} message={this.props.message} />)

    }
    render() {
        return <div className="message_button" onClick={event => { this.commentairePublication() }}><img src="https://media.spacie.fr/default/pages/svg/comment.svg" alt="Commenter" /></div>
    }
}

export default CommenteButton;