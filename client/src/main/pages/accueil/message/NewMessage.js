import React, { Component } from 'react';
import Media from './action nouveau message/Media.js';

import Accueil from '../Accueil.js'
class NewMessage extends Component {
    constructor(props) {
        super(props);
        this.publication = null
        this.erreur = ""

        this.state = {
            check: false
        }
    }

    sendMessage(event) {
        if (!(this.publication === null || this.publication === "")) {
            this.erreur = this.props.serveur.sendMessage(this.publication, this.props.token, this.props.message, this.state.check)
            this.props.setPage(<Accueil token={this.state.token} serveur={this.serveur} setPage={this.setPage} erreur={this.erreur} />)
        }
    }

    sendMedia(event) {
        this.props.setPage(<Media token={this.state.token} serveur={this.serveur} setPage={this.setPage} prive={this.state.check} />)
    }

    checkPubPrivee() {
        this.setState({ check: !this.state.check })
    }

    render() {
        return (
            <section id="new_message">
                <textarea ref={this.publication} name="commentaire" placeholder="votre vie" />
                <div id="footer_new_message">
                    <div id="message_prive" onClick={(event) => this.checkPubPrivee()}>Publication privée <img id="check" src={"https://media.spacie.fr/default/pages/svg/" + (this.state.check ? "check" : "notcheck") + ".svg"} style={{ width: this.state.check ? "10%" : "5%", maxWidth: this.state.check ? "9%" : "20px" }} alt="Media" /></div>
                    <div className="button_new_message">
                        <div className="new_message_button" onClick={event => { this.sendMedia(event) }}><img src="https://media.spacie.fr/default/pages/svg/upload.svg" alt="Media" /></div>
                        <div className="new_message_button" onClick={event => { this.sendMedia(event) }}><img src="https://media.spacie.fr/default/pages/svg/send.svg" alt="Publier" /></div>
                    </div>
                </div>
                <div className="erreur">{this.props.erreur}</div>
            </section>
        )
    }
}

export default NewMessage;