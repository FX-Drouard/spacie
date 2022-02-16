import React, { Component } from 'react';
import PublierPhoto from './boutons/PublierPhoto.js';
import PublierVideo from './boutons/PublierVideo.js';

class NewMessage extends Component {
    constructor(props) {
        super(props);
    }

    sendMessage(event) {
        if (!(this.refs.message.value === null || this.refs.message.value === "")) {
            serveur.setMessage(this.refs.message.value, this.props.token)
            this.props.setPage(<Accueil token={this.state.token} seveur={this.serveur} setPage={this.setPage} />)
        }
    }

    sendPhoto(event) {
        this.props.setPage(<PublierPhoto token={this.state.token} seveur={this.serveur} setPage={this.setPage} />)
    }

    sendVideo(event) {
        this.props.setPage(<PublierVideo token={this.state.token} seveur={this.serveur} setPage={this.setPage} />)
    }

    render() {
        return (
            <section id="new_message">
                <input type="text" ref="message" name="commentaire" placeholder="votre vie" />
                <div id="button_new_message">
                    <input type="button" onClick={event => { this.sendPhoto(event) }} id="new_image" name="image" value="Photo" />
                    <input type="button" onClick={event => { this.sendVideo(event) }} id="new_video" name="video" value="Video" />
                    <input type="button" onClick={event => { this.sendMessage(event) }} id="add_new_message" name="Publier" value="Publier" />
                </div>
            </section>
        )
    }
}

export default NewMessage;