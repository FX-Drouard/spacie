import React, { Component } from 'react';
import MessageList from '../accueil/message/MessagesList';

import Popup from 'reactjs-popup';
import EditProfil from './EditProfil';
import DetailProfil from './DetailProfil';
import LoginPage from '../../login/LoginPage';
const data = require('../general/Data.js')

class Profil extends Component {
    constructor(props) {
        super(props);
        this.token = ""
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    disconnect() {
        // TODO
        this.props.setBody(<LoginPage  setBody={this.props.setBody} />)
    }

    getMessages() {

        //    TODO

        // let message = { idMessage: 1, text: "haha", sender: this.props.user }
        // return [message, message, message, message, message, message, message, message, message]
        
        return data.getMessagesProfil(this.props.user.login)
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
                        {this.props.user.nickName == "Fristorm" &&
                            <div className='buttons' onClick={() => this.disconnect()} >Déconnection</div>
                        }
                        <Popup
                            trigger={<div className='buttons'>Details</div>}
                            modal
                            closeOnDocumentClick
                            closeOnEscape
                            contentStyle={{ padding: '10px', width: '500px' }}

                        >
                            {(close) =>
                                <DetailProfil user={this.props.user} close={close} />
                            }
                        </Popup>
                        {this.props.user.nickName == "Fristorm" &&
                            <Popup
                                trigger={<div className='buttons display'> Modifier</div>}
                                modal
                                closeOnDocumentClick
                                closeOnEscape
                                contentStyle={{ padding: '10px', width: '500px' }}

                            >
                                {(close) =>
                                    <EditProfil user={this.props.user} close={close} setBody={this.props.setBody}/>
                                }
                            </Popup>}
                    </div>
                </div>
            </section >
            <MessageList profil={true} serveur={this.props.serveur} setPage={this.props.setPage} resultat={this.getMessages()} />
        </div >



    }
}

export default Profil