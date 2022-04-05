import React, { Component } from 'react';
import Profil from './Profil.js';
const data = require('../general/Data.js')

class ProfilButton extends Component {
    constructor(props) {
        super(props)
        this.user = data.getProfile("Fristorm")
    }

    gotoProfil() {
        // TODO
        this.props.setPage(
            <Profil 
            setBody={this.props.setBody} 
            serveur={this.props.serveur} 
            setPage={this.props.setPage} 
            user={this.user} />
        )
    }

    render() {

        return <div id="lien_profil">

            <span onClick={() => this.gotoProfil()}><img src={this.user.photoProfil} alt="photo de profil" /></span>

        </div>

    }

}


export default ProfilButton