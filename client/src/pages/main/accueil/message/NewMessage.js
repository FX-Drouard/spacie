import React, { Component } from 'react';
import { ImagePicker } from 'react-file-picker'
import Picker from 'emoji-picker-react'

import Accueil from '../Accueil.js'
import Popup from 'reactjs-popup';
class NewMessage extends Component {
    constructor(props) {
        super(props);
        this.publication = null
        this.erreur = ""

        this.state = {
            check: false,
            image: "",
            erreur: ""
        }
        this.token = document.cookie.split(";").find(it => it.includes("token=")).split("=")[1]

    }

    sendMessage(event) {
        if (!(this.publication === null || this.publication === "")) {
            this.erreur = this.props.serveur.sendMessage(this.publication, this.token, this.props.message, this.state.check)
            this.props.setPage(<Accueil serveur={this.serveur} setPage={this.setPage} erreur={this.erreur} />)
        }
    }

    checkPubPrivee() {
        this.setState({ check: !this.state.check })
    }
    imagePicker() {
        return <ImagePicker
            extensions={["jpg", "jpeg", "png"]}
            onChange={(base64) => {
                this.setState({ image: base64 });
            }}
            dims={{
                minWidth: 100,
                maxWidth: 10000,
                minHeight: 100,
                maxHeight: 10000,
            }}
            onError={(errMsg) => {
                this.setState({ erreur: errMsg });
            }}
        >
            <button
                className="fa-solid fa-panorama fa-xl"
            >
            </button>
        </ImagePicker>

    }




    render() {
        return (
            <section className="new_message">
                <textarea ref={this.publication} name="commentaire" placeholder="votre vie" />
                {this.state.image && <img src={this.state.image} alt=""></img>}
                <div id="footer_new_message">
                    <div id="message_prive" onClick={(event) => this.checkPubPrivee()}><span className={"fa-solid fa-square" + (this.state.check ? "-check" : "")} id="check" alt="Media"></span><span>Publication privée</span></div>
                    <div className="button_new_message">
                        {this.state.image != "" ?
                            <span className="fa-solid fa-xmark fa-xl" onClick={(event) => this.setState({ image: "" })}> </span>
                            : <span></span>
                        }
                        <Popup
                            trigger={<span className="fa-solid fa-xmark fa-xl" > </span>}
                        >
                            <Picker></Picker>
                        </Popup>
                        {this.imagePicker()}
                        <div onClick={event => { this.sendMessage(event) }} className="buttons">Publier</div>
                    </div>
                </div>


                <div className="erreur">{this.state.erreur}</div>
            </section >
        )
    }
}

export default NewMessage;