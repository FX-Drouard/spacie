import react, { Component } from 'react'
import MessageUserInfo from '../accueil/message/MessageUserInfo';
import LoginPage from '../login/LoginPage'
class ProfilInfo extends Component {
    constructor(props) {
        super(props)
    }

    ajouter() {
        if (this.props.token === "") {
            this.props.setBody(<LoginPage setBody={this.props.setBody} serveur={this.props.serveur} setToken={this.props.setToken} />);
            return
        }
    }

    render() {
        return <div className="profil_info">
            <div className="message_user_info">
                <MessageUserInfo token={this.props.token} serveur={this.props.serveur} user={this.props.user} setPage={this.props.setPage} />
                <div className="button_recherche" onClick={() => this.ajouter()}>Ajouter</div>
            </div>
        </div>
    }
}

export default ProfilInfo

