import React, { Component } from 'react';
import CommenteButton from './reaction/commentaires/CommenteButton'
import Star from './reaction/StarPage.js'
import PartagerButton from './reaction/partage/PartagerButton'
import UserInfoDate from '../../general/UserInfoDate'
import SupprimerButton from './reaction/SupprimerButton';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reaction: ""
        }
        this.reaction = null
        this.setReaction = this.setReaction.bind(this)
        this.userName = "fristorm"
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


            <UserInfoDate serveur={this.props.serveur} user={this.props.message.sender} setPage={this.props.setPage} date={this.props.message.date} heure={this.props.message.heure} />
            <div className="message_textuel">{this.props.message.text}</div>
            {this.props.message.image && <img src={this.props.message.image} alt=""></img>}
            <div className="message_buttons">
                <div className="reaction_message">
                    <Star serveur={this.props.serveur} setPage={this.props.setBody} message={this.props.message} setBody={this.props.setBody} />
                    <span>{this.getNombreStars()} </span>
                </div>

                {!this.props.comment ?
                    <div className="reaction_message">
                        <CommenteButton serveur={this.props.serveur} setBody={this.props.setBody} message={this.props.message} setReaction={this.setReaction} />
                        <span>{this.getNombreStars()} </span>
                    </div>
                    : ""
                }


                <div className="reaction_message">
                    {this.userName == this.props.message.sender.nickName ?
                        <SupprimerButton serveur={this.props.serveur} />
                        : !this.props.comment ? <PartagerButton serveur={this.props.serveur} setBody={this.props.setBody} message={this.props.message} setReaction={this.setReaction} />
                            : ""
                    }
                    {this.userName != this.props.message.sender.nickName && !this.props.comment && <span>{this.getNombreStars()} </span>}
                </div>
            </div>

            {this.getReaction()}
            {console.log(document.cookie)}
        </article >
    }
}

export default Message