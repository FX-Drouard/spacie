import React, { Component } from 'react';
import Commente from '../../../boutons/Commente.js'
import Jaime from '../../../boutons/Jaime.js'
import Partager from '../../../boutons/Partager.js'
import MessageUserInfo from "./MessageUserInfo.js"
import MessageDate from "./MessageDate.js"

class Message extends Component {
    constructor(props) {
        super(props);
    }

    commentairePublication(event) {
        this.props.setPage(<Commente token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} message={this.props.message} />)
    }

    partgerPublication(event) {
        this.props.setPage(<Partager token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} message={this.props.message} />)
    }


    render() {
        return <article className="commentaire">
            <div className="message_user_info">
                <MessageUserInfo token={this.props.token} serveur={this.props.serveur} message={this.props.message} setPage={this.setPage} />
                {/* <p className="message_date">{this.props.message.getDate()}</p> */}
                <p className="message_date">Le 02/02/2022 à 22:22</p>
            </div>
            <p className="commentaire_textuel">{this.props.message.text}</p>
            <div className="message_button">
                <Jaime token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} message={this.props.message} />
                <input type="button" onClick={event => { this.commentairePublication(event) }} id="commentaire" name="Commentaire" value="Commentaire" />
                <input type="button" onClick={event => { this.partgerPublication(event) }} id="add_new_message" name="Partager" value="Partager" />
            </div>
        </article>
    }
}

export default Message