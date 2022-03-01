import React, { Component } from 'react';
import PublierPhoto from './action nouveau message/PublierPhoto.js';
import PublierVideo from './action nouveau message/PublierPhoto.js';
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

    sendPhoto(event) {
        this.props.setPage(<PublierPhoto token={this.state.token} serveur={this.serveur} setPage={this.setPage} />)
    }

    sendVideo(event) {
        this.props.setPage(<PublierVideo token={this.state.token} serveur={this.serveur} setPage={this.setPage} />)
    }

    render() {
        return (
            <section id="new_message">
                <textarea ref={this.publication} name="commentaire" placeholder="votre vie" />
                <div id="button_new_message">
                    <input type="button" onClick={event => { this.sendPhoto(event) }} id="new_image" name="image" value="Photo" />
                    <input type="button" onClick={event => { this.sendVideo(event) }} id="new_video" name="video" value="Video" />
                    <input type="button" onClick={event => { this.sendMessage(event) }} id="add_new_message" name="Publier" value="Publier" />
                </div>
                <div className="erreur">{this.props.erreur}</div>
            </section>
        )
    }
}

export default NewMessage;