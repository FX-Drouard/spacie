import React, { Component } from 'react';
import MessageList from '../accueil/message/MessagesList';
import Main from '../Main.js'
import Popup from 'reactjs-popup';
import EditProfil from './EditProfil';
import DetailProfil from './DetailProfil';
import LoginPage from '../../login/LoginPage';

class Profil extends Component {
    constructor(props) {
        super(props);
        this.token = ""
    }


    disconnect() {
        // TODO
        this.props.setBody(<LoginPage serveur={this.props.serveur} setBody={this.props.setBody} />)
    }

    getMessages() {

        //    TODO

        let message = { idMessage: 1, text: "haha", sender: this.props.user }
        return [message, message, message, message, message, message, message, message, message]
    }
    render() {
        return <div className="millieu">
            <section id="info_user">
                <span className="photoProfil"><img id="pdp" src={this.props.user.photoProfil} alt="Photo de Profil" /></span>
                <div id="info_profil">
                    <div className="info_ligne">
                        <div id="loginProfil" className="info">
                            <h3>Login</h3>
                            <p className="breaker">{this.props.user.login}</p>
                        </div>
                        <div id="emailProfil" className="info">
                            <h3>email</h3>
                            <p className="breaker">{this.props.user.mail}</p>
                        </div>
                        <div id="loginProfil" className="info">
                            <h3>Nick name</h3>
                            <p className="breaker">{this.props.user.nickName}</p>
                        </div>
                        <div id="creationProfil" className="info">
                            <h3>Date de Création</h3>
                            <p className="breaker">{this.props.user.creationDate}</p>
                        </div>
                    </div>
                    <div id="button_profil">
                        <Popup
                            trigger={<div className='buttons display'>Details</div>}
                            modal
                            closeOnDocumentClick
                            closeOnEscape
                            contentStyle={{ padding: '10px', width: '500px' }}

                        >
                            {(close) =>
                                <DetailProfil user={this.props.user} close={close} />
                            }
                        </Popup>

                        <div className='buttons' onClick={() => this.disconnect()} >Déconnection</div>
                        <Popup
                            trigger={<div className='buttons'  > Modifier</div>}
                            modal
                            closeOnDocumentClick
                            closeOnEscape
                            contentStyle={{ padding: '10px', width: '500px' }}

                        >
                            {(close) =>
                                <EditProfil serveur={this.props.serveur} user={this.props.user} close={close} />
                            }
                        </Popup>
                    </div>
                </div>

            </section >

            <MessageList profil={true} serveur={this.props.serveur} setPage={this.setPage} resultat={this.getMessages()} />


        </div >



    }
}

export default Profil