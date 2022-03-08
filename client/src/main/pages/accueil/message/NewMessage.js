import React, { Component } from 'react';
import Media from './action nouveau message/Media.js';

import Accueil from '../Accueil.js'
class NewMessage extends Component {
    constructor(props) {
        super(props);
        this.publication = null
        this.erreur = ""
    }

    sendMessage(event) {
        if (!(this.publication === null || this.publication === "")) {
            this.erreur = this.props.serveur.sendMessage(this.publication, this.props.token, this.props.message)
            this.props.setPage(<Accueil token={this.state.token} serveur={this.serveur} setPage={this.setPage} erreur={this.erreur} />)
        }
    }

    sendMedia(event) {
        this.props.setPage(<Media token={this.state.token} serveur={this.serveur} setPage={this.setPage} />)
    }


    render() {
        return (
            <section id="new_message">
                <textarea ref={this.publication} name="commentaire" placeholder="votre vie" />
                <div className="button_new_message">

                    <input type="button" onClick={event => { this.sendMedia(event) }} id="new_video" name="Media" value="Media" />
                    <input type="button" onClick={event => { this.sendMessage(event) }} id="add_new_message" name="Publier" value="Publier" />
                </div>
                <div className="erreur">{this.props.erreur}</div>
            </section>
        )
    }
}

export default NewMessage;