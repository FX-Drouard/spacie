import React, { Component } from 'react'
import { ImagePicker } from 'react-file-picker'
export default class EditProfil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: this.props.user.photoProfil,
            nickName: this.props.user.nickName,
            bibliographie: this.props.user.biographie,
            date: {
                jour: this.props.user.date.jour,
                mois: this.props.user.date.mois,
                annee: this.props.user.date.annee
            },
            email: this.props.user.mail,
            messageErreur: ""
        }


        this.confPassword = ""
        this.newPassword = ""

    }

    getErreur() {
        return <div className="erreur" ><span>{this.state.messageErreur}</span></div>
    }

    sauvgarder() {

        const regEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")
        const regNum = new RegExp("^[0-9]+")


        if ((this.state.date.annee != "" && this.state.date.jour != "" && this.state.date.mois != "") && !(regNum.test(this.state.date.annee) && regNum.test(this.state.date.jour) && regNum.test(this.state.date.mois))) {
            this.setState({ messageErreur: "date de date naissence invalide" })
            return;
        }

        if (!regEmail.test(this.state.email)) {
            this.setState({ messageErreur: "date de date naissence invalide" })
            return;
        }

        if (this.newPassword != "" && this.confPassword != "" && this.newPassword != this.confPassword) {
            this.setState({ messageErreur: "le mot de passe de confirmation est different du mot de passe" })
            return;
        }
        let password = this.motDePasse
        if (this.newPassword != "")
            password = this.newPassword



        this.props.serveur.post("/api/user/edit",
            {
                login: this.props.login,
                nickName: this.state.nickName,
                bibliographie: this.state.bibliographie,
                image: this.state.image,
                date: { jour: this.state.date.jour, mois: this.state.date.mois, annee: this.state.date.annee },
                email: this.state.email,
                motDePasse: password
            }
        ).catch((err) => {
            this.setState({ messageErreur: err.message })
        })

    }

    render() {
        return (
            <div id="edit_profil">
                <div className="photoProfil"><img id="pdp" src={this.state.image} alt="Photo de Profil" /></div>
                <div>
                    <ImagePicker
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
                            className="buttons"
                        >
                            Editer
                        </button>
                    </ImagePicker>
                </div>

                <div className="edit_content">
                    <div>Nick name</div>
                    <div className="text">
                        <input type="text" name="nickName" placeholder={this.props.user.nickName} maxLength="30"
                            alt="le nick name doit avoir que des lettres et des chiffres" onChange={event => this.setState({ nickName: event.target.value })} />
                    </div>
                </div>
                <div className="edit_content">

                    <div>Biographie</div>
                    <div className="text">
                        <input type="text" name="Biographie" placeholder={this.props.user.biographie} maxLength="150"
                            alt="le login doit avoir que des lettres et des chiffres" onChange={event => this.setState({ bibliographie: event.target.value })} />
                    </div>
                </div>
                <div className="edit_content">

                    <div>Mot de passe acctuel</div>
                    <div className="text">
                        <input type="password" name="Mot de Passe" placeholder="Votre mot de passe" maxLength="30" onChange={event => this.motDePasse = event.target.value} />
                    </div>
                </div>
                <div className="edit_content">
                    <div>Nouveau mot de passe</div>
                    <div className="text">
                        <input type="password" name="Confirmez le mot de passe" placeholder="votre nouveau mot de passe"
                            maxLength="30" onChange={event => this.newPassword = event.target.value} />
                    </div>
                </div>
                <div className="edit_content">

                    <div>Confirmation du nouveau mot de passe</div>
                    <div className="text">
                        <input type="password" name="Confirmez le mot de passe" placeholder="Confirmez votre mot de passe"
                            maxLength="30" onChange={event => this.confPassword = event.target.value} />
                    </div>
                </div>

                {this.getErreur()}
                <div style={{ display: 'flex', gap: "10px" }}>
                    <div className="buttons" onClick={(event) => { this.sauvgarder() }}>Sauvgarder</div>
                    <div className="buttons" onClick={(event) => { this.props.close() }}>Close</div>
                </div>
            </div >
        )
    }
}
