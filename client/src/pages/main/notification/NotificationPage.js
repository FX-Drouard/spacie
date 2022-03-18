import React, { Component } from 'react'
import Notifications from './Notifications'



export default class NotificationPage extends Component {



    render() {
        let resultat = [{ idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, date: "22/02/2022", heure: "22:22" }, { idMessage: 1, text: "hoha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, date: "22/02/2022", heure: "22:22" },
        { idMessage: 1, text: "hahi", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, date: "22/02/2022", heure: "22:22" },
        { idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }, date: "22/02/2022", heure: "22:22" }]
        // let resultat = this.props.serveur.get('localhost:8888/notification',this.props.token)
        return (
            <div className="millieu">
                <Notifications setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.props.setPage} resultat={resultat} />
            </div>
        )
    }
}
