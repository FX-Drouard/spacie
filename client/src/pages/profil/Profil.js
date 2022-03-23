import React, { Component } from 'react';
import MessageList from '../accueil/message/MessagesList';
import Modifier from './Modifier.js'
import Main from '../main/Main.js'

class Profil extends Component {
    constructor(props) {
        super(props);
    }

    disconnect() {
        // TODO
        this.props.setBody(<Main serveur={this.props.serveur} setBody={this.props.setBody} />)
    }

    modify() {
        this.setPage(<Modifier user={this.props.user} serveur={this.props.serveur} getPage={this.props.getPage} />);
    }
    getMessages() {

        // TODO


        return [{ idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }, { idMessage: 1, text: "hoha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }, { idMessage: 1, text: "hahi", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }, { idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }]
    }
    render() {
        return <div className="millieu">
            <section id="info_user">
                <span className="photoProfil"><img id="pdp" src={this.props.user.photoProfil} alt="Photo de Profil" /></span>
                <div id="info_profil">
                    <div id="info_ligne">
                        <div id="loginProfil" className="info">
                            <h3>Login</h3>
                            <p>{this.props.user.login}</p>
                        </div>
                        <div id="emailProfil" className="info">
                            <h3>email</h3>
                            <p>{this.props.user.mail}</p>
                        </div>
                        <div id="loginProfil" className="info">
                            <h3>Nick name</h3>
                            <p>{this.props.user.nickName}</p>
                        </div>
                        <div id="creationProfil" className="info">
                            <h3>Date de Création</h3>
                            <p>{this.props.user.creationDate}</p>
                        </div>
                    </div>
                    <div id="button_profil">
                        <div className='buttons' onClick={() => this.disconnect()} >Déconnection</div>
                        <div className='buttons' onClick={() => this.modify()}  > Modifier</div>
                    </div>
                </div>

            </section >

            <MessageList profil={true} serveur={this.props.serveur} setPage={this.setPage} resultat={this.getMessages()} />


        </div >



    }
}

export default Profil