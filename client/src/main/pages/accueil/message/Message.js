import React, { Component } from 'react';
import CommenteButton from './reaction/commentaires/CommenteButton'
import Star from './reaction/StarPage.js'
import PartagerButton from './reaction/PartagerButton.js'
import MessageUserInfo from "./MessageUserInfo.js"
import MessageDate from "./MessageDate.js"

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
            <div className="message_user_info">
                <MessageUserInfo token={this.props.token} serveur={this.props.serveur} message={this.props.message} setPage={this.setPage} />
                {/* <p className="message_date">{this.props.message.getDate()}</p> */}
                <p className="message_date">Le 02/02/2022 à 22:22</p>
            </div>
            <div className="message_textuel">{this.props.message.text}</div>

            <div className="message_buttons">
                <div className="reaction_message">
                    <Star token={this.props.token} serveur={this.props.serveur} setPage={this.props.setBody} message={this.props.message} />
                    <span>{this.getNombreStars()} star</span>
                </div>
                <div className="reaction_message">
                    <CommenteButton token={this.props.token} serveur={this.props.serveur} setBody={this.props.setBody} message={this.props.message} setReaction={this.setReaction} />
                    <span>{this.getNombreStars()} commantaire</span>
                </div>
                <div className="reaction_message">
                    <PartagerButton token={this.props.token} serveur={this.props.serveur} setBody={this.props.setBody} message={this.props.message} setReaction={this.setReaction} />
                    <span>{this.getNombreStars()} partage</span>
                </div>
            </div>

            {this.getReaction()}
        </article>
    }
}

export default Message