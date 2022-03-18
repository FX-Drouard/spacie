import React, { Component } from 'react';
import CommenteButton from './reaction/commentaires/CommenteButton'
import Star from './reaction/StarPage.js'
import PartagerButton from './reaction/partage/PartagerButton'
import UserInfo from '../../general/UserInfo';
import MessageDate from './MessageDate';
import UserInfoDate from '../../general/UserInfoDate';


class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reaction: ""
        }
        this.reaction = null

        this.setReaction = this.setReaction.bind(this)

    }

    commentairePublication(event) {
        this.props.setPage()
    }

    partgerPublication(event) {
        this.props.setPage()
    }

    getNombreStars() { return 200 }
    getNombreCommentaires() { return 200 }
    getNombrePartages() { return 200 }
    getReaction() { return this.reaction }
    setReaction(reaction) {
        this.reaction = reaction
        this.setState({ reaction: "" })
    }

    render() {
        return <article className="message">
            {/* <div className="message_user_info">
                 <UserInfo token={this.props.token} serveur={this.props.serveur} user={this.props.message.sender} setPage={this.props.setPage} />
               <MessageDate date={this.props.message.date} heure={this.props.message.heure} />
            </div> */}

            <UserInfoDate token={this.props.token} serveur={this.props.serveur} user={this.props.message.sender} setPage={this.props.setPage} date={this.props.message.date} heure={this.props.message.heure} />
            <div className="message_textuel">{this.props.message.text}</div>

            <div className="message_buttons">
                <div className="reaction_message">
                    <Star token={this.props.token} serveur={this.props.serveur} setPage={this.props.setBody} message={this.props.message} />
                    <span>{this.getNombreStars()} </span>
                </div>
                <div className="reaction_message">
                    <CommenteButton token={this.props.token} serveur={this.props.serveur} setBody={this.props.setBody} message={this.props.message} setReaction={this.setReaction} />
                    <span>{this.getNombreStars()} </span>
                </div>
                <div className="reaction_message">
                    <PartagerButton token={this.props.token} serveur={this.props.serveur} setBody={this.props.setBody} message={this.props.message} setReaction={this.setReaction} />
                    <span>{this.getNombreStars()} </span>
                </div>
            </div>

            {this.getReaction()}
        </article >
    }
}

export default Message