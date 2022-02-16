import React, { Component } from 'react';
import Commente from './boutons/Commente.js'
import Jaime from './boutons/Jaime.js'
import Partager from './boutons/Partager.js'

class Message extends Component {
    constructor(props) {
        super(props);
    }

    commentairePublication(event) {
        this.props.setPage(<Commente token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} idMessage={this.props.idMessage} />)
    }

    partgerPublication(event) {
        this.props.setPage(<Partager token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} idMessage={this.props.idMessage} />)
    }


    render() {
        return <article className="commentaire">
            <div className="message_user_info">
                <MessageUserInfo token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} />
                <MessageDate idMessage={this.props.idMessage} />
            </div>
            <p className="commentaire_textuel">J'ai trouvé un site incroyable!!! c'est <a
                href="https://emby.palifen.fr">le
                Emby de Palifen</a>!!!</p>

            <div class="message_button">
                <Jaime token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} idMessage={this.props.idMessage} />
                <input type="button" onClick={event => { this.commentairePublication(event) }} id="commentaire" name="Commentaire" value="Commentaire" />
                <input type="button" onClick={event => { this.partgerPublication(event) }} id="add_new_message" name="Partager" value="Partager" />
            </div>
        </article>
    }
}

export default Message