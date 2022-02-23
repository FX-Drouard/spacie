import React, { Component } from 'react';
import Profil from './Profil.js';

class ProfilButton extends Component {
    constructor(props) {
        super(props)
    }

    gotoProfil() {
        // this.props.setPage(<Profil user={this.props.serveur.getUser(this.props.token)}/>)
        this.props.setPage(<Profil user={{ login: "Palifen", mail: "fristorm@mail.spacie.fr", nickName: "fristorm", creationDate: "2022-02-24", photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png" }} />)
    }

    render() {

        return <div id="lien_profil">
            {/* <span onClick={() => this.gotoProfil()}><img src={this.props.serveur.getUser(this.props.token).getPhotoProfil()} alt="photo de profil" /></span> */}
            <span onClick={() => this.gotoProfil()}><img src="https://media.spacie.fr/Profil/Fristorm/pdp.png" alt="photo de profil" /></span>

        </div>

    }

}


export default ProfilButton