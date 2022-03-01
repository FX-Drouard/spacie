import React, { Component } from 'react';
import Message from './Message.js'
class MessageList extends Component {
    constructor(props) {
        super(props);
        this.message = "L'Oreille cassée est le sixième album de la série de bande dessinée Les Aventures de Tintin, créée par le dessinateur belge Hergé. L'histoire est d'abord pré-publiée en noir et blanc du 5 décembre 1935 au 25 février 1937 dans les pages du Petit Vingtième, le supplément pour la jeunesse du journal Le Vingtième Siècle, avant d'être éditée en album de 128 planches aux éditions Casterman. La version en couleur, ramenée à soixante-deux planches, paraît chez le même éditeur en juin 1943.Dans cette aventure, Tintin enquête sur le vol d'un fétiche arumbaya au musée ethnographique de Bruxelles, ce qui le conduit au San Theodoros puis au Nuevo Rico, deux États imaginaires d'Amérique du Sud créés par le dessinateur pour les besoins du récit. Le héros y rencontre notamment le général Alcazar, un dictateur guidé par son ambition personnelle et manipulé par les marchands d'armes ou les compagnies pétrolières occidentales, qui devient l'un des personnages récurrents de la série.Comme à son habitude, le dessinateur transpose l'actualité de son époque pour construire des éléments du récit. Il adapte par exemple la guerre du Chaco, un conflit extrêmement meurtrier qui oppose la Bolivie et le Paraguay de 1932 à 1935 et dont il suit le déroulement dans le périodique satirique français Le Crapouillot, mais s'inspire également de personnages réels comme le marchands d'armes Basil Zaharoff ou l'explorateur Percy Fawcett. Cette aventure est aussi un exemple de « merveilleux géographique » dans la mesure où Hergé crée chaque décor en s'inspirant de différents paysages d'Amérique latine et centrale."
    }

    getMessages() {
        if (this.props.token === "" && this.props.user == null)
            return this.props.serveur.getAleatoireMessages();

        if (this.props.profil)
            return this.props.serveur.getMessageUser(this.props.token);

        return this.props.serveur.getMessages(this.props.token);
    }

    render() {
        return (
            <section id="messages">
                {/* {
                    this.getMessages().map((message) => <Message token={this.props.token} serveur={this.props.serveur} setPage={this.setPage}  message={message} />)
                } */}

                {/* <Message setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} message={{ idMessage: 1, text: this.message, sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }} />
                <Message setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} message={{ idMessage: 1, text: "hoho", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }} /> */}
                <Message setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} message={{ idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }} />
                <Message setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} message={{ idMessage: 1, text: "hoho", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }} />
                <Message setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} message={{ idMessage: 1, text: "haha", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }} />
                <Message setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} message={{ idMessage: 1, text: "hoho", sender: { nickName: "Fristorm", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" } }} />

            </section>)
    }
}

export default MessageList