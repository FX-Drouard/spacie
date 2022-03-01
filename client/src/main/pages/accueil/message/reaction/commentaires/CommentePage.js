import React, { Component } from 'react';
import NewMessage from '../../NewMessage';
import Commentaires from './Commantaires';
class CommentePage extends Component {
    constructor(props) {
        super(props);
        this.visible = false
    }

    render() {
        this.visible = !this.visible
        if (this.visible)
            return <div className="commentaires">
                <NewMessage token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} erreur={this.props.erreur} message={this.props.message} />
                <Commentaires setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />
            </div>
        return <div></div>
    }


}

export default CommentePage;