import React, { Component } from 'react';
import CommenteButton from './reaction/commentaires/CommenteButton'
import StarButton from './reaction/StarButton.js'
import PartagerButton from './reaction/partage/PartagerButton'
import UserInfoDate from '../../general/UserInfoDate'
import SupprimerButton from './reaction/SupprimerButton';
import ModifierButton from './reaction/modifier/ModifierButton';
import NewMessage from './NewMessage';
import Popup from 'reactjs-popup';
import ModifierPage from './reaction/modifier/ModifierPage';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reaction: null
        }

        this.setReaction = this.setReaction.bind(this)
        this.userName = "Fristorm"
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    

    getNombreStars() { return this.props.message.stars }
    getNombreCommentaires() { return this.props.message.commentaires }
    getNombrePartages() { return this.props.message.shars }
    getReaction() { return this.state.reaction }
    setReaction(reaction) {
        this.setState({ reaction: reaction })
    }
    render() {

        return <article className="message">
            <UserInfoDate serveur={this.props.serveur} user={this.props.message.sender} setPage={this.props.setPage} date={this.props.message.date} heure={this.props.message.heure} />
            <div className="message_textuel">{this.props.message.text}</div>
            {this.props.message.image && <img style={{ width: '100%' }} src={this.props.message.image} alt=""></img>}
            <div className="message_buttons">
                <div className="reaction_message">
                    <StarButton serveur={this.props.serveur} setPage={this.props.setBody} message={this.props.message} setBody={this.props.setBody} />
                    <span>{this.getNombreStars()} </span>
                </div>

                {!this.props.comment ?
                    <div className="reaction_message">
                        <CommenteButton serveur={this.props.serveur} setBody={this.props.setBody} message={this.props.message} setReaction={this.setReaction} />
                        
                        
                        <span>{this.getNombreCommentaires()} </span>
                    </div>
                    : ""
                }

                <div className="reaction_message">
                    {this.userName === this.props.message.sender.nickName ?
                        <SupprimerButton  setBody={this.props.setBody}/>
                        : !this.props.comment ? <PartagerButton  setBody={this.props.setBody} message={this.props.message}  />
                            : ""
                    }
                    {this.userName !== this.props.message.sender.nickName && !this.props.comment && <span>{this.getNombrePartages()} </span>}
                </div>

                <div className="reaction_message">
                    {this.userName === this.props.message.sender.nickName && <ModifierButton setBody={this.props.setBody} message={this.props.message} setReaction={this.setReaction}/>}

                </div>
                


            </div>

            {this.getReaction()}

        </article >
    }
}

export default Message